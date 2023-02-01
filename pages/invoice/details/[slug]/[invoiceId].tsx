import { GetServerSideProps, NextPage } from "next";
import { DetailIndex } from "../../../../components/component/invoice/detail/Detail.Index.component";
import { IInvoiceForm } from "../../../../type/type";
import {
  GET_INVOICE_DETAIL,
} from "../../../../apollo/client/queries/invoice";
import { client } from "../../../../apollo/client/Config";
import { getSession } from "next-auth/react";

const Home: NextPage<any> = ({ data }: { data: { invoice: IInvoiceForm } }) => {
  return <DetailIndex invoice={data.invoice} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req }: { query: any; req: any } = context;
  const session = await getSession({ req });

  const { invoiceId } = query;
  const request = await client.query({
    query: GET_INVOICE_DETAIL,
    variables: {
      _id: invoiceId,
    },
  });

  return {
    props: {
      data: {
        invoice: request.data.invoiceDetail,
      },
    },
  };
};
export default Home;
