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
    /*  subtitle: string;
    aboutMe: string;
    topics: Schema.Types.ObjectId[];
    followers: Schema.Types.ObjectId[];
    following: Schema.Types.ObjectId[];
    categoriesFollowed: String[];
    likedTopics: Schema.Types.ObjectId[];
    comments: ISchema.Types.ObjectId[];
    likedComments: Schema.Types.ObjectId[];
    savedTopics: Schema.Types.ObjectId[];
    */
  }
}
