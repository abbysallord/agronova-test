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
"[project]/agronova/app/api/analyze-weather-impact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        const { crops, weatherData } = await req.json();
        if (!process.env.MISTRAL_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "MISTRAL_API_KEY not configured"
            }, {
                status: 500
            });
        }
        // Format weather data for better AI understanding
        const daily = weatherData?.daily;
        const current = weatherData?.current;
        let weatherSummary = `Current Conditions: Temp ${current?.temperature_2m}°C, Humidity ${current?.relative_humidity_2m}%, Wind ${current?.wind_speed_10m}km/h.\n\nForecast:\n`;
        if (daily && daily.time) {
            daily.time.forEach((date, i)=>{
                if (i < 7) {
                    weatherSummary += `- ${date}: Max ${daily.temperature_2m_max[i]}°C, Min ${daily.temperature_2m_min[i]}°C, Rain ${daily.precipitation_sum[i]}mm, UV Index ${daily.uv_index_max?.[i]}.\n`;
                }
            });
        }
        const client = new __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f40$mistralai$2f$mistralai$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Mistral"]({
            apiKey: process.env.MISTRAL_API_KEY
        });
        const prompt = `
    Analyze the impact of the following weather forecast on these crops: ${crops}.
    
    WEATHER DATA:
    ${weatherSummary}

    Your goal is to provide a highly accurate and useful report for the farmer.
    1. Cite specific days or conditions from the forecast (e.g., "Heavy rain on Tuesday", "High heat on Day 3").
    2. Explain clearly WHY this weather matters for the specific crops listed.
    3. Give actionable advice.

    Return the response in this JSON format:
    {
        "impact_summary": "Detailed summary citing specific weather events and their effect.",
        "precautions": ["Actionable step 1", "Actionable step 2", "Actionable step 3"],
        "advisory": "Specific advice on irrigation and nutrients based on the rain/heat forecast.",
        "positive_outlook": "Any benefits of this weather."
    }
    Keep the tone professional yet simple for a farmer.
    `;
        const response = await client.chat.complete({
            model: "pixtral-12b-2409",
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
        if (!content) throw new Error("No content from AI");
        const cleanText = content.replace(/```json/g, '').replace(/```/g, '').trim();
        const jsonResponse = JSON.parse(cleanText);
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(jsonResponse);
    } catch (error) {
        console.error("Weather Analysis Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$agronova$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4441a1d8._.js.map