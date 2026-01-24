/**
 * Prepares data for local storage on device
 * Server doesn't store anything - just returns what SHOULD be saved
 */
export function getStorablePayload(moduleDef, { userId, userInput, aiResponse }) {
  const storage = moduleDef.storage || { canSave: false };
  
  if (!storage.canSave) return null;
  
  const base = {
    user_id: userId,
    module: moduleDef.moduleName,
    behaviour: moduleDef.behaviour,
    timestamp: new Date().toISOString()
  };
  
  const payload = {};
  
  (storage.saveFields || []).forEach((field) => {
    if (field === "user_input") payload.user_input = userInput;
    if (field === "ai_response") payload.ai_response = aiResponse;
    if (field === "facts" && aiResponse?.facts) payload.facts = aiResponse.facts;
    if (field === "summary" && aiResponse?.meta?.summary) {
      payload.summary = aiResponse.meta.summary;
    }
  });
  
  return { ...base, ...payload };
}