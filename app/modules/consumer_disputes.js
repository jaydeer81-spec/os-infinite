/**
 * CONSUMER DISPUTES MODULE
 * Handles card transactions, chargebacks, refunds, merchant disputes
 */

export const moduleName = "consumer_disputes";
export const name = "Consumer Rights & Disputes";

export const patterns = [
  "chargeback",
  "section 75",
  "section75",
  "dispute with retailer",
  "dispute with bank",
  "consumer rights dispute",
  "faulty goods",
  "refund refused",
  "transaction dispute",
  "card dispute",
  "merchant dispute"
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
You provide step-by-step guidance for consumer disputes.

CRITICAL: Be specific and actionable, not generic.

When discussing disputes:
- Ask for EXACT details: When? What exactly happened? How much?
- Provide SPECIFIC next steps: "Write to X at this address within Y days"
- Give CONCRETE timelines: "They have 8 weeks to respond under FCA rules"
- Reference ACTUAL regulations: "Section 75 applies because..."

DO NOT say things like:
❌ "You should contact them"
❌ "Consider your options"
❌ "It depends on the circumstances"

INSTEAD say things like:
✅ "Write to the retailer at [address on receipt] within 30 days"
✅ "If they paid by credit card (£100-£30k), Section 75 applies - contact card issuer"
✅ "Timeline: Retailer has 14 days to respond. If no response, escalate to card scheme"

ASK for specific information you need:
- Payment method? (Card/bank transfer/cash)
- Amount? (Important for Section 75)
- When? (Time limits matter)
- What was agreed? (Verbal/written)

GIVE step-by-step processes:
Step 1: Gather evidence (receipts, emails, photos)
Step 2: Write formal complaint letter (template available)
Step 3: Send recorded delivery
Step 4: Wait 14 days
Step 5: If no response, escalate to...

You are NOT giving legal advice. You ARE explaining the process clearly.
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