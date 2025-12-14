import { search } from 'duck-duck-scrape';

async function testSearch() {
  try {
    const query = "latest mandi price ginger uttar pradesh today";
    console.log("Searching:", query);
    
    // search() returns a SearchResult object which has a 'results' array
    const results = await search(query, {
      safeSearch: 1 // Moderate
    });

    console.log("Results found:", results.results.length);
    
    // Print first 3 snippets
    results.results.slice(0, 3).forEach((r, i) => {
        console.log(`\n--- Result ${i+1} ---`);
        console.log("Title:", r.title);
        console.log("Snippet:", r.description); // duck-duck-scrape uses description for snippet
        console.log("URL:", r.url);
    });

  } catch (e) {
    console.error("Search failed:", e);
  }
}

testSearch();
