# Fashion Station Architecture

## Platform topology

~~~text
React Native + Expo (Android / iOS) ─┐
                                    ├─ NestJS + Node.js + TypeScript API ─ shared services ─ PostgreSQL
Next.js web client ─────────────────┘                                      Prisma ORM             canonical database
~~~

| Area | Technology | Responsibility |
| --- | --- | --- |
| Mobile | React Native + Expo | Mobile client only; no duplicate backend logic. |
| Web | Next.js | Web client only; no duplicate backend logic. |
| Backend | NestJS + Node.js + TypeScript | The one API boundary and home of business/service logic. |
| Database | PostgreSQL | The one canonical system of record. |
| ORM | Prisma | Database schema, migrations, generated client, and access layer. |

## Repository layout

~~~text
apps/
  api/                 NestJS shared backend
  web/                 Next.js client shell
  mobile/              React Native + Expo client shell
packages/
  shared-types/        Public TypeScript contracts and common enums
  validation/          Cross-platform Zod request/response validation
  api-client/          Typed, platform-neutral HTTP client foundation
  shared/              Small platform-neutral utilities
prisma/                Prisma schema, migrations, and seed entrypoint
docs/                  Operational and architecture documentation
~~~

This is intentionally an apps/ and packages/ workspace layout. prisma/ remains at the repository root because it defines the single shared database contract, rather than belonging to a particular client or application package.

## Boundary rules

- apps/api is the only code permitted to access Prisma or perform server-side business operations.
- apps/web and apps/mobile call the API through HTTP; neither accesses PostgreSQL.
- Packages may contain client-safe contracts, validation, and utilities. They must not contain credentials, server-only modules, or payment secrets.
- Domain modules will be added to the API only after their data model and tenant authorization are reviewed.

## Current foundation scope

The API contains configuration, database lifecycle wiring, and a health endpoint. The only Prisma migration is an intentional empty baseline: no product, user, payment, inventory, or order schema is being assumed before domain review.
