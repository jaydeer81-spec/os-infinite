import { buildConversationTurn } from "./jsonSchema.js";

/**
 * Runs a conversation turn based on module behavior
 * This is kept simple for now - can be extended for multi-turn state later
 */
export function runConversationTurn({ moduleDef, userInput }) {
  const behaviour = moduleDef.behaviour;
  
  if (behaviour === "conversation") {
    const trimmed = userInput.trim();
    const firstTriage = moduleDef.triage?.[0];
    
    // If input is very short and module has triage questions, use them
    if (trimmed.length < 10 && firstTriage) {
      return buildConversationTurn({
        moduleName: moduleDef.moduleName,
        behaviour,
        message: firstTriage,
        followUpQuestion: firstTriage,
        facts: [],
        meta: { stage: "triage" }
      });
    }
    
    // Otherwise, treat as a summary and ask follow-ups
    return buildConversationTurn({
      moduleName: moduleDef.moduleName,
      behaviour,
      message: "Thank you for the summary. I will ask you a few focused questions to understand the situation better.",
      followUpQuestion: moduleDef.triage?.[1] || null,
      facts: [],
      meta: { stage: "follow_up_candidate", user_summary: userInput }
    });
  }
  
  if (behaviour === "routine_pack") {
    return buildConversationTurn({
      moduleName: moduleDef.moduleName,
      behaviour,
      message: "I will create a routine based on what you've told me.",
      followUpQuestion: null,
      facts: [],
      meta: { stage: "routine_generation_candidate", user_summary: userInput }
    });
  }
  
  if (behaviour === "memory_bank") {
    return buildConversationTurn({
      moduleName: moduleDef.moduleName,
      behaviour,
      message: "I've captured this as a memory entry.",
      followUpQuestion: null,
      facts: [],
      meta: { stage: "memory_entry", user_entry: userInput }
    });
  }
  
  // Fallback
  return buildConversationTurn({
    moduleName: moduleDef.moduleName,
    behaviour,
    message: "I've received your message.",
    followUpQuestion: null,
    facts: [],
    meta: { stage: "generic" }
  });
}