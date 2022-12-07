import { gql } from "@apollo/client";

export const GET_INVOICES = gql`
  query GetInvoices {
    locations {
      id
      name
      description
      photo
    }
  }
`;