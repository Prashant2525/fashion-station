# Monorepo Working Agreement

Run commands from the repository root so npm workspaces resolve local packages consistently.

| Command | Purpose |
| --- | --- |
| npm run dev:api | Builds shared packages once and starts the NestJS API in watch mode. |
| npm run dev:web | Starts the Next.js client shell. |
| npm run dev:mobile | Starts the Expo client shell. |
| npm run build | Builds client-safe packages, API, and web. |
| npm run prisma:generate | Generates Prisma Client from the canonical schema. |
| npm run prisma:migrate:deploy | Applies committed migrations. |
| npm run prisma:seed | Runs the development seed entrypoint. |

The package build order exists because the API consumes emitted, client-safe package artifacts. Client packages are deliberately framework-neutral where possible.
