import "../styles/globals.css";
import type { AppProps } from "next/app";
//import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

//import { SSRProvider } from "@react-aria/ssr";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
   // <SSRProvider>
    //  <SessionProvider
    //    session={pageProps.session}
     //   refetchInterval={0}
     //   refetchOnWindowFocus={true}
    //  >
       
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
       
    //  </SessionProvider>
   // </SSRProvider>
  );
}
