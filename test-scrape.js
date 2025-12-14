const cheerio = require('cheerio');

async function scrape() {
    try {
        const url = "https://market.todaypricerates.com/Uttar-Pradesh-ginger-price";
        console.log("Fetching:", url);
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        
        if (!res.ok) {
            console.error("Failed:", res.status, res.statusText);
            return;
        }

        const html = await res.text();
        console.log("Success! HTML Length:", html.length);
        const $ = cheerio.load(html);
        console.log("Title:", $('title').text());
        
        // Check for any crop links or table
        const links = $('a').length;
        console.log("Links found:", links);

    } catch (e) {
        console.error("Error:", e);
    }
}

scrape();
