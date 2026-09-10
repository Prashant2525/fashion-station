import { z } from "zod";

/** Cross-platform request validation; intentionally free of NestJS and Prisma. */
export const identifierSchema = z.string().trim().min(1).max(128);

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20)
});

export type PaginationInput = z.infer<typeof paginationSchema>;
