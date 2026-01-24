export function buildConversationTurn({
  moduleName,
  behaviour,
  message,
  followUpQuestion = null,
  facts = [],
  meta = {}
}) {
  return {
    type: "conversation_turn",
    module: moduleName,
    behaviour,
    message,
    follow_up_question: followUpQuestion,
    facts,
    meta
  };
}

export function buildError(message) {
  return {
    error: true,
    message
  };
}