import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const PROFILE_FILE = path.join(process.cwd(), 'data', 'profile.json');

async function getProfile() {
    try {
        const data = await fs.readFile(PROFILE_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return {};
    }
}

export async function GET() {
    const profile = await getProfile();
    return NextResponse.json(profile);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const current = await getProfile();
        const updated = { ...current, ...body };
        
        // Ensure dir
        const dir = path.dirname(PROFILE_FILE);
        await fs.mkdir(dir, { recursive: true });

        await fs.writeFile(PROFILE_FILE, JSON.stringify(updated, null, 2));
        return NextResponse.json(updated);
    } catch (e) {
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
    }
}
