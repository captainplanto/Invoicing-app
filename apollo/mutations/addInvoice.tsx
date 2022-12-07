import { gql, useMutation } from "@apollo/client";

export const CREATE_INVOICE = gql`
  mutation CreateInvoice($type: String!) {
    createInvoice(type: $type) {
      id
      type
    }
  }
`;



/*export const CounterMutation = {
  updateCount: (_: any, variables: any, { cache }: { cache: any }) => {
    const currentState = cache.readQuery({ query: GET_COUNTER });
    const data = currentState.testData + variables.payload;
    cache.writeQuery({ query: GET_COUNTER, data: { testData: data } });
    return null;
  },
};
*/