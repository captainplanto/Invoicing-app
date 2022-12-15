import { GetServerSideProps, NextPage } from "next";
import { DetailIndex } from "../../../../components/component/invoice/detail/Detail.Index.component";
import { IDetailsCardInvoice, IInvoiceForm } from "../../../../type/type";
import invoices from "../../../../content/dbseeding/data.json";

const Home: NextPage<any> = ({ data }: { data: { invoice: IInvoiceForm } }) => {
  return <DetailIndex invoice={data.invoice} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query }: { query: any } = context;
  const { invoiceId } = query;
  //try {
  const invoice = invoices.find((invoice) => {
    return invoice.id === invoiceId;
  });
  //} catch (error) {
  //console.log(error);
  //}

  return {
    props: {
      data: {
        invoice: invoice,
      },
    },
  };
};
export default Home;
