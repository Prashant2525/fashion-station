import type { ApiFailure, ApiResponse } from "@fashion-station/shared-types";

export type ApiClientOptions = {
  baseUrl: string;
  getAccessToken?: () => Promise<string | undefined> | string | undefined;
  fetcher?: typeof fetch;
};

export class ApiClientError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly payload?: ApiFailure
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

export function createApiClient(options: ApiClientOptions) {
  const fetcher = options.fetcher ?? fetch;
  const baseUrl = options.baseUrl.replace(/\/$/, "");

  return {
    async get<T>(path: string): Promise<ApiResponse<T>> {
      const token = await options.getAccessToken?.();
      const response = await fetcher(baseUrl + path, {
        headers: token ? { Authorization: "Bearer " + token } : undefined
      });
      const payload = (await response.json()) as ApiResponse<T>;

      if (!response.ok) {
        const failure = payload as ApiFailure;
        throw new ApiClientError(
          failure.error?.message ?? "API request failed",
          response.status,
          failure
        );
      }

      return payload;
    }
  };
}
