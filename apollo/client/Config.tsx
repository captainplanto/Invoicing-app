import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { CreateInvoiceMutation } from "./mutations/addInvoice";
import { DATA_ALL_INVOICE_BY_USER, GET_USERS_QUERY } from "./queries/invoice";

const cache: InMemoryCache = new InMemoryCache();
interface IUser {
  _id: any;
  email: string;
  name: string;
  image: string;
}
interface IInitialState {
  users: IUser[];
  invoices: number;
}

export const client = new ApolloClient({
  cache: cache,
  link: new HttpLink({uri: "http://localhost:3000/api/graphql"}),
  credentials: "true",
  resolvers: {
    Mutation: {
      ...CreateInvoiceMutation,
    },
  },
  connectToDevTools: true,
});

const initialState: IInitialState = {
  users: [],
  invoices: 0,
};

cache.writeQuery({
  query: GET_USERS_QUERY,
  data: initialState,
});

cache.writeQuery({
  query: DATA_ALL_INVOICE_BY_USER,
  data: initialState,
});
