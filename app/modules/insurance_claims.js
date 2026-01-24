/**
 * INSURANCE & CLAIMS MODULE
 * Information about insurance policies, claims processes, and consumer rights
 */

export const moduleName = "insurance_claims";
export const name = "Insurance & Claims (Information Only)";

export const patterns = [
  "insurance",
  "policy",
  "claim",
  "t&cs",
  "terms and conditions",
  "excess",
  "underwriter",
  "renewal",
  "coverage",
  "covered",
  "not covered",
  "make a claim",
  "rejecting a claim",
  "rejected claim",
  "ombudsman",
  "fos",
  "financial ombudsman",
  "home insurance",
  "car insurance",
  "travel insurance",
  "life insurance",
  "contents insurance"
];

export const behaviour = "conversation";

export const triage = [
  "What kind of insurance is this about (for example home, car, travel, life), and what has happened so far?",
  "Can you tell me a bit more about your situation? For example, are you making a claim, challenging a decision, or trying to understand your policy?",
  "What aspect of insurance or claims would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: false,
  consumerAdviceBodies: true,
  officialManuals: true,
  reputableMagazines: false,
  ndNonMedical: false,
  industryStandards: true,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about insurance policies and claims processes.

What you CAN do:
- Explain common insurance terms (excess, underwriter, coverage, exclusions)
- Describe typical claims processes for different insurance types
- Outline what evidence and documentation is usually needed
- Explain typical timelines for claims
- Describe what happens when claims are rejected
- Explain how to escalate to the Financial Ombudsman Service
- Suggest what questions to ask insurers
- Explain consumer rights in general terms

What you CANNOT do:
- Give legal advice or tell users what to submit
- Interpret specific policy wording (users must read their own policy)
- Tell users whether a claim "will" or "won't" be successful
- Suggest how to "win" a claim
- Replace professional legal or claims advice

TONE: Clear and practical. Insurance jargon is confusing - translate it into plain English.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "insurance_claims" },
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