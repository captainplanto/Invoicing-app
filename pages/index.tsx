import { GetServerSideProps, NextPage } from "next";
import { HomeIndex } from "../components/component/home/Home.index";
import { IInvoiceCard } from "../type/type";
import {ClientSafeProvider,getProviders,getSession,LiteralUnion,useSession} from "next-auth/react";
import { RegisterComponent } from "../components/component/register/Register.component";
import { BuiltInProviderType } from "next-auth/providers";
import { GET_ALL_INVOICE_BY_USER } from "../apollo/client/queries/invoice";
import { client } from "../apollo/client/Config";

const Home = ({data}: {
  data: {
    invoices: IInvoiceCard[];
    providers: Record<
      LiteralUnion<BuiltInProviderType, string>,
      ClientSafeProvider
    > | null;
  };
}) => {
  const { data: session, status } = useSession();
  if (status === "authenticated" && session) {
    return <HomeIndex invoices={data.invoices} />;
  }
  if (status === "unauthenticated" && !session) {
    return <RegisterComponent providers={data.providers} />;
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  const request = await client.query({
    query: GET_ALL_INVOICE_BY_USER,
    variables: {
     _id: session?.id,
    },
  });
 
  return {
    props: {
      data: {
        invoices: request.data.userInvoices,
        providers: providers,
      },
    },
  };
};

export default Home;
