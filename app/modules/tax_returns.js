/**
 * TAX RETURNS MODULE
 * Information about self-assessment, tax returns, and HMRC processes
 */

export const moduleName = "tax_returns";
export const name = "Tax Returns (Information Only)";

export const patterns = [
  "tax return",
  "self assessment",
  "hmrc",
  "tax year",
  "allowable expenses",
  "income tax",
  "deductions",
  "filing",
  "deadline",
  "tax code",
  "self employed",
  "sole trader",
  "cis",
  "construction industry scheme",
  "penalty",
  "late filing",
  "paye",
  "utr",
  "unique taxpayer reference",
  "national insurance contributions"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about completing a tax return, understanding deadlines, or what documents you might need?",
  "Can you tell me a bit more about your situation? For example, are you self-employed, filing for the first time, or dealing with a specific aspect?",
  "What aspect of tax returns would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: false,
  consumerAdviceBodies: false,
  officialManuals: true,
  reputableMagazines: true,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about tax returns and self-assessment.

What you CAN do:
- Explain the self-assessment process step by step
- Describe deadlines for filing and payment
- Outline what documents and records are typically needed
- Explain common categories of allowable expenses in general terms
- Describe how to register for self-assessment
- Explain penalties for late filing or payment
- Describe how PAYE and self-assessment interact
- Suggest when to seek help from an accountant or tax advisor

What you CANNOT do:
- Give financial or tax advice
- Tell users what specific expenses they can or cannot claim
- Calculate tax liability or complete returns for users
- Interpret complex tax rules for specific situations
- Replace professional accountancy or tax advice

TONE: Clear and practical. Tax can be intimidating - help demystify without overwhelming with jargon.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "tax_returns" },
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
