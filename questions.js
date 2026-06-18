// ═══════════════════════════════════════════════════════════════════════════════
// LEETCODE / PROBLEM SET — EXPANDED QUESTION BANK
// Companies ordered by avg_ctc from company-rankings-2024-resorted.csv:
//   Microsoft(52) | Zomato(52) | Adobe(47) | Intuit(44.92) | Salesforce(44.83)
//   Amazon(42) | Autodesk(39) | Arcesium(36) | ServiceNow(35.77) | PayPal(34.4)
//   Commvault(32.99) | Flipkart(32.5) | Morgan Stanley(29.8) | Qualcomm(28.95)
//   Samsung(26.67) | Expedia(26) | CISCO(24.31) | Wells Fargo(24) | Goldman Sachs(24)
//   JP Morgan Chase(23.5) | Walmart(22.27) | BNY Mellon(21.64) | JP Morgan(19.75)
//   Oracle OFSS(19.18) | BlackRock(18.89) | Optum(18.86) | Databricks(18.27)
//   American Express(17.73) | Samsung R&D(17.75) | HPE(17.5) | Citi(18)
// ═══════════════════════════════════════════════════════════════════════════════

const QUESTIONS = [

  // ─── ARRAYS / BASICS ────────────────────────────────────────────────────────
  { id:1, name:"Two Sum", url:"https://leetcode.com/problems/two-sum/", concept:"Arrays + HashMap", diff:"Easy", type:"warmup", cos:["Amazon","Microsoft","Adobe","Walmart","Goldman Sachs"] },
  { id:2, name:"Best Time to Buy and Sell Stock", url:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", concept:"Arrays / Greedy", diff:"Easy", type:"warmup", cos:["Amazon","Goldman Sachs","Microsoft","PayPal","Wells Fargo"] },
  { id:3, name:"Maximum Subarray (Kadane's)", url:"https://leetcode.com/problems/maximum-subarray/", concept:"Kadane's Algorithm", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs","Adobe","Walmart"] },
  { id:4, name:"Container With Most Water", url:"https://leetcode.com/problems/container-with-most-water/", concept:"Two Pointers", diff:"Medium", type:"core", cos:["Amazon","Adobe","Goldman Sachs","Flipkart"] },
  { id:5, name:"3Sum", url:"https://leetcode.com/problems/3sum/", concept:"Two Pointers / Sorting", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft","Goldman Sachs"] },
  { id:6, name:"Product of Array Except Self", url:"https://leetcode.com/problems/product-of-array-except-self/", concept:"Prefix Products", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Goldman Sachs","Arcesium"] },
  { id:7, name:"Maximum Product Subarray", url:"https://leetcode.com/problems/maximum-product-subarray/", concept:"DP / Kadane Variant", diff:"Medium", type:"core", cos:["Amazon","Microsoft","PayPal","Goldman Sachs"] },
  { id:8, name:"Jump Game II", url:"https://leetcode.com/problems/jump-game-ii/", concept:"Greedy / BFS", diff:"Medium", type:"core", cos:["Microsoft","Amazon","Flipkart","CISCO"] },
  { id:9, name:"Spiral Matrix", url:"https://leetcode.com/problems/spiral-matrix/", concept:"Matrix Direction Simulation", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Adobe","Goldman Sachs","Salesforce"] },
  { id:10, name:"Rotate Image", url:"https://leetcode.com/problems/rotate-image/", concept:"Matrix Manipulation", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Adobe","Goldman Sachs"] },
  { id:11, name:"Set Matrix Zeroes", url:"https://leetcode.com/problems/set-matrix-zeroes/", concept:"Matrix Manipulation", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Adobe","Flipkart"] },
  { id:12, name:"Trapping Rain Water", url:"https://leetcode.com/problems/trapping-rain-water/", concept:"Two Pointers / Pre-computation", diff:"Hard", type:"core", cos:["Goldman Sachs","Amazon","Microsoft","Adobe"] },

  // ─── SLIDING WINDOW ─────────────────────────────────────────────────────────
  { id:13, name:"Longest Substring Without Repeating Characters", url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/", concept:"Sliding Window", diff:"Medium", type:"warmup", cos:["Amazon","Adobe","Microsoft","Goldman Sachs","Flipkart"] },
  { id:14, name:"Minimum Size Subarray Sum", url:"https://leetcode.com/problems/minimum-size-subarray-sum/", concept:"Sliding Window", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Walmart","BNY Mellon"] },
  { id:15, name:"Max Consecutive Ones III", url:"https://leetcode.com/problems/max-consecutive-ones-iii/", concept:"Sliding Window (Binary Array)", diff:"Medium", type:"core", cos:["Amazon","BNY Mellon","CISCO","Goldman Sachs"] },
  { id:16, name:"Minimum Window Substring", url:"https://leetcode.com/problems/minimum-window-substring/", concept:"Sliding Window + HashMap", diff:"Hard", type:"decider", cos:["Amazon","Goldman Sachs","Adobe","Arcesium"] },
  { id:17, name:"Sliding Window Maximum", url:"https://leetcode.com/problems/sliding-window-maximum/", concept:"Monotonic Queue", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs","Samsung"] },
  { id:18, name:"Subarrays with K Different Integers", url:"https://leetcode.com/problems/subarrays-with-k-different-integers/", concept:"Math + Sliding Window", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs"] },
  { id:19, name:"Minimum Operations to Reduce X to Zero", url:"https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/", concept:"Sliding Window / Complement", diff:"Medium", type:"core", cos:["Amazon"] },
  { id:20, name:"1003C - Intense Heat (CF)", url:"https://codeforces.com/problemset/problem/1003/C", concept:"Prefix Sums + Sliding Window", diff:"Medium", type:"core", cos:["BNY Mellon","CISCO","Goldman Sachs"] },

  // ─── BINARY SEARCH ──────────────────────────────────────────────────────────
  { id:21, name:"Search in Rotated Sorted Array", url:"https://leetcode.com/problems/search-in-rotated-sorted-array/", concept:"Binary Search", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs","Flipkart"] },
  { id:22, name:"Find Peak Element", url:"https://leetcode.com/problems/find-peak-element/", concept:"Binary Search", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","CISCO"] },
  { id:23, name:"Find First and Last Position", url:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", concept:"Binary Search", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs","Walmart"] },
  { id:24, name:"Koko Eating Bananas", url:"https://leetcode.com/problems/koko-eating-bananas/", concept:"Binary Search on Answer", diff:"Medium", type:"core", cos:["Amazon","Walmart","Goldman Sachs","Flipkart"] },
  { id:25, name:"Aggressive Cows (SPOJ)", url:"https://www.spoj.com/problems/AGGRCOW/", concept:"Binary Search on Answer", diff:"Medium", type:"core", cos:["Goldman Sachs","Flipkart","Arcesium","CISCO"] },
  { id:26, name:"Minimum Days to Make m Bouquets", url:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", concept:"Binary Search with Grouping", diff:"Medium", type:"core", cos:["Amazon","Flipkart","Goldman Sachs"] },
  { id:27, name:"Split Array Largest Sum", url:"https://leetcode.com/problems/split-array-largest-sum/", concept:"Binary Search on Answer", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs"] },
  { id:28, name:"Median of Two Sorted Arrays", url:"https://leetcode.com/problems/median-of-two-sorted-arrays/", concept:"Binary Search Partitions", diff:"Hard", type:"decider", cos:["Adobe","Goldman Sachs","Microsoft","Arcesium","Morgan Stanley"] },
  { id:29, name:"Find K-th Smallest Pair Distance", url:"https://leetcode.com/problems/find-k-th-smallest-pair-distance/", concept:"Binary Search on Answer", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Morgan Stanley"] },
  { id:30, name:"Kth Smallest Number in Multiplication Table", url:"https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/", concept:"Binary Search on 2D Math", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },

  // ─── STRINGS ────────────────────────────────────────────────────────────────
  { id:31, name:"Longest Palindromic Substring", url:"https://leetcode.com/problems/longest-palindromic-substring/", concept:"DP / Expand Around Center", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft","Samsung","Goldman Sachs"] },
  { id:32, name:"String to Integer (atoi)", url:"https://leetcode.com/problems/string-to-integer-atoi/", concept:"String Parsing / Edge Cases", diff:"Medium", type:"core", cos:["Amazon","Microsoft","JP Morgan","Adobe"] },
  { id:33, name:"Zigzag Conversion", url:"https://leetcode.com/problems/zigzag-conversion/", concept:"String Pattern", diff:"Medium", type:"core", cos:["Adobe","Goldman Sachs"] },
  { id:34, name:"Word Break", url:"https://leetcode.com/problems/word-break/", concept:"DP + String", diff:"Medium", type:"core", cos:["Microsoft","Amazon","Adobe","Intuit"] },
  { id:35, name:"Asteroid Collision", url:"https://leetcode.com/problems/asteroid-collision/", concept:"Stack Simulation", diff:"Medium", type:"core", cos:["Microsoft","Amazon","Salesforce"] },
  { id:36, name:"Decode Ways", url:"https://leetcode.com/problems/decode-ways/", concept:"DP + String", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Flipkart","Adobe"] },
  { id:37, name:"Reorder Data in Log Files", url:"https://leetcode.com/problems/reorder-data-in-log-files/", concept:"String Sorting Logic", diff:"Easy", type:"warmup", cos:["Amazon"] },
  { id:38, name:"Wildcard Matching", url:"https://leetcode.com/problems/wildcard-matching/", concept:"DP + Pattern Match", diff:"Hard", type:"decider", cos:["Samsung","Arcesium","Adobe","Goldman Sachs"] },
  { id:39, name:"Regular Expression Matching", url:"https://leetcode.com/problems/regular-expression-matching/", concept:"DP + Regex", diff:"Hard", type:"decider", cos:["Adobe","Arcesium","Goldman Sachs"] },
  { id:40, name:"Remove K Consecutive Identical Characters", url:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/", concept:"Stack-based String Reduction", diff:"Medium", type:"core", cos:["Goldman Sachs","Amazon","BNY Mellon"] },
  { id:41, name:"Palindrome Pairs", url:"https://leetcode.com/problems/palindrome-pairs/", concept:"String Reversal + HashMap", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Amazon"] },
  { id:42, name:"Minimum Window Subsequence", url:"https://leetcode.com/problems/minimum-window-subsequence/", concept:"DP / Two Pointers on Strings", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:43, name:"Prefix and Suffix Search", url:"https://leetcode.com/problems/prefix-and-suffix-search/", concept:"Advanced Trie Structuring", diff:"Hard", type:"decider", cos:["Amazon","Arcesium"] },

  // ─── LINKED LISTS ───────────────────────────────────────────────────────────
  { id:44, name:"Reverse Linked List II", url:"https://leetcode.com/problems/reverse-linked-list-ii/", concept:"Linked List In-Place Reversal", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs"] },
  { id:45, name:"Copy List with Random Pointer", url:"https://leetcode.com/problems/copy-list-with-random-pointer/", concept:"HashMap + Deep Copy", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Goldman Sachs"] },
  { id:46, name:"Merge In Between Linked Lists", url:"https://leetcode.com/problems/merge-in-between-linked-lists/", concept:"Linked List Manipulation", diff:"Medium", type:"core", cos:["Microsoft"] },
  { id:47, name:"Reorder List", url:"https://leetcode.com/problems/reorder-list/", concept:"Linked List Reorder", diff:"Medium", type:"core", cos:["Amazon","Adobe","Goldman Sachs"] },
  { id:48, name:"LRU Cache", url:"https://leetcode.com/problems/lru-cache/", concept:"HashMap + Doubly Linked List", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","Arcesium","Adobe"] },
  { id:49, name:"LFU Cache", url:"https://leetcode.com/problems/lfu-cache/", concept:"Double HashMap + Ordered Map", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs"] },

  // ─── TREES ──────────────────────────────────────────────────────────────────
  { id:50, name:"Binary Tree Right Side View", url:"https://leetcode.com/problems/binary-tree-right-side-view/", concept:"Tree Views / BFS", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Flipkart","Goldman Sachs"] },
  { id:51, name:"Diameter of Binary Tree", url:"https://leetcode.com/problems/diameter-of-binary-tree/", concept:"Tree Properties", diff:"Easy", type:"warmup", cos:["Amazon","Flipkart","Goldman Sachs","Microsoft"] },
  { id:52, name:"Lowest Common Ancestor of a Binary Tree", url:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", concept:"Tree Pathing", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft","Goldman Sachs"] },
  { id:53, name:"Construct Binary Tree from Preorder & Inorder", url:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", concept:"Tree Construction", diff:"Medium", type:"core", cos:["Adobe","Amazon","Goldman Sachs"] },
  { id:54, name:"Flatten Binary Tree to Linked List", url:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", concept:"Tree Modification", diff:"Medium", type:"core", cos:["Microsoft","Adobe","Amazon"] },
  { id:55, name:"Vertical Order Traversal of a Binary Tree", url:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", concept:"Tree Views / Mapping", diff:"Hard", type:"core", cos:["Amazon","Flipkart","Goldman Sachs"] },
  { id:56, name:"Path Sum III", url:"https://leetcode.com/problems/path-sum-iii/", concept:"Tree Pathing + Prefix Sum", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft"] },
  { id:57, name:"Validate Binary Search Tree", url:"https://leetcode.com/problems/validate-binary-search-tree/", concept:"BST Validation", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs"] },
  { id:58, name:"Kth Smallest Element in a BST", url:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/", concept:"BST Traversal", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Microsoft"] },
  { id:59, name:"Serialize and Deserialize Binary Tree", url:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", concept:"Tree Serialization", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs"] },
  { id:60, name:"Binary Tree Maximum Path Sum", url:"https://leetcode.com/problems/binary-tree-maximum-path-sum/", concept:"DP on Trees", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs","Flipkart"] },
  { id:61, name:"Sum of Distances in Tree", url:"https://leetcode.com/problems/sum-of-distances-in-tree/", concept:"DP on Trees / Re-rooting", diff:"Hard", type:"decider", cos:["Arcesium","Amazon"] },
  { id:62, name:"Binary Tree Cameras", url:"https://leetcode.com/problems/binary-tree-cameras/", concept:"Greedy + DP State Management", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:63, name:"1324F - Maximum White Subtree (CF)", url:"https://codeforces.com/problemset/problem/1324/F", concept:"Re-rooting DP", diff:"Hard", type:"decider", cos:["Arcesium"] },

  // ─── GRAPHS ─────────────────────────────────────────────────────────────────
  { id:64, name:"Number of Islands", url:"https://leetcode.com/problems/number-of-islands/", concept:"Graph Traversal (DFS/BFS)", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Flipkart","Walmart","Goldman Sachs","CISCO"] },
  { id:65, name:"Rotting Oranges", url:"https://leetcode.com/problems/rotting-oranges/", concept:"Multi-source BFS", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Flipkart","Goldman Sachs"] },
  { id:66, name:"Clone Graph", url:"https://leetcode.com/problems/clone-graph/", concept:"Graph Deep Copy (DFS/BFS)", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Goldman Sachs"] },
  { id:67, name:"Course Schedule (Topo Sort)", url:"https://leetcode.com/problems/course-schedule/", concept:"Topological Sort (BFS)", diff:"Medium", type:"core", cos:["Amazon","Walmart","CISCO","Goldman Sachs"] },
  { id:68, name:"Course Schedule II", url:"https://leetcode.com/problems/course-schedule-ii/", concept:"Topological Sort Order", diff:"Medium", type:"core", cos:["Amazon","Walmart","CISCO"] },
  { id:69, name:"Minimum Height Trees", url:"https://leetcode.com/problems/minimum-height-trees/", concept:"Topological Sort", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Autodesk"] },
  { id:70, name:"Word Search", url:"https://leetcode.com/problems/word-search/", concept:"DFS + Backtracking on Grid", diff:"Medium", type:"core", cos:["Amazon","Walmart","Flipkart","Microsoft"] },
  { id:71, name:"Alien Dictionary", url:"https://www.lintcode.com/problem/892/", concept:"Topological Sort + Strings", diff:"Hard", type:"decider", cos:["Flipkart","Amazon","Goldman Sachs"] },
  { id:72, name:"Word Ladder II", url:"https://leetcode.com/problems/word-ladder-ii/", concept:"BFS Shortest Path + DFS", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Amazon"] },
  { id:73, name:"Snakes and Ladders (BFS)", url:"https://leetcode.com/problems/snakes-and-ladders/", concept:"BFS Grid Simulation", diff:"Medium", type:"core", cos:["CISCO","BNY Mellon","Amazon"] },
  { id:74, name:"Path With Minimum Effort", url:"https://leetcode.com/problems/path-with-minimum-effort/", concept:"Modified Dijkstra", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Autodesk"] },
  { id:75, name:"Cheapest Flights Within K Stops", url:"https://leetcode.com/problems/cheapest-flights-within-k-stops/", concept:"Modified BFS / Bellman-Ford", diff:"Medium", type:"core", cos:["Microsoft","Amazon","Flipkart","Goldman Sachs"] },
  { id:76, name:"Swim in Rising Water", url:"https://leetcode.com/problems/swim-in-rising-water/", concept:"Dijkstra / Kruskal on Grid", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Autodesk"] },
  { id:77, name:"Minimum Obstacle Removal to Reach Corner", url:"https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/", concept:"0-1 BFS (Deque)", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs"] },
  { id:78, name:"Shortest Path in Grid with Obstacles", url:"https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/", concept:"BFS with State", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Microsoft"] },
  { id:79, name:"Escape a Large Maze", url:"https://leetcode.com/problems/escape-a-large-maze/", concept:"Coordinate Compression BFS", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:80, name:"Number of Islands II (Union Find)", url:"https://www.lintcode.com/problem/434/", concept:"Union Find (Dynamic)", diff:"Hard", type:"decider", cos:["Flipkart","Amazon","Goldman Sachs"] },

  // ─── DYNAMIC PROGRAMMING ────────────────────────────────────────────────────
  { id:81, name:"House Robber", url:"https://leetcode.com/problems/house-robber/", concept:"Linear DP", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs","BNY Mellon"] },
  { id:82, name:"Longest Common Subsequence", url:"https://leetcode.com/problems/longest-common-subsequence/", concept:"2D DP / LCS", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft","BNY Mellon","Goldman Sachs"] },
  { id:83, name:"Edit Distance", url:"https://leetcode.com/problems/edit-distance/", concept:"2D DP / Edit Distance", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft","Samsung"] },
  { id:84, name:"Coin Change", url:"https://leetcode.com/problems/coin-change/", concept:"Unbounded Knapsack DP", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","Wells Fargo"] },
  { id:85, name:"Longest Increasing Subsequence (NlogN)", url:"https://leetcode.com/problems/longest-increasing-subsequence/", concept:"DP + Binary Search", diff:"Medium", type:"core", cos:["Amazon","Flipkart","Goldman Sachs","Morgan Stanley"] },
  { id:86, name:"Distinct Subsequences", url:"https://leetcode.com/problems/distinct-subsequences/", concept:"2D DP / String", diff:"Hard", type:"decider", cos:["Goldman Sachs","Arcesium"] },
  { id:87, name:"Maximum Score from Performing Multiplication Operations", url:"https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/", concept:"Interval DP", diff:"Hard", type:"decider", cos:["Amazon","Goldman Sachs"] },
  { id:88, name:"Burst Balloons", url:"https://leetcode.com/problems/burst-balloons/", concept:"Interval DP", diff:"Hard", type:"decider", cos:["Adobe","Arcesium","Goldman Sachs"] },
  { id:89, name:"Cherry Pickup (Grid DP)", url:"https://leetcode.com/problems/cherry-pickup/", concept:"3D DP (Two robots)", diff:"Hard", type:"decider", cos:["Adobe","Arcesium","Goldman Sachs"] },
  { id:90, name:"Palindrome Partitioning II", url:"https://leetcode.com/problems/palindrome-partitioning-ii/", concept:"DP + Palindrome", diff:"Hard", type:"decider", cos:["Arcesium","Adobe","Goldman Sachs"] },
  { id:91, name:"Strange Printer", url:"https://leetcode.com/problems/strange-printer/", concept:"Interval DP", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:92, name:"Number of Ways to Form a Target String", url:"https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/", concept:"DP + String Frequencies", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs"] },
  { id:93, name:"Maximum Profit in Job Scheduling", url:"https://leetcode.com/problems/maximum-profit-in-job-scheduling/", concept:"DP + Interval Scheduling", diff:"Hard", type:"decider", cos:["Morgan Stanley","Arcesium","Goldman Sachs"] },
  { id:94, name:"Constrained Subsequence Sum", url:"https://leetcode.com/problems/constrained-subsequence-sum/", concept:"DP + Monotonic Queue", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Amazon"] },
  { id:95, name:"455A - Boredom (CF)", url:"https://codeforces.com/problemset/problem/455/A", concept:"State-mapping DP", diff:"Medium", type:"core", cos:["BNY Mellon","Goldman Sachs","CISCO"] },
  { id:96, name:"DP Contest: Knapsack 2 (AtCoder)", url:"https://atcoder.jp/contests/dp/tasks/dp_e", concept:"Inverted State DP", diff:"Medium", type:"core", cos:["Arcesium","Goldman Sachs"] },

  // ─── STACK / MONOTONIC ──────────────────────────────────────────────────────
  { id:97, name:"Largest Rectangle in Histogram", url:"https://leetcode.com/problems/largest-rectangle-in-histogram/", concept:"Monotonic Stack", diff:"Hard", type:"decider", cos:["Amazon","Goldman Sachs","Arcesium","Flipkart"] },
  { id:98, name:"Daily Temperatures", url:"https://leetcode.com/problems/daily-temperatures/", concept:"Monotonic Stack", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","Salesforce"] },
  { id:99, name:"Remove K Digits", url:"https://leetcode.com/problems/remove-k-digits/", concept:"Greedy Monotonic Stack", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs"] },
  { id:100, name:"Min Stack", url:"https://leetcode.com/problems/min-stack/", concept:"Stack Application", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs","Adobe"] },
  { id:101, name:"5C - Longest Regular Bracket Sequence (CF)", url:"https://codeforces.com/problemset/problem/5/C", concept:"Stack + DP", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","BNY Mellon"] },
  { id:102, name:"Shortest Subarray with Sum at Least K", url:"https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/", concept:"Prefix Sum + Monotonic Deque", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs"] },

  // ─── HEAP / PRIORITY QUEUE ──────────────────────────────────────────────────
  { id:103, name:"Merge k Sorted Lists", url:"https://leetcode.com/problems/merge-k-sorted-lists/", concept:"Priority Queue", diff:"Hard", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","BNY Mellon"] },
  { id:104, name:"Find Median from Data Stream", url:"https://leetcode.com/problems/find-median-from-data-stream/", concept:"Dynamic Balancing Dual Heaps", diff:"Hard", type:"decider", cos:["Goldman Sachs","Arcesium","Morgan Stanley","Amazon"] },
  { id:105, name:"Task Scheduler", url:"https://leetcode.com/problems/task-scheduler/", concept:"Priority Queue Cooldown Logic", diff:"Medium", type:"core", cos:["Amazon","Microsoft","CISCO","Salesforce"] },
  { id:106, name:"Reorganize String", url:"https://leetcode.com/problems/reorganize-string/", concept:"Frequency Maps + Max-Heap", diff:"Medium", type:"core", cos:["Amazon","Microsoft","BNY Mellon"] },
  { id:107, name:"IPO", url:"https://leetcode.com/problems/ipo/", concept:"Dual Heap Structure", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Morgan Stanley"] },
  { id:108, name:"Course Schedule III", url:"https://leetcode.com/problems/course-schedule-iii/", concept:"Greedy + Priority Queue", diff:"Hard", type:"decider", cos:["Amazon","Arcesium","Goldman Sachs"] },
  { id:109, name:"Minimum Cost to Hire K Workers", url:"https://leetcode.com/problems/minimum-cost-to-hire-k-workers/", concept:"Sorting + Priority Queue", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:110, name:"Minimum Number of Refueling Stops", url:"https://leetcode.com/problems/minimum-number-of-refueling-stops/", concept:"Greedy Max-Heap Resources", diff:"Hard", type:"decider", cos:["Arcesium","Amazon"] },
  { id:111, name:"Find K Pairs with Smallest Sums", url:"https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", concept:"Min-Heap + Two Sorted Arrays", diff:"Medium", type:"core", cos:["Flipkart","Amazon","Goldman Sachs"] },
  { id:112, name:"1526C2 - Potions (CF)", url:"https://codeforces.com/problemset/problem/1526/C2", concept:"Regret Greedy via Min-Heaps", diff:"Hard", type:"decider", cos:["Goldman Sachs","Arcesium"] },

  // ─── INTERVALS ──────────────────────────────────────────────────────────────
  { id:113, name:"Merge Intervals", url:"https://leetcode.com/problems/merge-intervals/", concept:"Interval Sorting + Merge", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Salesforce","Intuit","Goldman Sachs","CISCO"] },
  { id:114, name:"Meeting Rooms II", url:"https://www.lintcode.com/problem/919/", concept:"Min-Heap + Interval Sorting", diff:"Medium", type:"core", cos:["Microsoft","Goldman Sachs","CISCO","Salesforce","ServiceNow"] },
  { id:115, name:"Non-overlapping Intervals", url:"https://leetcode.com/problems/non-overlapping-intervals/", concept:"Greedy Interval Removal", diff:"Medium", type:"core", cos:["Amazon","Salesforce","Intuit"] },
  { id:116, name:"Minimum Number of Arrows to Burst Balloons", url:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", concept:"Interval Sorting + Greedy", diff:"Medium", type:"core", cos:["Amazon","Salesforce"] },
  { id:117, name:"Meeting Rooms III", url:"https://leetcode.com/problems/meeting-rooms-iii/", concept:"Intervals + Priority Queues", diff:"Hard", type:"decider", cos:["Microsoft","Goldman Sachs","CISCO","ServiceNow"] },
  { id:118, name:"My Calendar III", url:"https://leetcode.com/problems/my-calendar-iii/", concept:"Sweep Line Algorithm", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:119, name:"Divide Intervals Into Minimum Groups", url:"https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/", concept:"Sweep Line Application", diff:"Medium", type:"core", cos:["Amazon","Salesforce","Goldman Sachs"] },

  // ─── PREFIX SUM ─────────────────────────────────────────────────────────────
  { id:120, name:"Subarray Sum Equals K", url:"https://leetcode.com/problems/subarray-sum-equals-k/", concept:"Prefix Sum + HashMap", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Goldman Sachs","Adobe","BNY Mellon"] },
  { id:121, name:"Continuous Subarray Sum", url:"https://leetcode.com/problems/continuous-subarray-sum/", concept:"Prefix Sum + Modulo HashMap", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Intuit"] },
  { id:122, name:"Number of Submatrices That Sum to Target", url:"https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/", concept:"2D Prefix Sum + 1D HashMap", diff:"Hard", type:"decider", cos:["BNY Mellon","Arcesium","Goldman Sachs"] },
  { id:123, name:"1398C - Good Subarrays (CF)", url:"https://codeforces.com/problemset/problem/1398/C", concept:"Math Prefix Sum Manipulation", diff:"Medium", type:"core", cos:["BNY Mellon","Goldman Sachs"] },

  // ─── BACKTRACKING ───────────────────────────────────────────────────────────
  { id:124, name:"Subsets II", url:"https://leetcode.com/problems/subsets-ii/", concept:"Recursion & Backtracking", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe"] },
  { id:125, name:"Combination Sum II", url:"https://leetcode.com/problems/combination-sum-ii/", concept:"Recursion & Backtracking", diff:"Medium", type:"core", cos:["Amazon","Adobe"] },
  { id:126, name:"N-Queens", url:"https://leetcode.com/problems/n-queens/", concept:"Backtracking State Management", diff:"Hard", type:"decider", cos:["Adobe","Arcesium","Goldman Sachs","Intuit"] },
  { id:127, name:"Word Search II", url:"https://leetcode.com/problems/word-search-ii/", concept:"Backtracking + Trie", diff:"Hard", type:"decider", cos:["Amazon","Adobe","Arcesium"] },
  { id:128, name:"Sudoku Solver", url:"https://leetcode.com/problems/sudoku-solver/", concept:"Backtracking + Constraints", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Microsoft"] },

  // ─── TRIE & ADVANCED STRINGS ────────────────────────────────────────────────
  { id:129, name:"Implement Trie (Prefix Tree)", url:"https://leetcode.com/problems/implement-trie-prefix-tree/", concept:"Trie Implementation", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Goldman Sachs"] },
  { id:130, name:"Maximum XOR of Two Numbers in an Array", url:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", concept:"Bitwise Trie", diff:"Medium", type:"core", cos:["Qualcomm","Samsung","Amazon","Goldman Sachs"] },
  { id:131, name:"Maximum XOR With an Element From Array", url:"https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", concept:"Offline Queries + Bitwise Trie", diff:"Hard", type:"decider", cos:["Qualcomm","Arcesium"] },
  { id:132, name:"Design Search Autocomplete System", url:"https://www.lintcode.com/problem/3133/", concept:"Trie + Min-Heap", diff:"Hard", type:"decider", cos:["Amazon","Microsoft","Arcesium"] },
  { id:133, name:"Longest Duplicate Substring", url:"https://leetcode.com/problems/longest-duplicate-substring/", concept:"Rolling Hash / Rabin-Karp", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Samsung"] },

  // ─── BIT MANIPULATION ───────────────────────────────────────────────────────
  { id:134, name:"Single Number II", url:"https://leetcode.com/problems/single-number-ii/", concept:"Bit Counting / Logic Gates", diff:"Medium", type:"core", cos:["Amazon","Qualcomm","Samsung"] },
  { id:135, name:"Bitwise AND of Numbers Range", url:"https://leetcode.com/problems/bitwise-and-of-numbers-range/", concept:"Binary Prefix Logic", diff:"Medium", type:"core", cos:["Qualcomm","Samsung","Arcesium"] },
  { id:136, name:"Robot Bounded In Circle", url:"https://leetcode.com/problems/robot-bounded-in-circle/", concept:"Simulation / Math", diff:"Medium", type:"core", cos:["Goldman Sachs","Amazon","JP Morgan"] },

  // ─── DESIGN / DATA STRUCTURES ───────────────────────────────────────────────
  { id:137, name:"Find Median from Running Stream", url:"https://leetcode.com/problems/find-median-from-data-stream/", concept:"Dual Heap", diff:"Hard", type:"decider", cos:["Goldman Sachs","Morgan Stanley","Arcesium"] },
  { id:138, name:"Design Twitter", url:"https://leetcode.com/problems/design-twitter/", concept:"OOP Design + Heap", diff:"Medium", type:"core", cos:["Amazon","Microsoft","ServiceNow"] },
  { id:139, name:"Stock Price Fluctuation", url:"https://leetcode.com/problems/stock-price-fluctuation/", concept:"TreeMap + HashMap Design", diff:"Medium", type:"core", cos:["Goldman Sachs","Morgan Stanley","JP Morgan","Wells Fargo"] },
  { id:140, name:"Random Pick with Weight", url:"https://leetcode.com/problems/random-pick-with-weight/", concept:"Prefix Sum + Binary Search", diff:"Medium", type:"core", cos:["Morgan Stanley","Goldman Sachs","Amazon"] },
  { id:141, name:"Reconstruct Itinerary", url:"https://leetcode.com/problems/reconstruct-itinerary/", concept:"Eulerian Path / DFS", diff:"Hard", type:"decider", cos:["Flipkart","Amazon","Arcesium"] },
  { id:142, name:"Create Maximum Number", url:"https://leetcode.com/problems/create-maximum-number/", concept:"Greedy Merge / Monotonic Stack", diff:"Hard", type:"decider", cos:["Flipkart","Goldman Sachs","Arcesium"] },

  // ─── SQL ────────────────────────────────────────────────────────────────────
  { id:143, name:"Nth Highest Salary", url:"https://leetcode.com/problems/nth-highest-salary/", concept:"Advanced SQL", diff:"Medium", type:"core", cos:["Goldman Sachs","BNY Mellon","JP Morgan","Wells Fargo","American Express"] },
  { id:144, name:"Department Top Three Salaries", url:"https://leetcode.com/problems/department-top-three-salaries/", concept:"SQL Window Functions", diff:"Hard", type:"decider", cos:["Goldman Sachs","BNY Mellon","JP Morgan","Wells Fargo"] },
  { id:145, name:"Trips and Users", url:"https://leetcode.com/problems/trips-and-users/", concept:"Advanced SQL (Multi-join)", diff:"Hard", type:"decider", cos:["Goldman Sachs","BNY Mellon","American Express"] },

  // ─── CODEFORCES / COMPETITIVE ───────────────────────────────────────────────
  { id:146, name:"1201C - Maximum Median (CF)", url:"https://codeforces.com/problemset/problem/1201/C", concept:"Greedy + BS on Answer", diff:"Medium", type:"core", cos:["Arcesium","Goldman Sachs","BNY Mellon"] },
  { id:147, name:"1520F1 - Guess the K-th Zero (CF)", url:"https://codeforces.com/problemset/problem/1520/F1", concept:"Interactive Binary Search", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs"] },
  { id:148, name:"580C - Kefa and Park (CF)", url:"https://codeforces.com/problemset/problem/580/C", concept:"DFS Path Constraints", diff:"Medium", type:"core", cos:["BNY Mellon","CISCO","Goldman Sachs"] },
  { id:149, name:"Candy", url:"https://leetcode.com/problems/candy/", concept:"Two-pass Greedy", diff:"Hard", type:"decider", cos:["Amazon","Goldman Sachs","Arcesium"] },
  { id:150, name:"1360F - Constructing the Array (CF)", url:"https://codeforces.com/problemset/problem/1360/F", concept:"Priority Queue Simulation", diff:"Hard", type:"decider", cos:["Goldman Sachs","BNY Mellon","Arcesium"] },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEW QUESTIONS (IDs 151–220)
  // ═══════════════════════════════════════════════════════════════════════════

  // ─── ARRAYS / TWO POINTERS (extra) ──────────────────────────────────────────
  { id:151, name:"Minimum Number of Swaps to Make the String Balanced", url:"https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/", concept:"Greedy / Two Pointers", diff:"Medium", type:"core", cos:["Microsoft","Amazon","Goldman Sachs","Zomato","Flipkart"] },
  { id:152, name:"Count Subarrays With Median Equal to K", url:"https://leetcode.com/problems/count-subarrays-with-median-equal-to-k/", concept:"Prefix-Count DP", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Morgan Stanley","Amazon"] },
  { id:153, name:"Longest Mountain in Array", url:"https://leetcode.com/problems/longest-mountain-in-array/", concept:"Two Pointers / Sliding Scan", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Flipkart","Zomato"] },
  { id:154, name:"Minimum Number of Operations to Make Array Continuous", url:"https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/", concept:"Sliding Window on Sorted Unique", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs"] },

  // ─── GRAPHS (extra) ──────────────────────────────────────────────────────────
  { id:155, name:"Find Critical and Pseudo-Critical Edges in MST", url:"https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/", concept:"Kruskal + Bridge Finding", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Autodesk","Amazon"] },
  { id:156, name:"Maximum Flow / Min Cut (LintCode)", url:"https://www.lintcode.com/problem/1031/", concept:"Network Flow (Ford-Fulkerson / Edmonds-Karp)", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Morgan Stanley","Qualcomm"] },
  { id:157, name:"Parallel Courses III", url:"https://leetcode.com/problems/parallel-courses-iii/", concept:"Topological Sort + DP", diff:"Hard", type:"decider", cos:["Amazon","Microsoft","CISCO","Flipkart","Arcesium"] },
  { id:158, name:"Minimum Score of a Path Between Two Cities", url:"https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/", concept:"Union Find / BFS", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","Zomato"] },
  { id:159, name:"Reachable Nodes In Subdivided Graph", url:"https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/", concept:"Modified Dijkstra", diff:"Hard", type:"decider", cos:["Arcesium","Autodesk","Goldman Sachs"] },

  // ─── DYNAMIC PROGRAMMING (extra) ─────────────────────────────────────────────
  { id:160, name:"Zuma Game", url:"https://leetcode.com/problems/zuma-game/", concept:"Interval DP", diff:"Hard", type:"decider", cos:["Arcesium","Adobe","Goldman Sachs"] },
  { id:161, name:"Count Different Palindromic Subsequences", url:"https://leetcode.com/problems/count-different-palindromic-subsequences/", concept:"Interval DP", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Samsung"] },
  { id:162, name:"Largest Divisible Subset", url:"https://leetcode.com/problems/largest-divisible-subset/", concept:"DP + Number Theory", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","Morgan Stanley"] },
  { id:163, name:"Minimum Cost to Cut a Stick", url:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/", concept:"Interval DP", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs"] },
  { id:164, name:"Number of Ways to Stay in the Same Place After Some Steps", url:"https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/", concept:"Memoization DP", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Amazon"] },

  // ─── HEAP / ADVANCED ─────────────────────────────────────────────────────────
  { id:165, name:"Sliding Window Median", url:"https://leetcode.com/problems/sliding-window-median/", concept:"Dual Heap / Sorted List", diff:"Hard", type:"decider", cos:["Arcesium","Morgan Stanley","Goldman Sachs","Amazon"] },
  { id:166, name:"Maximum Performance of a Team", url:"https://leetcode.com/problems/maximum-performance-of-a-team/", concept:"Greedy + Min-Heap", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs","ServiceNow"] },
  { id:167, name:"K Closest Points to Origin", url:"https://leetcode.com/problems/k-closest-points-to-origin/", concept:"Max-Heap / QuickSelect", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Zomato","CISCO"] },

  // ─── DESIGN & SYSTEM-DESIGN-STYLE ────────────────────────────────────────────
  { id:168, name:"Design In-Memory File System", url:"https://www.lintcode.com/problem/1300/", concept:"Trie + OOP Design", diff:"Hard", type:"decider", cos:["Amazon","Microsoft","Arcesium","Autodesk","ServiceNow"] },
  { id:169, name:"Design Hit Counter", url:"https://www.lintcode.com/problem/3728/", concept:"Sliding Window / Circular Array", diff:"Medium", type:"core", cos:["Amazon","Microsoft","ServiceNow","Salesforce","Intuit"] },
  { id:170, name:"Design Skiplist", url:"https://leetcode.com/problems/design-skiplist/", concept:"Probabilistic Data Structure", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Morgan Stanley","Couchbase"] },
  { id:171, name:"Snapshot Array", url:"https://leetcode.com/problems/snapshot-array/", concept:"Binary Search on Version History", diff:"Medium", type:"core", cos:["Amazon","Adobe","Arcesium","Goldman Sachs"] },
  { id:172, name:"Time-Based Key-Value Store", url:"https://leetcode.com/problems/time-based-key-value-store/", concept:"Binary Search + HashMap Design", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Goldman Sachs","Intuit","ServiceNow"] },

  // ─── GREEDY / MATH (extra) ────────────────────────────────────────────────────
  { id:173, name:"Minimum Number of Taps to Open to Water a Garden", url:"https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/", concept:"Greedy Jump Game Variant", diff:"Hard", type:"decider", cos:["Amazon","Microsoft","Goldman Sachs","Arcesium"] },
  { id:174, name:"Largest Number", url:"https://leetcode.com/problems/largest-number/", concept:"Custom Sort / Greedy", diff:"Medium", type:"core", cos:["Amazon","Adobe","Microsoft","Zomato","Flipkart","Goldman Sachs"] },
  { id:175, name:"Maximum Points You Can Obtain from Cards", url:"https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/", concept:"Sliding Window / Prefix Sum", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Intuit","Flipkart"] },
  { id:176, name:"Minimum Number of Coins for Fruits", url:"https://leetcode.com/problems/minimum-number-of-coins-for-fruits/", concept:"Greedy + Monotonic Deque", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Arcesium","Intuit"] },

  // ─── TREES (extra) ────────────────────────────────────────────────────────────
  { id:177, name:"Count Good Nodes in Binary Tree", url:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/", concept:"DFS with Max Tracking", diff:"Medium", type:"warmup", cos:["Amazon","Microsoft","Adobe","Zomato"] },
  { id:178, name:"Recover Binary Search Tree", url:"https://leetcode.com/problems/recover-binary-search-tree/", concept:"BST Inorder Anomaly Detection", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Adobe","Goldman Sachs"] },
  { id:179, name:"All Nodes Distance K in Binary Tree", url:"https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/", concept:"Tree to Graph + BFS", diff:"Medium", type:"core", cos:["Microsoft","Amazon","Adobe","Flipkart","Zomato"] },
  { id:180, name:"Distribute Coins in Binary Tree", url:"https://leetcode.com/problems/distribute-coins-in-binary-tree/", concept:"DFS Postorder Accounting", diff:"Medium", type:"core", cos:["Amazon","Adobe","Goldman Sachs","Arcesium"] },

  // ─── SQL (new additions) ──────────────────────────────────────────────────────
  { id:181, name:"Rank Scores", url:"https://leetcode.com/problems/rank-scores/", concept:"SQL Window Functions (DENSE_RANK)", diff:"Medium", type:"core", cos:["Goldman Sachs","Wells Fargo","JP Morgan Chase & Co","BNY Mellon","Morgan Stanley","American Express","Citi"] },
  { id:182, name:"Consecutive Numbers", url:"https://leetcode.com/problems/consecutive-numbers/", concept:"SQL Self Join / LAG-LEAD", diff:"Medium", type:"core", cos:["Goldman Sachs","Wells Fargo","JP Morgan Chase & Co","BNY Mellon","American Express","Oracle Financial Software Services"] },
  { id:183, name:"Human Traffic of Stadium", url:"https://leetcode.com/problems/human-traffic-of-stadium/", concept:"SQL Window Functions + Filtering", diff:"Hard", type:"decider", cos:["Goldman Sachs","BNY Mellon","JP Morgan Chase & Co","Morgan Stanley","Wells Fargo"] },
  { id:184, name:"Find Cumulative Salary of an Employee", url:"https://leetcode.com/problems/find-cumulative-salary-of-an-employee/", concept:"SQL Running Sum (Window)", diff:"Hard", type:"decider", cos:["Goldman Sachs","Morgan Stanley","Wells Fargo","BNY Mellon","American Express","Citi"] },
  { id:185, name:"Median Employee Salary", url:"https://leetcode.com/problems/median-employee-salary/", concept:"SQL Median without Built-in", diff:"Hard", type:"decider", cos:["Goldman Sachs","Morgan Stanley","BNY Mellon","JP Morgan Chase & Co","American Express"] },
  { id:186, name:"Exchange Seats", url:"https://leetcode.com/problems/exchange-seats/", concept:"SQL CASE + MOD Logic", diff:"Medium", type:"core", cos:["Goldman Sachs","Wells Fargo","BNY Mellon","American Express","Intuit"] },
  { id:187, name:"Tree Node (SQL)", url:"https://leetcode.com/problems/tree-node/", concept:"SQL Self-Join + CASE", diff:"Medium", type:"warmup", cos:["Goldman Sachs","BNY Mellon","JP Morgan Chase & Co","Oracle Financial Software Services","Citi"] },
  { id:188, name:"Get Highest Answer Rate Question", url:"https://leetcode.com/problems/get-highest-answer-rate-question/", concept:"SQL Conditional Aggregation", diff:"Medium", type:"core", cos:["Goldman Sachs","BNY Mellon","American Express","Wells Fargo","Expedia Group"] },
  { id:189, name:"Find the Quiet Students in All Exams", url:"https://leetcode.com/problems/find-the-quiet-students-in-all-exams/", concept:"SQL Advanced Filtering + NOT EXISTS", diff:"Hard", type:"decider", cos:["Goldman Sachs","Arcesium","BNY Mellon","Morgan Stanley","JP Morgan Chase & Co"] },
  { id:190, name:"Active Businesses", url:"https://leetcode.com/problems/active-businesses/", concept:"SQL Subquery + AVG Aggregation", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Salesforce","ServiceNow","Intuit","Expedia Group"] },
  { id:191, name:"Monthly Transactions I", url:"https://leetcode.com/problems/monthly-transactions-i/", concept:"SQL DATE_FORMAT + Conditional COUNT", diff:"Medium", type:"core", cos:["Goldman Sachs","BNY Mellon","JP Morgan Chase & Co","Wells Fargo","PayPal","American Express"] },
  { id:192, name:"User Purchase Platform", url:"https://leetcode.com/problems/user-purchase-platform/", concept:"SQL UNION ALL + PIVOT Simulation", diff:"Hard", type:"decider", cos:["Goldman Sachs","Morgan Stanley","Amazon","Intuit","Salesforce"] },
  { id:201, name:"Department Highest Salary", url:"https://leetcode.com/problems/department-highest-salary/", concept:"SQL GROUP BY + JOIN", diff:"Medium", type:"warmup", cos:["Goldman Sachs","Wells Fargo","BNY Mellon","JP Morgan Chase & Co","American Express","Intuit","Citi"] },
  { id:202, name:"Second Highest Salary", url:"https://leetcode.com/problems/second-highest-salary/", concept:"SQL LIMIT/OFFSET or DENSE_RANK", diff:"Medium", type:"warmup", cos:["Goldman Sachs","Wells Fargo","BNY Mellon","JP Morgan Chase & Co","Amazon","Microsoft","Oracle Financial Software Services"] },
  { id:203, name:"Rising Temperature", url:"https://leetcode.com/problems/rising-temperature/", concept:"SQL LAG / Self Join on Dates", diff:"Easy", type:"warmup", cos:["Goldman Sachs","BNY Mellon","JP Morgan Chase & Co","American Express","Expedia Group"] },
  { id:204, name:"Consecutive Available Seats", url:"https://leetcode.com/problems/consecutive-available-seats/", concept:"SQL Self-Join on Adjacent IDs", diff:"Easy", type:"warmup", cos:["Goldman Sachs","BNY Mellon","American Express","Citi","ServiceNow"] },
  { id:205, name:"Investments in 2016", url:"https://leetcode.com/problems/investments-in-2016/", concept:"SQL Multi-condition Grouping", diff:"Medium", type:"core", cos:["Goldman Sachs","Morgan Stanley","Wells Fargo","BNY Mellon","JP Morgan Chase & Co","American Express"] },
  { id:206, name:"Friend Requests II: Who Has the Most Friends", url:"https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/", concept:"SQL UNION + Aggregation", diff:"Medium", type:"core", cos:["Amazon","Salesforce","ServiceNow","Goldman Sachs","Intuit","Expedia Group"] },
  { id:207, name:"Rectangles Area", url:"https://leetcode.com/problems/rectangles-area/", concept:"SQL Cross Join + Filtering", diff:"Medium", type:"core", cos:["Goldman Sachs","Arcesium","BNY Mellon","Morgan Stanley","JP Morgan Chase & Co"] },
  { id:208, name:"Report Contiguous Dates", url:"https://leetcode.com/problems/report-contiguous-dates/", concept:"SQL Island Problem (Gaps and Islands)", diff:"Hard", type:"decider", cos:["Goldman Sachs","BNY Mellon","Morgan Stanley","JP Morgan Chase & Co","American Express","Oracle Financial Software Services"] },
  { id:209, name:"Last Person to Fit in the Bus", url:"https://leetcode.com/problems/last-person-to-fit-in-the-bus/", concept:"SQL Running Sum + Filter", diff:"Medium", type:"core", cos:["Amazon","Goldman Sachs","Intuit","Salesforce","ServiceNow","Expedia Group"] },
  { id:210, name:"Count Salary Categories", url:"https://leetcode.com/problems/count-salary-categories/", concept:"SQL CASE Bucketing + UNION", diff:"Medium", type:"core", cos:["Goldman Sachs","Wells Fargo","BNY Mellon","American Express","JP Morgan Chase & Co","Citi"] },

  // ─── PL/SQL ───────────────────────────────────────────────────────────────────
  { id:193, name:"Stored Procedure: Factorial with OUT Parameter", url:"https://www.lintcode.com/problem/2427/", concept:"PL/SQL Loops + OUT Parameters", diff:"Easy", type:"warmup", cos:["Oracle Financial Software Services","Goldman Sachs","Wells Fargo","BNY Mellon","Citi","JP Morgan Chase & Co"] },
  { id:194, name:"Cursor-Based Employee Report", url:"https://www.lintcode.com/problem/2431/", concept:"PL/SQL Explicit Cursors + FOR LOOP", diff:"Medium", type:"core", cos:["Oracle Financial Software Services","Goldman Sachs","JP Morgan Chase & Co","BNY Mellon","American Express","Citi"] },
  { id:195, name:"Exception Handling: WHEN OTHERS + SQLERRM", url:"https://www.lintcode.com/problem/2432/", concept:"PL/SQL Exception Blocks + SQLERRM", diff:"Medium", type:"core", cos:["Oracle Financial Software Services","Goldman Sachs","BNY Mellon","Wells Fargo","American Express","Citi"] },
  { id:196, name:"Trigger: Audit Table Changes (AFTER INSERT/UPDATE/DELETE)", url:"https://www.lintcode.com/problem/2433/", concept:"PL/SQL Triggers — Row-Level Auditing", diff:"Medium", type:"core", cos:["Oracle Financial Software Services","Goldman Sachs","JP Morgan Chase & Co","BNY Mellon","Citi","Morgan Stanley"] },
  { id:197, name:"Package: Salary Management System (Spec + Body)", url:"https://www.lintcode.com/problem/2434/", concept:"PL/SQL Packages — Encapsulation", diff:"Hard", type:"decider", cos:["Oracle Financial Software Services","Goldman Sachs","JP Morgan Chase & Co","Morgan Stanley","BNY Mellon","Citi"] },
  { id:198, name:"Bulk Collect and FORALL for Batch DML", url:"https://www.lintcode.com/problem/2435/", concept:"PL/SQL Bulk Operations for Performance", diff:"Hard", type:"decider", cos:["Oracle Financial Software Services","Goldman Sachs","BNY Mellon","JP Morgan Chase & Co","Citi","American Express"] },
  { id:199, name:"Dynamic SQL with EXECUTE IMMEDIATE", url:"https://www.lintcode.com/problem/2436/", concept:"Native Dynamic SQL (NDS) — Runtime Query Build", diff:"Hard", type:"decider", cos:["Oracle Financial Software Services","Goldman Sachs","JP Morgan Chase & Co","BNY Mellon","Morgan Stanley"] },
  { id:200, name:"Pipelined Table Function", url:"https://www.lintcode.com/problem/2437/", concept:"PL/SQL Pipelined Functions + TABLE() in SQL", diff:"Hard", type:"decider", cos:["Oracle Financial Software Services","Goldman Sachs","Arcesium","BNY Mellon","Morgan Stanley"] },

  // ─── ADVANCED ALGO / COMPETITIVE ─────────────────────────────────────────────
  { id:211, name:"Count of Smaller Numbers After Self", url:"https://leetcode.com/problems/count-of-smaller-numbers-after-self/", concept:"Merge Sort / BIT (Fenwick Tree)", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Morgan Stanley","Amazon","Microsoft"] },
  { id:212, name:"Range Sum Query - Mutable (BIT)", url:"https://leetcode.com/problems/range-sum-query-mutable/", concept:"Fenwick Tree / Segment Tree", diff:"Medium", type:"core", cos:["Arcesium","Goldman Sachs","Morgan Stanley","Amazon","Qualcomm"] },
  { id:213, name:"1265D - Beautiful Arrangement (CF)", url:"https://codeforces.com/problemset/problem/1265/D", concept:"Constructive Algorithm / Math", diff:"Medium", type:"core", cos:["Arcesium","Goldman Sachs","BNY Mellon","CISCO"] },
  { id:214, name:"Maximum Segment Sum After Removals", url:"https://leetcode.com/problems/maximum-segment-sum-after-removals/", concept:"Reverse Union Find", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs","Microsoft"] },
  { id:215, name:"Stamping the Sequence", url:"https://leetcode.com/problems/stamping-the-sequence/", concept:"Reverse Greedy Simulation", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Amazon"] },
  { id:216, name:"Minimum Cost to Reach Destination in Time", url:"https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/", concept:"DP + Dijkstra Hybrid", diff:"Hard", type:"decider", cos:["Arcesium","Amazon","Goldman Sachs","CISCO","Autodesk"] },
  { id:217, name:"Find the Closest Palindrome", url:"https://leetcode.com/problems/find-the-closest-palindrome/", concept:"Math / String Edge Cases", diff:"Hard", type:"decider", cos:["Arcesium","Goldman Sachs","Amazon","Samsung"] },
  { id:218, name:"Maximum AND Value of a Pair", url:"https://leetcode.com/problems/maximum-and-value-of-a-pair/", concept:"Bitwise Trie Greedy", diff:"Medium", type:"core", cos:["Qualcomm","Samsung","Arcesium","Amazon"] },
  { id:219, name:"Finding 3-Digit Even Numbers", url:"https://leetcode.com/problems/finding-3-digit-even-numbers/", concept:"Digit Frequency Enumeration", diff:"Easy", type:"warmup", cos:["Amazon","Microsoft","Zomato","Flipkart"] },
  { id:220, name:"Minimum Deletions to Make Array Beautiful", url:"https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/", concept:"Greedy Parity Fix", diff:"Medium", type:"core", cos:["Amazon","Microsoft","Goldman Sachs","Zomato","Intuit"] },

];

module.exports = QUESTIONS;