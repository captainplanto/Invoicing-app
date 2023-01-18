import { gql } from "@apollo/client";
export const GET_ALL_INVOICE_BY_USER = gql`
  query UserInvoices($_id: String) {
    userInvoices(_id: $_id) {
      _id
      clientName
      createdAt
      status
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
      userAddress
      userRegion
      userPostCode
      userCountry
      clientEmail
      clientPostCode
      clientRegion
      clientCountry
      clientName
      paymentPlan
      createdAt
      updatedAt
      status
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



