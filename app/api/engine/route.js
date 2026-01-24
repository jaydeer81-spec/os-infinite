import { NextResponse } from "next/server";
import { runEngine } from "../../core/engine.js";

export async function POST(request) {
  try {
    console.log("✅ STEP 1: route.js reached");
    
    const body = await request.json();
    console.log("✅ STEP 2: JSON parsed", body);
    
    const user_id = body.user_id;
    const user_input = body.user_input;
    console.log("✅ STEP 3: extracted fields", { user_id, user_input });
    
    const userId = user_id || "dev-user";
    
    if (typeof user_input !== "string" || !user_input.trim()) {
      console.log("❌ STEP 4: missing user_input");
      return NextResponse.json(
        { error: true, message: "user_input is required" },
        { status: 400 }
      );
    }
    
    console.log("✅ STEP 5: calling engine");
    const result = await runEngine({
      userId,
      userInput: user_input
    });
    
    console.log("✅ STEP 6: engine returned", result);
    return NextResponse.json(result, { status: 200 });
    
  } catch (err) {
    console.error("❌ STEP ERROR:", err);
    return NextResponse.json(
      { error: true, message: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}