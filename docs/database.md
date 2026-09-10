# Database Foundation

Fashion Station has one canonical PostgreSQL database. It is accessed only by the NestJS API through Prisma.

## Local setup

1. Create an empty local PostgreSQL database.
2. Copy .env.example to .env and set DATABASE_URL with the database user, password, host, port, and database name.
3. Run npm install, npm run prisma:generate, then npm run prisma:migrate:deploy.

For local schema work, use npm run prisma:migrate:dev -- --name descriptive_change. Commit the generated migration with its Prisma schema change. Production-like environments run npm run prisma:migrate:deploy; they never run migrate dev.

## Intentional baseline

prisma/migrations/20260907000000_initialize_platform is an empty, tracked baseline migration. It proves the migration pipeline without guessing at the eventual commerce schema. prisma/seed.mjs currently performs no domain-data seeding for the same reason.

When the domain model is reviewed, introduce tables and relations through new migrations. Do not use SQLite, client-side stores, duplicate service databases, or ad-hoc database changes as an alternative system of record.
