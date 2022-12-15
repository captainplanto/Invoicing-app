import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
//import { SessionProvider } from "next-auth/react";
import { client } from "../apollo/Config";
import { SSRProvider } from "react-aria";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { darkTheme, lightTheme } from "../theme/Theme";
export default function App({ Component, pageProps }: AppProps) {
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
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SSRProvider>
    </NextThemesProvider>
  );
}

/*
 </SSRProvider> 
    //    session={pageProps.session}
     //   refetchInterval={0}
     //   refetchOnWindowFocus={true}
    //  />

  //  </SessionProvider>
    themes={[lightTheme, darkTheme]}
*/
