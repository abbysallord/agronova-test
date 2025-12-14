
const fs = require('fs');
const path = require('path');

const POSTS_FILE = path.join(__dirname, 'data', 'posts.json');

function readJSON(file) {
    if (!fs.existsSync(file)) return [];
    const data = fs.readFileSync(file, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Parse error:", error);
        return [];
    }
}

function debugDelete() {
    console.log("Reading posts from:", POSTS_FILE);
    const posts = readJSON(POSTS_FILE);
    console.log(`Found ${posts.length} posts.`);

    if (posts.length === 0) return;

    // Pick the first post to test delete logic on
    const target = posts[0];
    console.log("\n--- Target Post ---");
    console.log("ID:", target.id, `(Type: ${typeof target.id})`);
    console.log("Email:", target.userEmail, `(Type: ${typeof target.userEmail})`);
    console.log("Length of ID:", target.id.length);
    console.log("Length of Email:", target.userEmail.length);

    // Simulate User Input (assuming they are the owner)
    const inputId = target.id;
    const inputEmail = target.userEmail; // In real app, this comes from session
    // Test for spaces or variations
    const trimmedInputEmail = inputEmail.trim().toLowerCase();
    const postOwner = target.userEmail.trim().toLowerCase();

    console.log("\n--- Comparison ---");
    console.log(`'${postOwner}' === '${trimmedInputEmail}' ?`, postOwner === trimmedInputEmail);
    console.log(`'${target.id}' === '${inputId}' ?`, target.id === inputId);

    // Run the Filter
    const filtered = posts.filter(p => {
        // De Morgan: Keep if ID mismatch OR Email mismatch
        // So validation fails if (ID match AND Email match)
        const idMatch = p.id === inputId;
        const emailMatch = (p.userEmail?.toLowerCase().trim() === trimmedInputEmail);
        
        if (idMatch && emailMatch) {
            console.log(`MATCH FOUND! Removing post ${p.id}`);
            return false; // Remove
        }
        return true; 
    });

    console.log(`\nOriginal Count: ${posts.length}`);
    console.log(`Filtered Count: ${filtered.length}`);

    if (filtered.length === posts.length) {
        console.error("FAIL: Post was NOT removed by filter logic.");
    } else {
        console.log("SUCCESS: Post would be removed.");
    }
}

debugDelete();
