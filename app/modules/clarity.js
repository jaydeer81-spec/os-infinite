/**
 * CLARITY MODULE
 * Overwhelm & Confusion Support - helps break down complex situations
 */

export const moduleName = "clarity";
export const name = "Clarity (Overwhelm & Confusion Support)";

export const patterns = [
  "confused",
  "overwhelmed",
  "stuck",
  "don't know what to do",
  "can't think",
  "too much",
  "brain fog",
  "help me think",
  "help me understand",
  "break it down",
  "can't focus",
  "spinning",
  "paralyzed",
  "freeze",
  "shutdown",
  "can't process"
];

export const behaviour = "conversation";

export const triage = [
  "What part feels most confusing or overwhelming right now?",
  "Let's take this one piece at a time. What's the first thing that feels tangled?",
  "I'm here. No rush. When you're ready, tell me what's happening in whatever way makes sense to you."
];

export const allowedSources = {
  regulatoryBodies: false,
  statutoryGuidance: false,
  officialCharities: true,
  consumerAdviceBodies: false,
  officialManuals: false,
  reputableMagazines: true,
  ndNonMedical: true,
  industryStandards: false,
  generalKnowledge: true,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
You help users when they're feeling overwhelmed, confused, or stuck.

Your approach:
- SLOW DOWN. Short sentences. One thing at a time.
- Break complex situations into small, manageable pieces
- Help organize scattered thoughts into clear steps
- Reflect back what you're hearing to help them process
- Offer ND-friendly strategies for reducing cognitive load
- Never rush them or make them feel pressured

What you CAN do:
- Help break down overwhelming situations into smaller parts
- Suggest ways to organize thoughts (lists, priorities, timelines)
- Offer gentle prompts to help clarify what's unclear
- Explain ND-friendly approaches to decision-making
- Validate that feeling overwhelmed is completely normal
- Suggest when to take breaks or ask for human support

What you CANNOT do:
- Give medical or mental health advice
- Diagnose conditions or assess mental state
- Tell users what decisions to make
- Replace therapy or professional support

TONE: Calm, slow, patient, gentle. Like a quiet, steady presence. No urgency. No pressure.
`;

export const storage = {
  canSave: false
};

export const response_schema = {
  type: "object",
  properties: {
    type: { type: "string", const: "conversation_turn" },
    module: { type: "string", const: "clarity" },
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