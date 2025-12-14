import { NextResponse } from "next/server";
import { dbPosts } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { postId, userEmail, userName, text } = body;
        
        if(!postId || !userEmail || !text) {
             return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const newComment = dbPosts.addComment(postId, { userEmail, userName, text }); // id date auto added
        if(!newComment) return NextResponse.json({ error: "Post not found" }, { status: 404 });

        return NextResponse.json(newComment);
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const postId = searchParams.get("postId");
        const commentId = searchParams.get("commentId");
        const userEmail = searchParams.get("userEmail");

        if (!postId || !commentId || !userEmail) {
             return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const result = dbPosts.deleteComment(postId, commentId, userEmail);
        if(!result) return NextResponse.json({ error: "Unauthorized or Not Found" }, { status: 403 });

        return NextResponse.json({ success: true });
    } catch (e: any) {
         return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
