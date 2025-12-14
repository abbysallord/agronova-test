module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/agronova/app/api/market-price/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$mistralai$2f$mistralai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@mistralai/mistralai/index.js [app-route] (ecmascript)");
;
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$mistralai$2f$mistralai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Mistral"]({
    apiKey: process.env.MISTRAL_API_KEY
});
async function POST(req) {
    try {
        const { crop, state, district } = await req.json();
        if (!crop) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Crop name is required"
            }, {
                status: 400
            });
        }
        const normalizedCrop = crop.toLowerCase().trim();
        // Public key from data.gov.in (often rate limited, so we handle failure)
        const GOV_API_KEY = "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";
        let marketData = [];
        let dataSource = "gov_api"; // or "ai_estimate"
        // 1. Try Fetching from Government API
        try {
            console.log(`Fetching Gov API for ${crop} in ${state}...`);
            // Resource ID for Agmarknet Daily Prices: 9ef84268-d588-465a-a308-a864a43d0070
            const stateFilter = state !== "All States" ? `&filters[state_name]=${encodeURIComponent(state)}` : "";
            const cropFilter = `&filters[commodity]=${encodeURIComponent(crop)}`;
            const govUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${GOV_API_KEY}&format=json${stateFilter}${cropFilter}&limit=10`;
            const govRes = await fetch(govUrl);
            const govJson = await govRes.json();
            if (govJson.records && govJson.records.length > 0) {
                marketData = govJson.records.map((record)=>({
                        market: record.market || record.district,
                        state: record.state,
                        price: Number(record.modal_price),
                        variety: record.variety,
                        change: 0 // API doesn't give trend, assume 0
                    }));
                console.log("Gov API Success!");
            } else {
                console.warn("Gov API returned no records. Switching to AI.");
                dataSource = "ai_estimate";
            }
        } catch (e) {
            console.error("Gov API Failed (Rate Limit or Error):", e);
            dataSource = "ai_estimate";
        }
        // 2. Fallback to AI if Gov API failed or empty
        if (dataSource === "ai_estimate") {
            return await generateAiEstimate(crop, state, normalizedCrop, client);
        }
        // Return Real Data
        const prices = marketData.map((d)=>d.price);
        const avg = prices.reduce((a, b)=>a + b, 0) / prices.length;
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            market_data: marketData,
            average_price: avg,
            source: "Government (Agmarknet)",
            highest_price: Math.max(...prices)
        });
    } catch (error) {
        console.error("Market Price API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch market prices"
        }, {
            status: 500
        });
    }
}
// Helper for AI Fallback with Real-Time Search (RAG)
async function generateAiEstimate(crop, state, normalizedCrop, client) {
    const stateQuery = state && state !== "All States" ? `in ${state}` : "across major Indian states";
    // 1. Perform Real-Time Web Search (DuckDuckGo HTML Scraping)
    let searchContext = "";
    let topSourceUrl = "";
    let topSourceDomain = "";
    try {
        const query = `current market price of ${crop} ${stateQuery} today latest news agriculture`;
        console.log("Searching Web:", query);
        const res = await fetch(`https://html.duckduckgo.com/html?q=${encodeURIComponent(query)}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        const html = await res.text();
        // Structure: <div class="result__body"> ... <a class="result__a" href="...">Title</a> ... <a class="result__snippet" href="...">Snippet</a>
        const results = [];
        const bodyRegex = /<div[^>]*class="result__body"[^>]*>(.*?)<\/div>/g;
        let bodyMatch;
        const trustedDomains = [
            "agmarknet",
            "commodityonline",
            "krishijagran",
            "economictimes",
            "mandibhav"
        ];
        while((bodyMatch = bodyRegex.exec(html)) !== null){
            const block = bodyMatch[1];
            const titleMatch = /class="result__a"[^>]*>(.*?)<\/a>/.exec(block);
            const snippetMatch = /class="result__snippet"[^>]*>(.*?)<\/a>/.exec(block);
            const urlMatch = /href="(.*?)"/.exec(titleMatch?.[0] || "");
            if (titleMatch && snippetMatch && urlMatch) {
                const url = urlMatch[1];
                const cleanSnippet = snippetMatch[1].replace(/<[^>]*>/g, '').trim();
                const domain = new URL(url).hostname.replace('www.', '');
                results.push({
                    domain,
                    url,
                    snippet: cleanSnippet
                });
                if (!topSourceUrl && trustedDomains.some((d)=>domain.includes(d))) {
                    topSourceUrl = url;
                    topSourceDomain = domain;
                }
            }
        }
        searchContext = results.slice(0, 15).map((r)=>`[Source: ${r.domain}] ${r.snippet}`).join("\n\n");
        if (!topSourceUrl && results.length > 0) {
            topSourceUrl = results[0].url;
            topSourceDomain = results[0].domain;
        }
        console.log("Search Context:", results.length, "results. Top Source:", topSourceDomain);
    } catch (e) {
        console.error("Web Search Failed:", e);
        searchContext = "Web search unavailable. Use your knowledge base.";
    }
    const prompt = `
    You are an expert Agriculture Market Analyst in India.
    Date: ${new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}.
    
    Task: Generate a REAL-TIME market price report for "${crop}" ${stateQuery}, based on the following SEARCH RESULTS.
    
    SEARCH CONTEXT:
    ${searchContext}
    
    INSTRUCTIONS:
    1. ANALYZE the snippets to find the most recent and credible price.
    2. EXTRACT real prices. If context says "Rs 20/kg", multiply by 100 -> 2000/quintal.
    3. MANDIS: List ALL distinct mandis found in the context. Aim for 8-12 mandis if data exists.
    4. TREND: Deduce from news (rising/falling).

    OUTPUT FORMAT (JSON ONLY):
    {
        "market_data": [
            { "market": "Mandi Name", "state": "State Name", "price": 0, "change": 0.0, "variety": "Local/Hybrid" } 
        ],
        "average_price": 0,
        "highest_price": 0,
        "source": "AI Search",
        "source_url": "${topSourceUrl}",
        "source_domain": "${topSourceDomain}"
    }
    `;
    const response = await client.chat.complete({
        model: "mistral-small-latest",
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        responseFormat: {
            type: "json_object"
        }
    });
    const content = response.choices && response.choices[0] && response.choices[0].message.content;
    if (!content) throw new Error("No content from AI");
    // Safety check for source_url in AI response, though we injected it
    const parsed = JSON.parse(content);
    if (!parsed.source_url) {
        parsed.source_url = topSourceUrl;
        parsed.source_domain = topSourceDomain;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(parsed);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d5028fe5._.js.map