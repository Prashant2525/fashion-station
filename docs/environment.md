# Environment and Integration Configuration

Copy the root .env.example to .env for local development. The example contains placeholder names only and is safe to commit; .env is ignored by Git. In deployed environments, provide the same values through the host's secret manager or environment configuration rather than a committed file.

The API explicitly reads the root .env file. Next.js and Expo resolve environment files from their own app roots, so set their public endpoint values in the shell or copy only NEXT_PUBLIC_API_URL / EXPO_PUBLIC_API_URL into ignored local environment files under apps/web and apps/mobile when running those clients directly.

## Required now

| Group | Variables | Notes |
| --- | --- | --- |
| API | NODE_ENV, API_PORT, API_PREFIX, CORS_ORIGINS | Non-secret runtime settings. |
| PostgreSQL | DATABASE_URL | Required for Prisma migrations and the API. Keep it server-only. |
| Web / mobile endpoint | NEXT_PUBLIC_API_URL, EXPO_PUBLIC_API_URL | Intentionally public API URLs only; never place credentials here. |

## Required when the corresponding feature is approved

| Capability | Configuration to obtain later |
| --- | --- |
| Object storage | Provider, bucket, region, access key ID, secret access key. |
| Email | Provider, verified sender, API key. |
| SMS / OTP | Provider, sender ID, API key, OTP signing secret. |
| Google sign-in | OAuth client ID and client secret. |
| Apple sign-in | Client ID, team ID, key ID, private key. |
| eSewa | Merchant code and secret key. |
| Khalti | Public key and secret key. |
| connectIPS | Merchant ID, username, password. |
| AI / recommendations | Provider and API key. |
| Monitoring | Monitoring DSN and deployment environment. |

Only the public client endpoint variables may be exposed to browser or Expo bundles. All provider credentials, database URLs, signing secrets, and payment credentials remain server-side.
