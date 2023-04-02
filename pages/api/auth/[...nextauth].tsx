import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../db/config/mongodb";
declare var process: {
  env: {
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    MONGODB_URI: string;
    NEXTAUTH_SECRET: string;
  };
};
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }:any) {
      session.id = user.id;
      return session;
    },
  },

  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/register",
  },
  theme: {
    colorScheme: "light",
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
});
