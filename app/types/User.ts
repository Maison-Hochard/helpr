import { User as PrismaUser, Subscription } from "@prisma/client";

export type User = PrismaUser & {
  subscription: Subscription[];
};
