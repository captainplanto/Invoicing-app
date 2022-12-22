import { GetServerSideProps, NextPage } from "next";
import invoices from "../content/dbseeding/data.json";
import { HomeIndex } from "../components/component/home/Home.index";
import { IInvoiceCard } from "../type/type";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from "next-auth/react";
import { RegisterComponent } from "../components/component/register/Register.component";
import { BuiltInProviderType } from "next-auth/providers";

const Home: NextPage<any> = ({
  data,
}: {
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
  const providers = await getProviders();
  const request = invoices.map((invoice) => {
    return invoice;
  });
  const response = request;

  return {
    props: {
      data: {
        invoices: response,
        providers: providers,
      },
    },
  };
};

export default Home;
