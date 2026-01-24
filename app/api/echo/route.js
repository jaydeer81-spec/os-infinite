import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const out = {};
  for (const [key, value] of formData.entries()) {
    out[key] = value;
  }
  return NextResponse.json({ received: out });
}
