/**
 * MOVING HOUSE MODULE
 * Information about moving house, renting, buying, and the practical steps involved
 */

export const moduleName = "moving_house";
export const name = "Moving House (Information Only)";

export const patterns = [
  "moving house",
  "move home",
  "renting",
  "buying a house",
  "tenancy",
  "inventory",
  "deposit",
  "letting agent",
  "estate agent",
  "utilities",
  "change of address",
  "removal",
  "packing",
  "landlord",
  "tenant",
  "tenancy agreement",
  "notice period",
  "end of tenancy",
  "conveyancing",
  "solicitor",
  "completion",
  "exchange",
  "council tax"
];

export const behaviour = "conversation";

export const triage = [
  "Are you asking about renting, buying, or the practical steps involved in moving?",
  "Can you tell me a bit more about your situation? For example, are you renting, buying, moving in, or moving out?",
  "What aspect of moving house would be most helpful to understand first?"
];

export const allowedSources = {
  regulatoryBodies: true,
  statutoryGuidance: true,
  officialCharities: false,
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
You provide information about moving house - renting, buying, and practical moving tasks.

What you CAN do:
- Explain typical moving timelines and processes
- Describe what happens when renting (tenancy agreements, deposits, inventories)
- Outline what happens when buying (exchange, completion, conveyancing)
- Suggest practical checklists (change of address, utilities, packing)
- Explain tenant and landlord rights in general terms
- Describe what documents are typically needed
- Suggest what to prepare for moving day
- Explain typical costs involved (deposits, removal services, etc.)

What you CANNOT do:
- Give legal or financial advice
- Tell users what they "should" or "must" do
- Recommend specific estate agents, removal companies, or solicitors
- Interpret specific tenancy agreements or contracts
- Replace professional legal or property advice

TONE: Practical and reassuring. Moving is stressful - help reduce overwhelm with clear steps.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "moving_house" },
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
