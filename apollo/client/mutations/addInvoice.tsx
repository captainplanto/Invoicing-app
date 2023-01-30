import { gql } from "@apollo/client";
export const CREATE_NEW_INVOICE_MUTATION = gql`
  mutation CreateNewInvoice(
    $userAddress: IAddress
    $clientAddress: IAddress
    $invoiceState: String
    $invoiceDate: String
    $paymentPlan: String
    $description: String
    $items: InputItems
    $author: String
  ) {
    createInvoice(
      createNewInvoice: {
        clientAddress: $clientAddress
        userAddress: $userAddress
        invoiceDate: $invoiceDate
        items: $items
        paymentPlan: $paymentPlan
        author: $author
        invoiceState: $invoiceState
        description: $description
      }
    ) {
      description
      invoiceDate
      invoiceState
      paymentPlan
      author
      clientAddress {
        street
        postCode
        country
        city
        name
        email
      }
      userAddress {
        street
        postCode
        country
        city
      }
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

export const DELETE_INVOICE_MUTATION = gql`
  mutation DeleteInvoice($id: String) {
    deleteInvoice(_id: $id) {
      _id
    }
  }
`;

export const MARK_INVOICE_AS_PAID_MUTATION = gql`
  mutation MarkInvoiceAsPaid($id: String, $invoiceState: String) {
    markInvoiceAsPaid(_id: $id, invoiceState: $invoiceState) {
      _id
      invoiceState
    }
  }
`;
