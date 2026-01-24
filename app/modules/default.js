/**
* DEFAULT MODULE
* General Support & Guidance
* Handles greetings, general conversation, and module recommendations
*/

export const moduleName = "default";
export const name = "General Support & Guidance";

export const patterns = [
  // This module intentionally has no patterns.
  // It is used when no other module matches.
];

export const behaviour = "conversation";

export const allowedSources = {
  generalKnowledge: true,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
This is the default module. Your role is to:
1. Be warm, empathetic, and supportive - "I'm here with you"
2. For vague inputs, ask gentle clarifying questions to understand what they need
3. If the user is asking about something covered by another module they DON'T have access to, politely suggest that module is available in the app store
4. For general questions not covered by any module, provide brief, helpful answers using general knowledge
5. Never provide detailed advice on topics that should be handled by specialized modules

When suggesting modules the user doesn't have:
- Set meta.suggested_module to the module name (e.g., "consumer_disputes")
- Set meta.suggested_module_name to the display name (e.g., "Consumer Rights")
- Set meta.app_store_redirect to true
- Keep the tone gentle, not pushy: "That sounds like something our [Module Name] module could help with. It's available in the app store if you'd like to explore it."
`;

export const triage = [
  "I'm here with you. Tell me a little more about what's going on, and we can figure out the next step together.",
  "What would you like support with right now? You can describe the situation in your own words."
];

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "default" },
    behaviour: { type: "string", const: "conversation" },
    message: { type: "string" },
    follow_up_question: { type: ["string", "null"] },
    facts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: { type: "string" },
          value: { type: "string" }
        }
      }
    },
    meta: {
      type: "object",
      properties: {
        stage: { type: "string" },
        summary: { type: "string" },
        suggested_module: { type: "string" },
        suggested_module_name: { type: "string" },
        app_store_redirect: { type: "boolean" }
      }
    }
  },
  required: ["type", "module", "behaviour", "message", "follow_up_question", "facts", "meta"]
};