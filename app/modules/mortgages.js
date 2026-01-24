/**
 * MORTGAGES MODULE
 * Information about mortgage types, processes, and general guidance
 */

export const moduleName = "mortgages";
export const name = "Mortgages (Information Only)";

export const patterns = [
  "mortgage",
  "remortgage",
  "fixed rate",
  "variable rate",
  "tracker",
  "interest only",
  "repayment mortgage",
  "lender",
  "affordability",
  "deposit",
  "equity",
  "loan to value",
  "ltv",
  "mortgage broker",
  "mortgage offer",
  "mortgage agreement",
  "early repayment charge",
  "erc",
  "overpayment",
  "first time buyer",
  "buy to let",
  "help to buy"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about getting a mortgage, remortgaging, or understanding how a specific type works?",
  "Can you tell me a bit more about your situation? For example, are you a first-time buyer, remortgaging, or exploring options?",
  "What aspect of mortgages would be most helpful to understand first?"
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
You provide information about mortgages and the mortgage process.

What you CAN do:
- Explain different mortgage types (fixed, variable, tracker, interest-only, repayment)
- Describe how the mortgage application process typically works
- Explain what lenders usually look for (affordability, deposit, credit history)
- Outline what documents are typically needed
- Describe typical timelines from application to completion
- Explain common mortgage terms (LTV, equity, early repayment charges)
- Suggest when to speak with a mortgage broker or advisor
- Explain schemes like Help to Buy or Shared Ownership in general terms

What you CANNOT do:
- Give financial advice or recommend specific products
- Tell users whether they "will" or "won't" get a mortgage
- Calculate exact affordability or loan amounts
- Recommend specific lenders or brokers
- Replace professional mortgage advice

TONE: Clear and educational. Mortgages are complex - break down jargon into plain language.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "mortgages" },
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
