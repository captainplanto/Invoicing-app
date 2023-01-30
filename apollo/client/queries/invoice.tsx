import { gql } from "@apollo/client";
export const GET_ALL_INVOICE_BY_USER = gql`
  query UserInvoices($_id: String) {
    userInvoices(_id: $_id) {
      _id
      clientAddress {
        name
      }
      createdAt
      invoiceState
      items {
        newItem {
          _id
          name
          quantity
          price
          total
        }
        subTotal
      }
    }
  }
`;

export const GET_INVOICE_DETAIL = gql`
  query UserInvoices($_id: String) {
    invoiceDetail(_id: $_id) {
      _id
      userAddress {
        street
        postCode
        country
        city
      }
      clientAddress {
        street
        postCode
        country
        city
        name
        email
      }
      paymentPlan
      createdAt
      updatedAt
      invoiceState
      items {
        newItem {
          _id
          name
          quantity
          price
          total
        }
        subTotal
      }
    }
  }
`;
