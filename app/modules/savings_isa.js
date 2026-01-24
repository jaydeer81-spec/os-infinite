/**
 * SAVINGS & ISAs MODULE
 * Information about ISAs, savings accounts, and tax-free savings options
 */

export const moduleName = "savings_isa";
export const name = "Savings & ISAs (Information Only)";

export const patterns = [
  "isa",
  "cash isa",
  "stocks and shares isa",
  "lifetime isa",
  "lisa",
  "help to buy isa",
  "junior isa",
  "savings",
  "savings account",
  "interest",
  "tax free",
  "tax-free",
  "allowance",
  "annual limit",
  "isa allowance",
  "fixed rate",
  "easy access",
  "notice account",
  "aer",
  "gross rate"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about how ISAs work, what types exist, or how savings accounts differ?",
  "Can you tell me a bit more about what you'd like to understand? For example, are you comparing options, checking allowances, or exploring a specific type?",
  "What aspect of savings or ISAs would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: false,
  consumerAdviceBodies: true,
  officialManuals: false,
  reputableMagazines: true,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about ISAs and savings accounts.

What you CAN do:
- Explain different ISA types (Cash ISA, Stocks & Shares ISA, Lifetime ISA, Junior ISA)
- Describe annual ISA allowances and tax-free rules
- Explain how different savings account types work (fixed rate, easy access, notice)
- Describe what AER means and how interest works
- Outline eligibility rules for different ISAs
- Explain penalties and restrictions (e.g., Lifetime ISA withdrawal penalties)
- Compare general features of ISAs vs regular savings accounts

What you CANNOT do:
- Give financial advice or recommend specific products
- Tell users which ISA or savings account to choose
- Recommend specific banks or providers
- Calculate exact returns or interest
- Replace professional financial advice

TONE: Clear and educational. Help users understand options without pushing decisions.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "savings_isa" },
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
