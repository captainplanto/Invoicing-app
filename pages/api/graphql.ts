import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "../../apollo/server/schema";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export const schema = {
  typeDefs: typeDefs,
  resolvers,
};

const server = new ApolloServer<ApolloServer>(schema);
export default startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => ({
    req,
    res,
    session: await getSession({ req }),
  }),
});
