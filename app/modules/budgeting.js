/**
 * BUDGETING & MONEY MANAGEMENT MODULE
 * Information about budgeting methods, expense tracking, and money management
 */

export const moduleName = "budgeting";
export const name = "Budgeting & Money Management (Information Only)";

export const patterns = [
  "budget",
  "budgeting",
  "money management",
  "struggling financially",
  "debt",
  "bills",
  "expenses",
  "spending",
  "saving",
  "financial planning",
  "income",
  "outgoings",
  "priority debts",
  "non-priority debts",
  "creditors",
  "payment plan",
  "arrears"
];

export const behaviour = "conversation";

export const triage = [
  "Are you looking for help understanding budgeting methods, organising bills, or managing a specific situation?",
  "Can you tell me a bit more about what aspect of budgeting or money management you'd like to explore?",
  "What would be most helpful right now - understanding how to track spending, prioritizing bills, or something else?"
];

export const allowedSources = {
  regulatoryBodies: false,
  statutoryGuidance: false,
  officialCharities: true,
  consumerAdviceBodies: true,
  officialManuals: false,
  reputableMagazines: true,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: true,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about budgeting and money management approaches.

What you CAN do:
- Explain common budgeting methods (50/30/20, zero-based budgeting, envelope method)
- Describe how to track income and expenses
- Explain how to prioritize debts (priority vs non-priority)
- Suggest how to organize bills and payments
- Explain how payment plans with creditors typically work
- Describe debt management options (StepChange, Citizens Advice, etc.)
- Suggest budgeting tools and templates people commonly use

What you CANNOT do:
- Give financial advice or tell users what specific decisions to make
- Recommend specific financial products or services
- Tell users whether to pay one debt before another (they must decide)
- Calculate exact budgets for users
- Replace professional debt advice

Keep tone supportive and non-judgmental. Financial stress is overwhelming.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "budgeting" },
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
