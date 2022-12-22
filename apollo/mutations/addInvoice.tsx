import { gql } from "@apollo/client";
import { CREATE_INVOICE_QUERY } from "../queries/invoice";

export const CREATE_INVOICE = gql`
  mutation CreateInvoiceMutation($type: Boolean!) {
    updateModalState(type: $type) @client
  }
`;

export const CreateInvoiceMutation = {
  updateModalState: (_: any, variables: any, { cache }: { cache: any }) => {
    const currentState = cache.readQuery({ query: CREATE_INVOICE_QUERY });
    const data = !currentState.newInvoice;
    cache.writeQuery({ query: CREATE_INVOICE_QUERY, data: { newInvoice: data } });
    return null
  },
};

