const cheerio = require('cheerio');

async function scrapeDDG() {
    try {
        const query = "latest mandi price ginger uttar pradesh today 2025";
        const url = `https://html.duckduckgo.com/html?q=${encodeURIComponent(query)}`;
        console.log("Fetching:", url);
        
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        
        const html = await res.text();
        const $ = cheerio.load(html);
        
        // DDG HTML classes (subject to change, but usually stable for years)
        // .result__body links to .result__snippet
        
        const snippets = [];
        $('.result__body').each((i, el) => {
            if (i >= 5) return; // Top 5
            const title = $(el).find('.result__a').text().trim();
            const snippet = $(el).find('.result__snippet').text().trim();
            const link = $(el).find('.result__a').attr('href');
            
            if (title && snippet) {
                snippets.push({ title, snippet, link });
            }
        });

        console.log("Snippets Found:", snippets.length);
        snippets.forEach(s => {
            console.log("\n---");
            console.log("Title:", s.title);
            console.log("Snippet:", s.snippet);
        });

    } catch (e) {
        console.error("Error:", e);
    }
}

scrapeDDG();
