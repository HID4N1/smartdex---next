export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export class ApiError extends Error {
  constructor(message, { status, data } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export function resolveApiUrl(path = "") {
  if (!path) return "";

  try {
    return new URL(path, API_BASE_URL).toString();
  } catch {
    return path;
  }
}

export async function parseJsonResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  return response.json();
}

function getErrorMessage(data, fallback) {
  if (!data) return fallback;

  if (typeof data === "string") return data;

  return data.detail || data.message || fallback || JSON.stringify(data, null, 2);
}

export async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers);
  const hasBody = options.body !== undefined && options.body !== null;

  if (hasBody && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(resolveApiUrl(path), {
    ...options,
    headers,
  });
  const data = await parseJsonResponse(response);

  if (!response.ok) {
    throw new ApiError(
      getErrorMessage(data, "Une erreur est survenue lors de la requête."),
      {
        status: response.status,
        data,
      }
    );
  }

  return data;
}
