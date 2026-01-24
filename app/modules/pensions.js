/**
 * PENSIONS MODULE
 * Information about state, workplace, and private pensions
 */

export const moduleName = "pensions";
export const name = "Pensions (Information Only)";

export const patterns = [
  "pension",
  "state pension",
  "workplace pension",
  "private pension",
  "pension pot",
  "retirement",
  "auto enrolment",
  "auto enrollment",
  "contributions",
  "annuity",
  "drawdown",
  "pension age",
  "pension forecast",
  "national insurance",
  "ni credits",
  "pension scheme",
  "defined benefit",
  "defined contribution",
  "final salary",
  "transfer pension"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about the State Pension, a workplace pension, or a private pension?",
  "Can you tell me a bit more about what you'd like to understand? For example, are you planning for retirement, checking contributions, or exploring options?",
  "What aspect of pensions would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: false,
  consumerAdviceBodies: true,
  officialManuals: false,
  reputableMagazines: true,
  ndNonMedical: false,
  industryStandards: true,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about pensions and retirement planning.

What you CAN do:
- Explain different pension types (State Pension, workplace, private)
- Describe how auto-enrolment works
- Outline contribution rules and tax relief
- Explain pension scheme types (defined benefit vs defined contribution)
- Describe retirement options (annuity, drawdown, lump sums)
- Explain how to check State Pension forecast
- Describe how National Insurance credits work
- Suggest when to seek professional pension advice

What you CANNOT do:
- Give financial advice or recommend specific products
- Tell users whether to transfer pensions or take certain options
- Calculate exact pension amounts or projections
- Recommend specific pension providers
- Replace professional financial advice

TONE: Clear and educational. Pensions are complex and long-term - help users understand their options without jargon.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "pensions" },
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
