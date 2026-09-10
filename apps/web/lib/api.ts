import { createApiClient } from "@fashion-station/api-client";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/v1";

/**
 * The browser client talks only to the shared API. Feature-specific calls will
 * be added after their API contract and server-side authorization are approved.
 */
export const apiClient = createApiClient({ baseUrl: apiBaseUrl });
