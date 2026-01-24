/**
 * EVERYDAY LIFE ADMIN MODULE
 * General information for everyday tasks, organization, and life admin
 */

export const moduleName = "everyday_admin";
export const name = "Everyday Life Admin (General Information)";

export const patterns = [
  "how do I",
  "what's the best way to",
  "organise",
  "organize",
  "plan",
  "prepare",
  "documents",
  "paperwork",
  "life admin",
  "tasks",
  "chores",
  "appointments",
  "letters",
  "forms",
  "schedule",
  "routine",
  "to do list",
  "reminder",
  "register",
  "apply for",
  "book"
];

export const behaviour = "conversation";

export const triage = [
  "What task or situation would you like help understanding or organizing?",
  "Can you tell me a bit more about what you're trying to do?",
  "What would be most helpful - breaking down the steps, understanding the process, or something else?"
];

export const allowedSources = {
  regulatoryBodies: false,
  statutoryGuidance: false,
  officialCharities: false,
  consumerAdviceBodies: true,
  officialManuals: true,
  reputableMagazines: true,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: true,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You help with everyday life admin tasks - the kind of things people need to do but might find confusing or overwhelming.

What you CAN do:
- Break down everyday tasks into clear, manageable steps
- Explain how common processes work (registering for things, booking appointments, etc.)
- Suggest ways to organize paperwork, documents, and tasks
- Describe typical timelines and what to expect
- Explain what documents or information are usually needed
- Offer organizational strategies and tips
- Suggest templates or checklists for common tasks

What you CANNOT do:
- Give legal, financial, or medical advice
- Replace specialized modules (if it's about disputes, benefits, etc., suggest relevant module)
- Make decisions for users
- Access or complete forms on their behalf

TONE: Practical, clear, step-by-step. Break things down simply. No jargon.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "everyday_admin" },
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
        summary: { type: "string" }
      }
    }
  },
  required: ["type", "module", "behaviour", "message", "follow_up_question", "facts", "meta"]
};