(function(){
  // Ensure QUESTIONS exists
  if (typeof QUESTIONS === 'undefined') {
    document.body.innerHTML = '<p style="color:#f88;padding:20px">Error: QUESTIONS not found. Make sure questions.js is loaded.</p>';
    return;
  }

  // KV config - match gen.js
  const APP_KEY = '92fvhpr1';
  const BASE_URL = 'https://keyvalue.immanuel.co/api/KeyVal';

  // Helpers for online KV
  async function writeOnline(key, value) {
    try {
      const url = `${BASE_URL}/UpdateValue/${APP_KEY}/${key}/${encodeURIComponent(value)}`;
      const response = await fetch(url, { method: 'POST' });
      return response.ok;
    } catch (e) { console.error('writeOnline error', e); return false; }
  }
  async function readOnline(key) {
    try {
      const url = `${BASE_URL}/GetValue/${APP_KEY}/${key}`;
      const resp = await fetch(url);
      if (!resp.ok) return '';
      const raw = await resp.text();
      return raw.replace(/^"|"$/g, '').trim();
    } catch (e) { console.error('readOnline error', e); return ''; }
  }

  // Hash map provided by hash.js in the page: expect `const hash = {"url":"h_x"}`
  let HASH = (typeof window !== 'undefined' && (window.hash || (typeof hash !== 'undefined' && hash))) || {};

  // Fallback: if `hash.js` was written as CommonJS (module.exports) or otherwise
  // not exposing `hash` in the browser, fetch and parse the file to extract
  // the mapping. This makes the frontend robust to both `const hash = {...}`
  // and `module.exports = hash` formats.
  async function ensureHashLoaded() {
    if (HASH && Object.keys(HASH).length) return;
    try {
      const txt = await fetch('hash.js', {cache: 'no-store'}).then(r=>r.text());
      // try to extract a JSON-like object after "const hash ="
      const m = txt.match(/const\s+hash\s*=\s*({[\s\S]*?});/);
      if (m && m[1]) {
        // normalize single quotes to double for JSON safety
        let objStr = m[1].replace(/([\n\r\t])/g,' ');
        // Ensure property names and strings use double quotes - the file likely already does
        try {
          const parsed = JSON.parse(objStr);
          HASH = parsed;
          window.hash = HASH;
          return;
        } catch(e){
          // attempt a looser eval fallback (last resort)
          try { /* eslint-disable no-eval */ HASH = (0,eval)('(' + objStr + ')'); window.hash = HASH; return; } catch(e2){}
        }
      }
    } catch(e) { /* ignore */ }
  }

  // local caching
  const TTL_MS = 1 * 60 * 60 * 1000; // 1 hour
  const pending = new Map();
  const statusCache = new Map();
  let fullFetchPerformed = false;
  let forceFullFetch = false;

  function readLocal(key) {
    try {
      const raw = localStorage.getItem('oa_status_' + key);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (!obj || !obj.status) return null;
      if (Date.now() - (obj.ts || 0) > TTL_MS) return null;
      // refresh TTL when restored from local storage
      writeLocal(key, obj.status);
      return obj.status;
    } catch (e) { return null; }
  }
  function writeLocal(key, status) {
    try { localStorage.setItem('oa_status_' + key, JSON.stringify({ status, ts: Date.now() })); }
    catch(e){ console.error('local write failed', e); }
  }
  function clearLocal(key) { try { localStorage.removeItem('oa_status_' + key); } catch(e){} }

  // UI refs
  const els = {
    search: document.getElementById('search'),
    diff: document.getElementById('diff'),
    type: document.getElementById('type'),
    company: document.getElementById('company'),
    forceFetchBtn: document.getElementById('forceFetchBtn'),
    tbody: document.querySelector('#qtable tbody'),
    companies: document.getElementById('companies'),
    count: document.getElementById('count'),
    summary: document.getElementById('summary')
  };

  const state = { search: '', diff: 'All', type: 'All', company: 'All', sort: 'id', sortDir: 1 };

  const COMPANIES = Array.from(new Set(QUESTIONS.flatMap(q => q.cos))).sort();

  function initCompaniesSelect(){ COMPANIES.forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; els.company.appendChild(o); }); }

  function diffClass(d){ return d==='Easy' ? 'diff-easy' : d==='Medium' ? 'diff-med' : 'diff-hard'; }
  function tierClass(t){ return t==='warmup' ? 'tier-warmup' : t==='core' ? 'tier-core' : 'tier-decider'; }

  const CO_PALETTE = [
    ['#312e81','#c7d2fe','#4338ca'],['#064e3b','#bbf7d0','#047857'],['#831843','#fbcfe8','#be185d'],
    ['#365314','#ecfccb','#65a30d'],['#164e63','#cffafe','#0ea5a3'],['#6b21a8','#f3e8ff','#7c2dbe'],
    ['#881337','#ffe4e6','#e11d48'],['#78350f','#fef3c7','#d97706']
  ];
  function coColor(name){ const idx = Math.abs([...name].reduce((a,c)=>a+c.charCodeAt(0),0)) % CO_PALETTE.length; return CO_PALETTE[idx]; }

  function getStatusKey(q){ const h = HASH[q.url]; return h ? String(h) : null; }

  function getFiltered(){
    return QUESTIONS.filter(q=>{
      if (state.search){ const s = state.search.toLowerCase(); if (!q.name.toLowerCase().includes(s) && !q.concept.toLowerCase().includes(s)) return false; }
      if (state.diff !== 'All' && q.diff !== state.diff) return false;
      if (state.type !== 'All' && q.type !== state.type) return false;
      if (state.company !== 'All' && !q.cos.includes(state.company)) return false;
      return true;
    }).sort((a,b)=>{
      let v=0; if (state.sort==='id') v=a.id-b.id; if (state.sort==='name') v=a.name.localeCompare(b.name);
      if (state.sort==='diff') v=['Easy','Medium','Hard'].indexOf(a.diff)-['Easy','Medium','Hard'].indexOf(b.diff);
      if (state.sort==='type') v=['warmup','core','decider'].indexOf(a.type)-['warmup','core','decider'].indexOf(b.type);
      if (state.sort==='concept') v=a.concept.localeCompare(b.concept);
      return v * state.sortDir;
    });
  }

  // load status for a single key, using local cache and pending map
  async function fetchStatusForKey(key){
    if (!key) return 'unchecked';
    // Use local cache unless a manual full refresh was requested.
    if (!forceFullFetch) {
      const local = readLocal(key);
      if (local) return local;
    }
    // avoid duplicate network calls
    if (pending.has(key)){
      try { return await pending.get(key); } catch(e){ return 'unchecked'; }
    }

    const p = (async ()=>{
      try{
        // mark that we're doing a network-backed fetch
        fullFetchPerformed = true;
        const v = await readOnline(key);
        const st = (v === 'checked' || v === 'true' || v === '1') ? 'checked' : 'unchecked';
        writeLocal(key, st);
        return st;
      }catch(e){ console.error('fetchStatusForKey error',e); return 'unchecked'; }
    })();

    pending.set(key,p);
    try{ const r = await p; return r; } finally { pending.delete(key); }
  }

  // toggle and persist
  async function toggleStatusForKey(key, button){
    if (!key) return;
    // optimistic UI
    const current = (button && button.dataset && button.dataset.state) ? button.dataset.state : readLocal(key) || 'unchecked';
    const next = current === 'checked' ? 'unchecked' : 'checked';
    if (button){ button.textContent = next === 'checked' ? 'Solved' : 'Unchecked'; button.className = `status-btn ${next === 'checked' ? 'status-checked' : 'status-unchecked'}`; }
    writeLocal(key, next);
    statusCache.set(key,next);
    // write online (no need to await for UI)
    try{ const ok = await writeOnline(key, next); if (!ok) console.warn('KV update failed for', key); }
    catch(e){ console.error('toggle write error', e); }
  }

  function updateHeaderStats(){
    document.getElementById('easyCount').textContent = QUESTIONS.filter(q=>q.diff==='Easy').length;
    document.getElementById('medCount').textContent = QUESTIONS.filter(q=>q.diff==='Medium').length;
    document.getElementById('hardCount').textContent = QUESTIONS.filter(q=>q.diff==='Hard').length;
    document.getElementById('deciderCount').textContent = QUESTIONS.filter(q=>q.type==='decider').length;
  }

  function updateSortIcons(){ document.querySelectorAll('#qtable th[data-col]').forEach(th=>{ const col = th.getAttribute('data-col'); const icon = th.querySelector('.sortIcon'); if (!icon) return; if (state.sort === col) icon.textContent = state.sortDir === 1 ? '▲' : '▼'; else icon.textContent = '⇅'; }); }

  async function renderTable(){
    const rows = getFiltered();
    els.tbody.innerHTML = '';
    const fetchPromises = [];
    for (const q of rows){
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${q.id}</td>
        <td><a href="${q.url}" target="_blank">${q.name} <span class="link-icon">↗</span></a></td>
        <td class="muted hide-md">${q.concept}</td>
        <td><span class="badge ${diffClass(q.diff)}">${q.diff}</span></td>
        <td><span class="badge ${tierClass(q.type)}">${q.type === 'warmup' ? 'Q1 / Warmup' : q.type === 'core' ? 'Q2 / Core' : 'Q3-4 / Decider'}</span></td>
        <td class="status-cell"><button class="status-btn status-loading" disabled>Loading...</button></td>
        <td></td>
      `;

      // company chips
      const tdCo = tr.querySelector('td:last-child');
      q.cos.slice(0,5).forEach(c=>{
        const s = document.createElement('span'); s.className='company-chip clickable'; s.textContent=c; s.style.marginRight='6px';
        const [bg,textColor,border] = coColor(c);
        s.style.background = bg; s.style.color = textColor; s.style.borderColor = border;
        s.onclick = ()=>{ state.company = c; els.company.value = c; renderAll(); };
        tdCo.appendChild(s);
      });
      if (q.cos.length>5) tdCo.appendChild(Object.assign(document.createElement('span'),{textContent:'+'+(q.cos.length-5),className:'muted'}));

      els.tbody.appendChild(tr);

      // status handling
      const btn = tr.querySelector('.status-cell button');
      const key = getStatusKey(q);
      if (!key){ btn.textContent = 'Unchecked'; btn.className = 'status-btn status-unchecked'; btn.disabled = true; continue; }

      // fetch status (use cached/local when possible)
      const p = fetchStatusForKey(key).then(st=>{
        btn.textContent = st === 'checked' ? 'Solved' : 'Unchecked';
        btn.className = `status-btn ${st === 'checked' ? 'status-checked' : 'status-unchecked'}`;
        btn.disabled = false;
        btn.dataset.state = st;
      }).catch(e=>{
        btn.textContent = 'Unchecked'; btn.className = 'status-btn status-unchecked'; btn.disabled = false;
      });
      fetchPromises.push(p);

      btn.addEventListener('click', async ()=>{
        btn.disabled = true;
        await toggleStatusForKey(key, btn);
        btn.disabled = false;
        btn.dataset.state = (btn.dataset.state === 'checked' ? 'unchecked' : 'checked');
      });
    }
    els.count.textContent = `Showing ${rows.length} / ${QUESTIONS.length}`;
    updateSortIcons();
      // after all status fetches complete, if any network-backed fetch happened, log once
      try {
        await Promise.all(fetchPromises);
        if (fullFetchPerformed) {
          console.log('full fetch of status done');
          fullFetchPerformed = false;
        } else {
          console.log('using saved checklist');
        }
      } catch (e) {
        if (fullFetchPerformed) {
            console.log('full fetch of status done');
            fullFetchPerformed = false;
          } else {
            console.log('using saved checklist');
          }
      }
  }

  function renderCompaniesPanel(){
    const top = [
      ["Microsoft",52],["Apple",50],["Adobe",47],["Salesforce",45],["Intuit",45],["Amazon",42],["Autodesk",39]
    ];
    els.companies.innerHTML = '';
    top.forEach(([co,lpa])=>{
      const cnt = QUESTIONS.filter(q=>q.cos.includes(co)).length;
      const btn = document.createElement('button'); btn.className='company'; btn.innerHTML = `<div>${co}</div><div class="muted">${lpa} LPA · <strong style="color:var(--accent)">${cnt}q</strong></div>`;
      btn.onclick = ()=>{ state.company = state.company===co ? 'All' : co; els.company.value = state.company; renderAll(); btn.classList.toggle('active', state.company===co); };
      if (state.company===co) btn.classList.add('active');
      els.companies.appendChild(btn);
    });
  }

  function renderSummary(){
    const easy = QUESTIONS.filter(q=>q.diff==='Easy').length;
    const med = QUESTIONS.filter(q=>q.diff==='Medium').length;
    const hard = QUESTIONS.filter(q=>q.diff==='Hard').length;
    els.summary.textContent = `— Targeting ${COMPANIES.length} companies · ${easy} Easy · ${med} Medium · ${hard} Hard`;
  }

  function renderAll(){ renderSummary(); renderTable(); renderCompaniesPanel(); }

  async function refreshStatuses(){
    if (!els.forceFetchBtn) return;
    forceFullFetch = true;
    els.forceFetchBtn.disabled = true;
    els.forceFetchBtn.textContent = 'Refreshing...';
    try {
      await renderTable();
    } finally {
      forceFullFetch = false;
      els.forceFetchBtn.disabled = false;
      els.forceFetchBtn.textContent = 'Refresh statuses';
    }
  }

  // controls
  els.search.addEventListener('input', e=>{ state.search = e.target.value; renderTable(); });
  els.diff.addEventListener('change', e=>{ state.diff = e.target.value; renderTable(); });
  els.type.addEventListener('change', e=>{ state.type = e.target.value; renderTable(); });
  els.company.addEventListener('change', e=>{ state.company = e.target.value; renderAll(); });
  if (els.forceFetchBtn) els.forceFetchBtn.addEventListener('click', refreshStatuses);

  // sorting by header click
  document.querySelectorAll('#qtable th[data-col]').forEach(th=>{
    th.addEventListener('click', ()=>{
      const col = th.getAttribute('data-col');
      if (state.sort === col) state.sortDir = -state.sortDir; else { state.sort = col; state.sortDir = 1; }
      renderTable();
    });
  });

  // init
  initCompaniesSelect();
  updateHeaderStats();
  // ensure hash mapping is available (fallback to fetching hash.js if needed)
  ensureHashLoaded().then(()=>{
    renderAll();
  }).catch(()=>{
    renderAll();
  });

})();
