const fs = require('fs');

// 1. Import your independent files
const QUESTIONS = require('./questions.js');
const hash = require('./hash.js');

// 2. API Configuration
const APP_KEY = "92fvhpr1";
const COUNTER_KEY = "hashgen";
const BASE_URL = `https://keyvalue.immanuel.co/api/KeyVal`;

// --- Network Helpers ---
async function writeOnline(key, value) {
    try {
        const url = `${BASE_URL}/UpdateValue/${APP_KEY}/${key}/${encodeURIComponent(value)}`;
        const response = await fetch(url, { method: 'POST' });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return true;
    } catch (error) {
        console.error(`Failed to write key "${key}":`, error);
        return false;
    }
}

async function readOnline(key) {
    try {
        const url = `${BASE_URL}/GetValue/${APP_KEY}/${key}`;
        const response = await fetch(url);
        if (!response.ok) return "";
        
        const rawData = await response.text();
        return rawData.replace(/^"|"$/g, '').trim();
    } catch (error) {
        console.error(`Failed to read key "${key}":`, error);
        return "";
    }
}

// --- Main Logic ---
async function updateHashFile() {
    console.log("Fetching current counter from KV store...");
    const counterStr = await readOnline(COUNTER_KEY);
    
    let counter = parseInt(counterStr) || 0; 
    let newHashesAdded = 0;

    for (const question of QUESTIONS) {
        const url = question.url;

        // Check if the URL is unhashed
        if (!hash.hasOwnProperty(url)) {
            const uniqueHash = `h_${counter.toString(36)}`; 
            
            // 1. Add to local hash object
            hash[url] = uniqueHash;
            console.log(`Generated new hash for ${url}: ${uniqueHash}`);
            
            // 2. NEW: Immediately create this hash as a key online, set to false
            console.log(`Registering key "${uniqueHash}" as false in KV store...`);
            const keyCreated = await writeOnline(uniqueHash, false);
            
            if (!keyCreated) {
                console.error(`⚠️ Warning: Failed to set ${uniqueHash} to false online.`);
            }
            
            counter++;
            newHashesAdded++;
        }
    }

    if (newHashesAdded > 0) {
        console.log(`Updating online counter to: ${counter}...`);
        const success = await writeOnline(COUNTER_KEY, counter);
        
        if (success) {
            // 3. Physically update the hash.js file
            const fileContent = `const hash = ${JSON.stringify(hash, null, 2)};\n\nmodule.exports = hash;`;
            
            fs.writeFileSync('./hash.js', fileContent, 'utf-8');
            console.log(`✅ Successfully added ${newHashesAdded} new hashes to hash.js!`);
        } else {
            console.error("❌ Failed to update the online counter. Aborting file write to prevent desync.");
        }
    } else {
        console.log("No new URLs found. hash.js is already up to date.");
    }
}

// Execute
updateHashFile();