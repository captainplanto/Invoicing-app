import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ReactiveVar,
  makeVar,
} from "@apollo/client";
import { IInvoiceCard, IInvoiceForm } from "../../type/type";

export interface IInvoiceProps {
  invoices: IInvoiceCard[];
  invoiceDetails: IInvoiceForm | undefined;
  showSnackBar: boolean;
  snackbarMessage: string;
  invoiceStatus: string;
}
const invoiceInitialState: IInvoiceProps = {
  invoices: [],
  invoiceDetails: undefined,
  invoiceStatus: "pending",
  showSnackBar: false,
  snackbarMessage: "",
};
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        invoice: {
          read() {
            return invoiceVar();
          },
        },
      },
    },
  },
});
export const client = new ApolloClient({
  cache: cache,
  link: new HttpLink({ uri: "http://localhost:3000/api/graphql" }),
  credentials: "true",
  connectToDevTools: true,
});

export const invoiceVar: ReactiveVar<IInvoiceProps> =
  makeVar<IInvoiceProps>(invoiceInitialState);
