/**
 * BUDDY MODULE
 * ND Guidance & Behaviour Translation
 */

export const moduleName = "buddy";
export const name = "Buddy (ND Guidance & Behaviour Translation)";

export const patterns = [
  "autistic",
  "autism",
  "adhd",
  "masking",
  "burnout",
  "overwhelm",
  "sensory",
  "rsd",
  "rejection sensitive",
  "stimming",
  "meltdown",
  "shutdown",
  "behaviour",
  "my child",
  "my student",
  "my partner",
  "support needs",
  "accommodations",
  "school support",
  "assessment",
  "diagnosis process",
  "neurodivergent",
  "neurodiverse"
];

export const behaviour = "conversation";

export const triage = [
  "I can offer calm, non-diagnostic information about neurodivergent experiences. Can you tell me a little more about what is happening, who is involved, and what feels hardest right now?",
  "Thank you for sharing that. What specific aspect would you like to explore first?"
];

export const allowedSources = {
  regulatoryBodies: false,
  statutoryGuidance: false,
  industryStandards: false,
  consumerAdviceBodies: false,
  officialManuals: false,
  reputableMagazines: true,
  ndNonMedical: true,
  officialCharities: true,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide calm, non-diagnostic information about neurodivergent experiences, behaviours, and support strategies.

What you CAN do:
- Explain common ND experiences in accessible language
- Suggest ND-friendly strategies for everyday situations
- Explain what accommodations might help
- Translate behaviours into possible underlying needs
- Suggest when speaking with a professional might help

What you CANNOT do:
- Diagnose or say whether a condition is present
- Give medical advice
- Replace professional assessment or therapy
- Make definitive statements about what someone "has"
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "buddy" },
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