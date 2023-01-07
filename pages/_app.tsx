import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { client } from "../apollo/client/Config";
import { SSRProvider } from "react-aria";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, lightTheme } from "../theme/Theme";
import { Session } from "next-Auth";
export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
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
    </NextThemesProvider>
  );
}
