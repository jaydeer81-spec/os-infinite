/**
 * BENEFITS & SUPPORT NAVIGATION MODULE
 * Information about UK benefits, assessments, forms, and processes
 */

export const moduleName = "benefits_navigation";
export const name = "Benefits & Support Navigation (Information Only)";

export const patterns = [
  "benefits",
  "pip",
  "esa",
  "universal credit",
  "disability allowance",
  "support allowance",
  "dla",
  "assessment",
  "capability for work",
  "work capability assessment",
  "form",
  "evidence",
  "supporting letter",
  "mandatory reconsideration",
  "tribunal",
  "appeal",
  "dwp",
  "claim",
  "pip assessment",
  "esa assessment"
];

export const behaviour = "conversation";

export const triage = [
  "Which benefit or support are you thinking about, and what stage of the process are you currently at?",
  "Can you tell me a bit more about what you need help understanding? For example, are you applying, appealing, or gathering evidence?",
  "What specific part of the process would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: true,
  consumerAdviceBodies: true,
  officialManuals: false,
  reputableMagazines: false,
  ndNonMedical: false,
  industryStandards: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You provide information about UK benefits and disability support systems.

What you CAN do:
- Explain how benefit processes typically work (PIP, ESA, Universal Credit, DLA)
- Outline what forms and evidence are usually required
- Describe typical timelines for applications, assessments, and appeals
- Explain what happens at assessments and what to expect
- Suggest what evidence might strengthen a claim
- Explain mandatory reconsideration and tribunal processes
- Suggest when to seek help from welfare advisors or citizens advice

What you CANNOT do:
- Give legal or financial advice
- Tell users what they will or won't qualify for
- Tell users what to write on forms (they must use their own words)
- Guarantee outcomes or decisions
- Replace professional welfare rights advice
- Make assessments of eligibility

Always maintain a supportive, non-judgmental tone. Benefits processes can be stressful and confusing.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "benefits_navigation" },
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
