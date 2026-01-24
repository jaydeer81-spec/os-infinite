/**
 * Builds source instruction text for the AI based on allowed sources
 * @param {Object} allowedSources - Object with boolean flags for each source type
 * @returns {string} - Formatted instructions
 */
export function buildSourceInstructions(allowedSources) {
  const flags = allowedSources || {};
  const lines = [];
  
  if (flags.regulatoryBodies) {
    lines.push("✓ Use information from official regulatory or statutory bodies where relevant.");
  }
  
  if (flags.statutoryGuidance) {
    lines.push("✓ Base explanations on statutory guidance and general legal principles without naming specific acts unless necessary.");
  }
  
  if (flags.industryStandards) {
    lines.push("✓ Use official industry standards and scheme rules where applicable.");
  }
  
  if (flags.officialManuals) {
    lines.push("✓ Use official manufacturer manuals and product documentation.");
  }
  
  if (flags.reputableMagazines) {
    lines.push("✓ You may use reputable, editorially-reviewed magazines or publications, not blogs or forums.");
  }
  
  if (flags.ndNonMedical) {
    lines.push("✓ Use non-medical, CBT-style, supportive information from reputable ND-focused sources.");
  }
  
  if (flags.officialCharities) {
    lines.push("✓ You may use information from official charities or recognised support organisations.");
  }
  
  if (flags.consumerAdviceBodies) {
    lines.push("✓ Use information from reputable consumer advice bodies.");
  }
  
  if (flags.generalKnowledge) {
    lines.push("✓ You may use general knowledge and common information, but keep responses brief.");
  }
  
  if (flags.noForums) {
    lines.push("✗ Never rely on forums, chats, social media, or unverified user-generated content.");
  }
  
  if (flags.noSpeculation) {
    lines.push("✗ If you are unsure, do not guess. Ask for more information or state the uncertainty clearly.");
  }
  
  if (lines.length === 0) {
    return "No specific source restrictions. Use reliable, factual information.";
  }
  
  return lines.join("\n");
}