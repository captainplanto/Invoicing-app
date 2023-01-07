import { gql } from "@apollo/client";

export const CREATE_NEW_INVOICE_MUTATION = gql`
  mutation CreateNewInvoice(
    $userAddress: String
    $userCountry: String
    $userRegion: String
    $userPostCode: Int
    $clientName: String
    $clientEmail: String
    $clientAddress: String
    $status: String
    $clientCountry: String
    $clientRegion: String
    $clientPostCode: Int
    $invoiceDate: String
    $paymentPlan: String
    $description: String
    $items: InputItems
    $author: String
  ) {
    createInvoice(
      createNewInvoice: {
        clientAddress: $clientAddress
        clientCountry: $clientCountry
        clientEmail: $clientEmail
        clientName: $clientName
        clientPostCode: $clientPostCode
        clientRegion: $clientRegion
        invoiceDate: $invoiceDate
        items: $items
        paymentPlan: $paymentPlan
        userAddress: $userAddress
        userCountry: $userCountry
        userPostCode: $userPostCode
        userRegion: $userRegion
        author: $author
        status: $status
        description: $description
      }
    ) {
      clientAddress
      clientCountry
      clientEmail
      clientName
      clientPostCode
      clientRegion
      description
      invoiceDate
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
      status
      paymentPlan
      userAddress
      userCountry
      userPostCode
      userRegion
      author
    }
  }
`;

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

export const DATA_ALL_INVOICE_BY_USER = gql`
  query GET_INVOICES {
    invoices @client
  }
`;

export const GET_USERS_QUERY = gql`
  query GET_USERS {
    users {
      _id
      name
      email
      image
    }
  }
`;
