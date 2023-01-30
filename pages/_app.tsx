import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { client } from "../apollo/client/Config";
import { SSRProvider } from "react-aria";
import { Session } from "next-Auth";
import { ThemeProvider } from "next-themes";
export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <ThemeProvider>
      <SSRProvider>
        <SessionProvider
          session={pageProps.session}
          refetchInterval={0}
          refetchOnWindowFocus={true}
        >
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </SessionProvider>
      </SSRProvider>
    </ThemeProvider>
  );
}
