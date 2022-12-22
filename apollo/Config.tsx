import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { CreateInvoiceMutation } from "./mutations/addInvoice";
import { CREATE_INVOICE_QUERY } from "./queries/invoice";

const cache: InMemoryCache = new InMemoryCache();
interface IInitialState {
  newInvoice: boolean;
}

export const client = new ApolloClient({
  cache: cache,
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  resolvers: {
    Mutation: {
      ...CreateInvoiceMutation,
   },
 },
  connectToDevTools: true,
});

const initialState: IInitialState = {
  newInvoice: false,
};

cache.writeQuery({
  query: CREATE_INVOICE_QUERY,
  data: initialState,
});
