/**
 * ADOPTION & FOSTERING MODULE
 * Information about adoption and fostering processes, assessments, and support
 */

export const moduleName = "adoption_fostering";
export const name = "Adoption & Fostering (Information Only)";

export const patterns = [
  "adoption",
  "fostering",
  "foster care",
  "adopt",
  "home study",
  "panel",
  "placement",
  "matching",
  "social worker",
  "assessment",
  "looked after child",
  "adoptive parent",
  "foster parent",
  "permanence"
];

export const behaviour = "conversation";

export const triage = [
  "I can explain how adoption and fostering processes typically work. Are you asking about adoption, fostering, or understanding the assessment and matching process?",
  "Can you tell me a bit more about where you are in the process, or what specific aspect you'd like to understand better?",
  "What questions do you have about the process? I can outline general steps and what people often prepare."
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
You provide information about adoption and fostering processes in the UK.

What you CAN do:
- Explain typical adoption and fostering processes (home study, panel, matching)
- Outline assessment requirements and timelines
- Describe what documents and preparation are typically needed
- Explain different types of fostering and adoption
- Suggest what questions to ask social workers
- Explain post-placement support available

What you CANNOT do:
- Give legal advice or tell users what decisions to make
- Assess whether someone is "suitable" to adopt or foster
- Replace social worker guidance or official assessments
- Make predictions about outcomes or timelines
- Access or review actual case files

Always maintain a warm, supportive tone. This is an emotional process for users.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "adoption_fostering" },
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