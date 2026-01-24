export const moduleName = "your_module_name";
export const name = "Display Name for Users";

export const patterns = [
  "keyword1",
  "keyword2",
  "phrase to match"
];

export const behaviour = "conversation"; // or "routine_pack" or "memory_bank"

export const triage = [
  "First clarifying question?",
  "Second question?",
  "Third question?"
];

export const allowedSources = {
  regulatoryBodies: true,  // Use as needed
  statutoryGuidance: false,
  industryStandards: false,
  consumerAdviceBodies: false,
  officialManuals: false,
  reputableMagazines: false,
  ndNonMedical: false,
  officialCharities: false,
  generalKnowledge: false,
  noForums: true,
  noSpeculation: true
};

export const moduleGuidance = `
Specific instructions for the AI about this module's purpose and boundaries.
`;

export const storage = {
  canSave: false  // Set to true if this module should save conversation history
};

export const response_schema = {
  // Standard schema - copy from examples above
};