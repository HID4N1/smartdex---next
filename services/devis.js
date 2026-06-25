import { API_BASE_URL, ApiError, apiRequest, resolveApiUrl } from "./apiClient";

export async function generateDevisFromChat(payload) {
  const data = await apiRequest("/api/devis/generate-from-chat/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (data?.status === "failed") {
    throw new ApiError(
      data?.detail ||
        data?.message ||
        "Impossible de générer le devis pour le moment.",
      { data }
    );
  }

  return data;
}

export async function createDevisRequest(payload) {
  return apiRequest("/api/devis/requests/", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function generateDevisRequest(devisId) {
  if (!devisId) {
    throw new ApiError("Identifiant de devis introuvable dans la réponse.");
  }

  return apiRequest(`/api/devis/requests/${devisId}/generate/`, {
    method: "POST",
  });
}

export async function submitDevisRequest(payload) {
  const createdData = await createDevisRequest(payload);
  const devisId = createdData?.id || createdData?.request_id;
  const generatedData = await generateDevisRequest(devisId);

  return {
    request: {
      ...payload,
      ...createdData,
    },
    quote: generatedData,
  };
}

export { API_BASE_URL, resolveApiUrl };
