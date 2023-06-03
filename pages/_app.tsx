import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { client } from "../apollo/client/Config";
import { SSRProvider } from "react-aria";
import { Session } from "next-Auth";
import { darkTheme, lightTheme } from "../styles/theme";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: any;
}>) {
  const { theme } = useTheme();

  return (
    <NextThemesProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <NextUIProvider>
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
      </NextUIProvider>
    </NextThemesProvider>
  );
}
