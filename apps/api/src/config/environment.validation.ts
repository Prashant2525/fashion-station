type RawEnvironment = Record<string, unknown>;

function requireString(
  environment: RawEnvironment,
  name: string,
  fallback?: string
): string {
  const value = environment[name] ?? fallback;
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error("Missing required environment variable: " + name);
  }
  return value.trim();
}

export function validateEnvironment(environment: RawEnvironment): RawEnvironment {
  const apiPort = Number(requireString(environment, "API_PORT", "4000"));
  if (!Number.isInteger(apiPort) || apiPort < 1 || apiPort > 65535) {
    throw new Error("API_PORT must be an integer between 1 and 65535.");
  }

  const databaseUrl = requireString(environment, "DATABASE_URL");
  if (!databaseUrl.startsWith("postgresql://")) {
    throw new Error("DATABASE_URL must use the postgresql:// protocol.");
  }

  return {
    ...environment,
    NODE_ENV: requireString(environment, "NODE_ENV", "development"),
    API_PORT: apiPort,
    API_PREFIX: requireString(environment, "API_PREFIX", "v1"),
    CORS_ORIGINS: requireString(
      environment,
      "CORS_ORIGINS",
      "http://localhost:3000,http://localhost:8081"
    ),
    DATABASE_URL: databaseUrl
  };
}
