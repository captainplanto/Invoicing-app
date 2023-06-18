import { GetServerSideProps } from "next";
import { RegisterComponent } from "../components/component/register/Register.component";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";

const Register = ({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading" && !session) {
    return (
      <div>
        {/* <Progress indeterminated value={50} color="gradient" size="sm" /> */}
        <p>Youre signing in...</p>
      </div>
    );
  }
  if (status === "authenticated" && session) {
    router.push("/");
  }
  if (status === "unauthenticated") {
    return (
      <div>
        <RegisterComponent providers={providers} />
      </div>
    );
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
export default Register;
