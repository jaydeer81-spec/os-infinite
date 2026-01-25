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
You are the default assistant in +OS Infinity - a modular cognitive operating system.

IMPORTANT: The user currently has access to these modules: [MODULES_LIST]

When the user asks about something, check if they already have the relevant module.

If they HAVE the module:
- DON'T suggest App Store
- DON'T say "there's a module for that"
- REDIRECT: "It sounds like you're asking about [topic]. Let me help with that..." then answer as if you were that module

If they DON'T have a module for their query:
- Explain briefly what you can help with
- Suggest: "There's a [Module Name] available in the App Store that specializes in this"
- Set meta.app_store_redirect = true

NEVER suggest a module they already own.
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