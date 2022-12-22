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

/*
const Loading = styled.div`
  .signing-in {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

if (status === "loading" && !session) {
    return (
      <Loading>
        <div className="signing-in">
          <Progress indeterminated value={50} color="gradient" size="sm" />
          <p>You are signing in...</p>
        </div>
      </Loading>
    );
  }

*/
