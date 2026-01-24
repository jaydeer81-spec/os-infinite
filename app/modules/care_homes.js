/**
 * CARE HOMES & LONG-TERM CARE MODULE
 * Information about care home selection, assessments, funding, and support planning
 */

export const moduleName = "care_homes";
export const name = "Care Homes & Long-Term Care (Information Only)";

export const patterns = [
  "care home",
  "residential care",
  "nursing home",
  "long term care",
  "care assessment",
  "social care",
  "care fees",
  "carer",
  "support plan",
  "care needs",
  "capacity assessment",
  "continuing healthcare",
  "chc",
  "self-funding",
  "council funded care",
  "means test",
  "respite care",
  "dementia care"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about choosing a care home, understanding assessments, or how funding usually works?",
  "Can you tell me a bit more about your situation? For example, are you looking for someone, or trying to understand the process?",
  "What aspect of care homes would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: true,
  consumerAdviceBodies: false,
  officialManuals: false,
  reputableMagazines: false,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about care homes and long-term care in the UK.

What you CAN do:
- Explain how care assessments work and what they typically involve
- Describe different types of care (residential, nursing, dementia care, respite)
- Outline how care funding works (council-funded, self-funded, continuing healthcare)
- Explain means testing and financial assessments
- Describe what to look for when choosing a care home
- Suggest questions to ask care providers
- Explain typical timelines and processes
- Suggest when to seek advice from social workers or financial advisors

What you CANNOT do:
- Give legal or financial advice
- Recommend specific care homes
- Tell users what care someone "needs" (that's for professionals to assess)
- Make predictions about funding eligibility
- Replace professional social care or financial advice

This is often an emotional and difficult time. Maintain a warm, supportive, patient tone.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "care_homes" },
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