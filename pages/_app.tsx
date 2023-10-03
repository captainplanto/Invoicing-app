import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { client } from "../apollo/client/Config";
import { SSRProvider } from "@react-aria/ssr";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: any;
}>) {
  return (
    <>
        <NextUIProvider>
          <NextThemesProvider
            attribute="class"
            value={{
              light: lightTheme,
              dark: darkTheme,
            }}
          >
            <SessionProvider
              session={pageProps.session}
              refetchInterval={0}
              refetchOnWindowFocus={true}
            >
              <ApolloProvider client={client}>
                <Component {...pageProps} />
              </ApolloProvider>
            </SessionProvider>
          </NextThemesProvider>
        </NextUIProvider>
    </>
  );
}
//<SSRProvider>  </SSRProvider>