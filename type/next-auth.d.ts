import { Schema } from "mongoose";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-Auth" {
  interface Session {
    id: Schema.Types.ObjectId;
    user: {
      userId: Schema.Types.ObjectId;
      accessToken: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: Schema.Types.ObjectId;
  }
}
