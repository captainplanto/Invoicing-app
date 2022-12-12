import  { GetServerSideProps, NextPage } from "next";
import invoices from "../content/dbseeding/data.json";
import { HomeIndex } from "../components/component/home/Home.index";
import { IInvoiceCard } from "../type/type";

const Home: NextPage = ({ data }: { data: { invoices: IInvoiceCard[]}}) => {
  return <HomeIndex invoices={data.invoices} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = invoices.map((invoice: IInvoiceCard) => {
    return invoice;
  });
  const response = request;

  return {
    props: {
      data: {
        invoices: response,
      },
    },
  };
};

export default Home;
