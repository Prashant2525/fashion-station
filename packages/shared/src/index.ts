/** Small platform-neutral helpers only. Keep business logic in the API. */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
