import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
//import { SessionProvider } from "next-auth/react";
import { SSRProvider } from "@react-aria/ssr";
import { client } from "../apollo/Config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SSRProvider>
  );
}

/*
 </SSRProvider> 
    //    session={pageProps.session}
     //   refetchInterval={0}
     //   refetchOnWindowFocus={true}
    //  />

  //  </SessionProvider>

*/
