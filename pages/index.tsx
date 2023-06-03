import { GetServerSideProps } from "next";
import { HomeIndex } from "../components/component/home/HomeIndex";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from "next-auth/react";
import { RegisterComponent } from "../components/component/register/Register.component";
import { BuiltInProviderType } from "next-auth/providers";

const Home = ({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) => {
  const { data: session, status } = useSession();

  if (status === "authenticated" && session) {
    return <HomeIndex />;
  }
  if (status === "unauthenticated" && !session) {
    return <RegisterComponent providers={providers} />;
  }
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};

export default Home;
