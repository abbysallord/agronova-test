import { NextResponse } from "next/server";
import { verifyOtpHash } from "@/lib/otp";

export async function POST(req: Request) {
  try {
    const { email, otp, hash, expiry } = await req.json();

    if (!email || !otp || !hash || !expiry) {
        return NextResponse.json({ error: "Missing verification data" }, { status: 400 });
    }

    // 1. Check Expiry
    if (Date.now() > expiry) {
        return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 400 });
    }

    // 2. Verify Hash
    const isValid = verifyOtpHash(email, otp, expiry, hash);

    if (!isValid) {
        return NextResponse.json({ error: "Invalid OTP. Please check the code." }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("OTP Verify Error:", error);
    return NextResponse.json({ error: "Verification failed", details: error.message }, { status: 500 });
  }
}
