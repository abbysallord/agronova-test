import { Mistral } from "@mistralai/mistralai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const type = formData.get("type") as string; // 'manual' or 'image'

    if (!process.env.MISTRAL_API_KEY) {
        return NextResponse.json({ error: "MISTRAL_API_KEY not configured" }, { status: 500 });
    }

    const client = new Mistral({
      apiKey: process.env.MISTRAL_API_KEY,
    });

    let prompt = "";
    let messages: any[] = [];

    if (type === "manual") {
        const n = formData.get("n");
        const p = formData.get("p");
        const k = formData.get("k");
        const ph = formData.get("ph");
        const moisture = formData.get("moisture");
        const location = formData.get("location");
        const color = formData.get("color");

        prompt = `Analyze the following soil data for a farmer in ${location || "India"}:
        - Nitrogen (N): ${n}
        - Phosphorus (P): ${p}
        - Potassium (K): ${k}
        - pH Level: ${ph}
        - Moisture: ${moisture}%
        - Color: ${color}

        Return a specific, helpful report for the farmer in JSON format:
        {
            "soil_type": "Scientific name (e.g., Silty Loam)",
            "description": "Simple explanation of what this soil means for their farm.",
            "suitable_crops": ["List", "of", "5", "best", "crops"],
            "needs_water": "High | Medium | Low",
            "irrigation_advice": "Specific advice on how/when to water.",
            "fertilizer_recommendation": "Specific organic and chemical fertilizers to balance the nutrients.",
            "improvement_tips": "2-3 actionable tips to improve soil quality."
        }
        Keep language simple, encouraging, and farmer-friendly.`;

        messages = [{ role: "user", content: prompt }];

    } else if (type === "image") {
        const file = formData.get("image") as File;
        if (!file) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Image = buffer.toString("base64");
        const dataUrl = `data:${file.type};base64,${base64Image}`;

        prompt = `Analyze this soil image. First, strictly verify if this is an image of soil, dirt, or farmland.
        If the image is NOT soil (e.g., fruit, vegetable, animal, person, object), return ONLY this JSON: {"error": "Not a soil image. Please upload a clear photo of soil or farmland."}
        
        If it IS soil, identify the soil type and return a helpful report for a farmer in JSON format:
        {
            "soil_type": "Visual identification (e.g. Red Clay, Black Cotton Soil)",
            "description": "Explanation of the soil's visible properties.",
            "suitable_crops": ["List", "of", "5", "best", "crops"],
            "needs_water": "High | Medium | Low",
            "irrigation_advice": "Advice based on likely water retention.",
            "fertilizer_recommendation": "General fertilizer advice for this soil type.",
            "improvement_tips": "Tips to manage this specific soil structure."
        }
        Keep language simple.`;

         messages = [
            {
                role: "user",
                content: [
                    { type: "text", text: prompt },
                    { type: "image_url", imageUrl: dataUrl }
                ]
            }
        ];
    } else {
        return NextResponse.json({ error: "Invalid analysis type" }, { status: 400 });
    }

    const response = await client.chat.complete({
        model: "pixtral-12b-2409",
        messages: messages,
        responseFormat: { type: "json_object" },
    });

    const content = response.choices?.[0]?.message?.content;
    if (!content) throw new Error("No content from AI");

    const cleanText = (content as string).replace(/```json/g, '').replace(/```/g, '').trim();
    const jsonResponse = JSON.parse(cleanText);

    return NextResponse.json(jsonResponse);

  } catch (error: any) {
    console.error("Soil Analysis Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
