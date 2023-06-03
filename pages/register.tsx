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
  if (status === "unauthenticated") {
    return (
      <div>
        <RegisterComponent providers={providers} />
      </div>
    );
  }
  if (status === "authenticated" && session) {
    router.push("/");
  }
};
export default Register;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
