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
"[project]/agronova/app/api/reports/generate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$mistralai$2f$mistralai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/@mistralai/mistralai/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agronova/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const { crops, farmSize, location } = body;
        if (!crops || crops.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No crops provided"
            }, {
                status: 400
            });
        }
        if (!process.env.MISTRAL_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "MISTRAL_API_KEY not configured"
            }, {
                status: 500
            });
        }
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$mistralai$2f$mistralai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Mistral"]({
            apiKey: process.env.MISTRAL_API_KEY
        });
        const prompt = `Generate a detailed Farm Report for a farmer in ${location || "India"} with ${farmSize || "2"} acres of land, growing: ${crops.join(", ")}.
    
    Return ONLY a valid JSON object with the following structure (do NOT include markdown formatting):
    {
      "performance": "General assessment of how these crops perform in this region/season. 2-3 sentences.",
      "yield_forecast": {
          "estimated_yield": "e.g. 4.5 Tons",
          "details": "Explanation based on acreage."
      },
      "financials": {
          "revenue": "e.g. ₹2,50,000",
          "expenses": "e.g. ₹80,000",
          "profit": "e.g. ₹1,70,000",
          "notes": "Brief explanation of costs and market prices."
      },
      "tips": [
          "Actionable tip 1",
          "Actionable tip 2",
          "Actionable tip 3"
      ],
      "breakthroughs": [
          {
              "title": "Title of new tech/method",
              "description": "Description of how it helps."
          },
          {
              "title": "Another breakthrough",
              "description": "Description."
          }
      ]
    }
    IMPORTANT: Provide realistic, agricultural data. Be encouraging but factual.`;
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
        const content = response.choices?.[0]?.message?.content;
        if (!content) {
            throw new Error("No content received from AI");
        }
        try {
            const cleanText = content.replace(/```json/g, '').replace(/```/g, '').trim();
            const jsonResponse = JSON.parse(cleanText);
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(jsonResponse);
        } catch (e) {
            console.error("JSON Parse Error:", content);
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to parse AI response"
            }, {
                status: 500
            });
        }
    } catch (error) {
        console.error("Report Generation Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62892c8d._.js.map