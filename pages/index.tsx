import { GetServerSideProps } from "next";
import { HomeIndex } from "../components/component/home/HomeIndex";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { useRouter } from "next/router";
import { RegisterComponent } from "../components/component/register/Register.component";

const Home = ({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    return <RegisterComponent providers={providers} />;
  }

  if (status === "authenticated" && session) {
    return <HomeIndex />;
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
