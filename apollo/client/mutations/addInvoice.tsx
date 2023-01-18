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

export const DELETE_INVOICE_MUTATION = gql`
mutation DeleteInvoice($id:String){
  deleteInvoice(_id: $id) {
    _id
  }

}
`;






















