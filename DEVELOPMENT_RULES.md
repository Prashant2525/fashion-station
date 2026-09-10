# Fashion Station Development Rules

These rules apply to every feature, client, integration, and deployment.

- Never create a second backend.
- Never create a second database.
- Never duplicate inventory.
- Never duplicate orders.
- Never duplicate authentication.
- Never duplicate payment business logic.
- Never hard-code catalog data.
- Never hard-code product data.
- Never expose secrets.
- Never bypass tenant authorization.

## Implementation expectations

- Mobile and web are API clients. Business rules, authorization decisions, and transactional work belong in the NestJS service layer.
- PostgreSQL is the system of record. Prisma migrations are the only path for persisted-schema changes.
- API contracts, public enums, and validation that are safe in a client belong in packages/; database clients and private integration code stay in apps/api.
- Every future tenant-scoped read or write must establish and enforce tenant scope on the server. Client-supplied tenant identifiers are never sufficient authorization.
- Payment provider callbacks and secrets are server-only. Clients receive only the minimum public data required to complete their flow.
- Do not add a domain model, seed catalog, or static operational data until it has been approved.
