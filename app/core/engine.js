import OpenAI from "openai";
import { detectModule } from "./moduleDetector.js";
import { buildSourceInstructions } from "./sourceEnforcer.js";
import { runConversationTurn } from "./conversationLoop.js";
import { buildError } from "./jsonSchema.js";
import { getStorablePayload } from "./storageHandler.js";
import fs from "fs/promises";
import path from "path";

async function loadCapabilities(userId) {
  const filePath = path.join(process.cwd(), "app/capabilities", `${userId}.json`);
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

async function loadUiMode(userId) {
  const filePath = path.join(process.cwd(), "app/ui_modes", `${userId}.json`);
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

export async function runEngine({ userId, userInput }) {
  try {
    const capabilities = await loadCapabilities(userId);
    const uiMode = await loadUiMode(userId);
    
    if (!capabilities?.modules?.length) {
      return buildError("No modules available for this user.");
    }
    
    // Detect which module to use
    const moduleDef = detectModule(userInput, capabilities.modules);
    
    console.log("📦 Module detected:", moduleDef.moduleName);
    
    // Build source instructions based on module's allowed sources
    const sourceInstructions = buildSourceInstructions(moduleDef.allowedSources);
    
    // OpenAI client
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    // System prompt with constitutional rules
    const userModules = capabilities.modules.join(', ');

const systemPrompt = `
${constitutionalRules}

User has access to these modules: ${userModules}

${moduleGuidance}
`;`
You are the +OS core engine.
You respond ONLY in strict JSON using the schema provided.
You must stay inside the active module and its rules.

CONSTITUTIONAL RULES:
1. Always return valid JSON.
2. Never include text outside the JSON object.
3. Never include explanations, apologies, or meta commentary outside JSON.
4. Never invent fields not in the schema.
5. Never leave the active module scope.

TONE & SAFETY:
- Calm, gentle, emotionally neutral.
- No urgency, no moralising, no sensory overload.
- No medical, diagnostic, or financial advice.
- If unsure, ask for more information instead of guessing.

SOURCE RULES:
${sourceInstructions}

ACTIVE MODULE:
- Name: ${moduleDef.moduleName}
- Display Name: ${moduleDef.name}
- Behaviour: ${moduleDef.behaviour}

${moduleDef.moduleGuidance || ""}

OUTPUT SCHEMA:
{
  "type": "conversation_turn",
  "module": "string",
  "behaviour": "string",
  "message": "string",
  "follow_up_question": "string or null",
  "facts": [
    { "label": "string", "value": "string" }
  ],
  "meta": {
    "stage": "string",
    "summary": "string (optional)",
    "user_summary": "string (optional)",
    "suggested_module": "string (optional)",
    "suggested_module_name": "string (optional)",
    "app_store_redirect": "boolean (optional)"
  }
}
`;
    
    // Build conversation context
    const conversationTurn = runConversationTurn({
      moduleDef,
      userInput
    });
    
    // Call OpenAI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: JSON.stringify({
            ui_mode: uiMode,
            module: moduleDef.moduleName,
            behaviour: moduleDef.behaviour,
            conversation_turn: conversationTurn,
            user_input: userInput
          })
        }
      ]
    });
    
    const raw = completion.choices[0].message.content;
    console.log("🤖 RAW AI RESPONSE:", raw);
    
    let parsed;
    try {
      parsed = JSON.parse(raw);
      
      // Validate schema
      if (
        typeof parsed.type !== "string" ||
        parsed.type !== "conversation_turn" ||
        typeof parsed.module !== "string" ||
        typeof parsed.behaviour !== "string" ||
        typeof parsed.message !== "string" ||
        !Array.isArray(parsed.facts) ||
        typeof parsed.meta !== "object"
      ) {
        throw new Error("Invalid schema");
      }
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      parsed = buildError("Model returned invalid JSON. Please try rephrasing your question.");
    }
    
    // Prepare storage payload
    const storable = getStorablePayload(moduleDef, {
      userId,
      userInput,
      aiResponse: parsed
    });
    
    return {
      response: parsed,
      storage: storable
    };
    
  } catch (err) {
    console.error("❌ Engine error:", err);
    return buildError(`Engine error: ${err.message}`);
  }
}