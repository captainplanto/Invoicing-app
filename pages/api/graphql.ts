import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { ApolloServer } from "@apollo/server";
import { resolvers, typeDefs } from "../../apollo/server/schema";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server";


export const schemas = {
  typeDefs: typeDefs,
  resolvers,
};

const server: any = new ApolloServer(schemas);
export default startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => ({
    req,
    res,
    session: await getSession({ req }),
  }),
});
