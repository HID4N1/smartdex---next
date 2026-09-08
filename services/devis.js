import { API_BASE_URL, ApiError, apiRequest, parseJsonResponse, resolveApiUrl } from "./apiClient";

const DEVIS_ACCESS_TOKEN_HEADER = "X-Devis-Access-Token";

function getSecureDevisErrorMessage(status, fallback) {
  if (status === 400) {
    return "Certaines informations du devis sont invalides. Vérifiez votre demande puis réessayez.";
  }

  if (status === 404) {
    return "Impossible d’accéder à ce devis. Le lien a peut-être expiré ou la demande est introuvable.";
  }

  if (status === 429) {
    return "Trop de demandes ont été envoyées. Veuillez patienter un moment avant de réessayer.";
  }

  if (status >= 500) {
    return "Le service de devis est temporairement indisponible. Veuillez réessayer dans quelques instants.";
  }

  return fallback || "Impossible de traiter ce devis pour le moment.";
}

function assertSecureDevisCredentials(devisId, accessToken) {
  if (!devisId) {
    throw new ApiError("Identifiant de devis introuvable dans la réponse.");
  }

  if (!accessToken) {
    throw new ApiError(
      "Impossible de sécuriser l’accès à ce devis. Veuillez créer une nouvelle demande."
    );
  }
}

function stripLegacyTokenParam(path) {
  const url = new URL(path, API_BASE_URL);
  url.searchParams.delete("token");

  return url.toString();
}

function getDevisPdfPath({ devisId, pdfUrl }) {
  if (pdfUrl) {
    return stripLegacyTokenParam(pdfUrl);
  }

  return `/api/devis/requests/${devisId}/generate/?format=pdf`;
}

async function postSecureDevisJson(path, accessToken) {
  const response = await fetch(resolveApiUrl(path), {
    method: "POST",
    headers: {
      [DEVIS_ACCESS_TOKEN_HEADER]: accessToken,
    },
  });
  const data = await parseJsonResponse(response);

  if (!response.ok) {
    throw new ApiError(
      getSecureDevisErrorMessage(response.status, data?.detail || data?.message),
      {
        status: response.status,
        data,
      }
    );
  }

  return data;
}

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

export async function generateDevisRequest(devisId, accessToken) {
  assertSecureDevisCredentials(devisId, accessToken);

  return postSecureDevisJson(
    `/api/devis/requests/${devisId}/generate/`,
    accessToken
  );
}

export async function downloadDevisPdf({ devisId, accessToken, pdfUrl } = {}) {
  assertSecureDevisCredentials(devisId, accessToken);

  const response = await fetch(resolveApiUrl(getDevisPdfPath({ devisId, pdfUrl })), {
    method: "POST",
    headers: {
      [DEVIS_ACCESS_TOKEN_HEADER]: accessToken,
      Accept: "application/pdf",
    },
  });

  if (!response.ok) {
    const data = await parseJsonResponse(response);

    throw new ApiError(
      getSecureDevisErrorMessage(response.status, data?.detail || data?.message),
      {
        status: response.status,
        data,
      }
    );
  }

  return response.blob();
}

export async function submitDevisRequest(payload) {
  const createdData = await createDevisRequest(payload);
  const devisId = createdData?.id || createdData?.request_id;
  const accessToken = createdData?.access_token;
  const generatedData = await generateDevisRequest(devisId, accessToken);

  return {
    request: {
      ...payload,
      ...createdData,
    },
    quote: generatedData,
  };
}

export { API_BASE_URL, resolveApiUrl };
