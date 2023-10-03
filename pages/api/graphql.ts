import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers, typeDefs } from "../../apollo/server/schema";
import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "@apollo/server";
import { authOptions } from "./auth/[...nextauth]";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);
    return {
      req,
      res,
      session,
    };
  },
});

export default handler;
