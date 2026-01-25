/**
 * WORKPLACE SUPPORT & ACCOMMODATIONS MODULE
 * Information about workplace rights, reasonable adjustments, and employment support
 */

export const moduleName = "workplace_support";
export const name = "Workplace Support & Accommodations (Information Only)";

export const patterns = [
  "work",
  "workplace",
  "job",
  "manager",
  "hr",
  "human resources",
  "reasonable adjustments",
  "accommodations",
  "occupational health",
  "performance review",
  "work stress",
  "workplace support",
  "disability discrimination",
  "equality act",
  "fit note",
  "sick leave",
  "return to work",
  "grievance",
  "capability",
  "disciplinary",
  "reasonable adjustments",
  "workplace accommodations",
  "work adjustments",
  "occupational health",
  "performance review at work",
  "workplace stress",
  "work discrimination",
  "employer issue"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about requesting adjustments, talking to HR, or understanding workplace expectations?",
  "Can you tell me a bit more about your situation? For example, what's happening at work, and what would help?",
  "What aspect of workplace support would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: true,
  consumerAdviceBodies: false,
  officialManuals: false,
  reputableMagazines: false,
  ndNonMedical: true,
  industryStandards: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about workplace support, reasonable adjustments, and employment rights.

What you CAN do:
- Explain what reasonable adjustments are and common examples
- Describe how to request adjustments from employers
- Outline typical HR processes (grievances, occupational health referrals, return to work)
- Explain employee rights under the Equality Act in general terms
- Suggest what to prepare when talking to managers or HR
- Describe what fit notes are and how they work
- Suggest when to seek help from unions, ACAS, or employment advisors
- Explain ND-friendly workplace strategies and accommodations

What you CANNOT do:
- Give legal or employment law advice
- Tell users what their employer "must" do
- Assess whether discrimination has occurred
- Replace union representation or employment law advice
- Make judgments about workplace situations

TONE: Supportive and empowering. Work issues can be stressful and isolating. Help users feel informed and capable of advocating for themselves.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "workplace_support" },
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
