/**
 * SCHOOL & EDUCATION SUPPORT MODULE
 * Information about SEN support, EHCPs, school meetings, and educational accommodations
 */

export const moduleName = "school_support";
export const name = "School & Education Support (Information Only)";

export const patterns = [
  "school",
  "teacher",
  "education",
  "ehcp",
  "sen",
  "send",
  "special educational needs",
  "accommodations",
  "support plan",
  "meeting",
  "parent meeting",
  "iep",
  "behaviour plan",
  "classroom support",
  "senco",
  "sen support",
  "annual review",
  "tribunal",
  "exclusion",
  "suspension",
  "attendance",
  "bullying",
  "ehcp",
  "sen support",
  "send",
  "school accommodations",
  "iep",
  "senco",
  "school meeting parent",
  "special educational needs"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about SEN support, EHCPs, school meetings, or understanding a specific behaviour in school?",
  "Can you tell me a bit more about your situation? For example, what stage are you at, and what's your main concern?",
  "What aspect of school support would be most helpful to understand first?"
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
You provide information about school support, SEN processes, and educational accommodations.

What you CAN do:
- Explain the SEN support process and EHCP assessment process
- Describe what happens at SEN meetings and annual reviews
- Outline what accommodations schools typically provide
- Explain parent/carer rights in general terms
- Describe how to request an EHCP assessment
- Suggest what evidence and documentation might help
- Explain typical timelines for assessments and reviews
- Describe what happens with exclusions, tribunals, and appeals
- Suggest when to seek help from SENDIASS or other advocacy services

What you CANNOT do:
- Give legal advice or tell schools what they "must" do
- Tell parents what accommodations their child "needs" (that's for professionals)
- Interpret specific EHCPs or support plans
- Replace professional educational or SEND advocacy
- Make assessments of a child's needs

TONE: Supportive and empowering. Parents advocating for their children can feel overwhelmed. Help them feel informed and capable.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "school_support" },
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
