import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://news.google.com/rss/search?q=agriculture+india&hl=en-IN&gl=IN&ceid=IN:en', { next: { revalidate: 3600 } });
        const xml = await response.text();
        
        // Simple manual parsing to avoid external dependencies
        const items = [];
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        let match;
        
        while ((match = itemRegex.exec(xml)) !== null) {
            const itemContent = match[1];
            const titleMatch = itemContent.match(/<title>(.*?)<\/title>/);
            const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
            const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
            const sourceMatch = itemContent.match(/<source.*?>([^<]+)<\/source>/);
            
            // Clean title (Google News often puts "- Source" at the end)
            let title = titleMatch ? titleMatch[1].replace("<![CDATA[", "").replace("]]>", "") : "";
            const link = linkMatch ? linkMatch[1] : "#";
            const pubDate = pubDateMatch ? new Date(pubDateMatch[1]).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : "";
            const source = sourceMatch ? sourceMatch[1] : "News";

            if (title) {
                 // Try to split source from title if duplicate
                 if (title.includes(" - ")) {
                     const parts = title.split(" - ");
                     // If the last part is the source, remove it to be clean
                     if (parts.length > 1) {
                         // title = parts.slice(0, -1).join(" - "); // optional: remove source from title
                     }
                 }
                 
                items.push({
                    title,
                    link,
                    pubDate,
                    source
                });
            }
            if (items.length >= 6) break; // Limit to 6 items
        }
        
        return NextResponse.json(items);
    } catch (error) {
        console.error("News fetch error:", error);
        // Fallback data
        return NextResponse.json([
            { title: "Monsoon tracking: India expects normal rainfall", source: "IMD", link: "#", pubDate: "Today" },
            { title: "New MSP rates announced for Kharif crops", source: "Govt of India", link: "#", pubDate: "Yesterday" }
        ]);
    }
}
