import { apiRequest } from "./apiClient";

export function normalizeChatResponse(data) {
  return {
    ...data,
    answer: data?.answer || data?.reply || "Aucune réponse reçue.",
  };
}

export async function sendChatMessage({ message, conversationId } = {}) {
  const payload = { message };

  if (conversationId) {
    payload.conversation_id = conversationId;
  }

  const data = await apiRequest("/api/chatbot/chat/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return normalizeChatResponse(data);
}
