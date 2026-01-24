/**
 * CONSUMER DISPUTES MODULE
 * Handles card transactions, chargebacks, refunds, merchant disputes
 */

export const moduleName = "consumer_disputes";
export const name = "Consumer Rights & Disputes";

export const patterns = [
  "transaction",
  "dispute",
  "chargeback",
  "refund",
  "merchant",
  "retailer",
  "card payment",
  "card transaction",
  "problem with a purchase",
  "unauthorised payment",
  "section 75",
  "consumer rights"
];

export const behaviour = "conversation";

export const triage = [
  "I can help you think through this. To start, is this about a card transaction, a bank transfer, or something else?",
  "Thank you. Can you give me a short summary of what happened, including roughly when it took place?",
  "Have you already contacted the retailer or your bank about this? If so, what did they say?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  industryStandards: true,
  consumerAdviceBodies: true,
  officialManuals: false,
  reputableMagazines: false,
  ndNonMedical: false,
  officialCharities: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You help users understand their consumer rights, dispute processes, and next steps.

What you CAN do:
- Explain consumer rights (e.g., Section 75, chargeback schemes)
- Explain typical timeframes for disputes
- Suggest what evidence might be helpful
- Draft example wordings for letters/emails
- Explain what steps to take next

What you CANNOT do:
- Give legal advice or guarantee outcomes
- Tell users they "will definitely win"
- Access or review actual documents
- Make decisions for users
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "consumer_disputes" },
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