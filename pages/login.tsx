import { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

import { RegisterComponent } from "../components/component/register/Register.component";

const Login = ({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}) => {
  return <RegisterComponent providers={providers} />;
};

export default Login;
