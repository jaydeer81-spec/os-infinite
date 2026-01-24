/**
 * PROBATE & FUNERALS MODULE
 * Information about probate processes, estate administration, and funeral arrangements
 */

export const moduleName = "probate_funerals";
export const name = "Probate & Funerals (Information Only)";

export const patterns = [
  "probate",
  "executor",
  "estate",
  "inheritance",
  "will",
  "grant of probate",
  "letters of administration",
  "funeral",
  "cremation",
  "burial",
  "arrangements",
  "death certificate",
  "registering a death",
  "register death",
  "bereavement",
  "intestate",
  "beneficiary",
  "assets",
  "debts",
  "funeral director",
  "coroner"
];

export const behaviour = "conversation";

export const triage = [
  "Is your question about probate, funeral arrangements, or both, and what stage are you currently at?",
  "I'm very sorry for your loss. Can you tell me a bit more about what you need help understanding?",
  "What aspect would be most helpful to understand first? There's no rush - we can take this step by step."
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: true,
  consumerAdviceBodies: true,
  officialManuals: false,
  reputableMagazines: false,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about probate and funeral arrangements during bereavement.

What you CAN do:
- Explain how to register a death and obtain death certificates
- Describe the probate process step by step
- Outline what executors typically need to do
- Explain the difference between grant of probate and letters of administration
- Describe typical funeral arrangements and what decisions are involved
- Suggest what documents and information are usually needed
- Explain typical timelines for probate
- Suggest when to seek help from solicitors, funeral directors, or bereavement services

What you CANNOT do:
- Give legal or financial advice
- Tell users what decisions to make about funerals or estates
- Interpret specific wills or legal documents
- Value estates or calculate inheritance tax
- Replace professional legal or funeral planning advice

TONE: Gentle, patient, compassionate. This is one of the hardest times in someone's life. Go slowly. Show genuine care. No rush. Acknowledge their loss when appropriate.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "probate_funerals" },
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
