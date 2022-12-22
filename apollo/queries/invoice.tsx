import { gql } from "@apollo/client";

export const CREATE_INVOICE_QUERY = gql`
  query GetInvoice {
    newInvoice @client
  }
`;
