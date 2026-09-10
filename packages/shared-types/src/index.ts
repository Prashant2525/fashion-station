/** Public, client-safe contracts. Never add server entities or secrets here. */

export type ApiSuccess<T> = {
  data: T;
  meta?: Record<string, unknown>;
};

export type ApiFailure = {
  error: {
    code: ApiErrorCode;
    message: string;
    details?: Record<string, unknown>;
  };
};

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export enum ApiErrorCode {
  BadRequest = "BAD_REQUEST",
  Unauthorized = "UNAUTHORIZED",
  Forbidden = "FORBIDDEN",
  NotFound = "NOT_FOUND",
  Conflict = "CONFLICT",
  ValidationFailed = "VALIDATION_FAILED",
  InternalError = "INTERNAL_ERROR"
}

export type Pagination = {
  page: number;
  pageSize: number;
};

export type Paginated<T> = ApiSuccess<T[]> & {
  meta: Pagination & { total: number };
};

export type HealthStatus = {
  status: "ok";
  timestamp: string;
  service: "fashion-station-api";
};
