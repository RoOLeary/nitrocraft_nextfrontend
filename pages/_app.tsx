import type { AppProps } from 'next/app';
import '../styles/globals.css'
// import { ApolloProvider } from "@apollo/client";
// import client from "../apollo-client";
import { AnimatePresence } from 'framer-motion'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// pages/_app.js
import { SessionProvider } from "next-auth/react";

declare const window: any


function NitroBlogFrontend({ Component, pageProps:  { session, ...pageProps }}: AppProps): JSX.Element {

  return (
    <SessionProvider session={session}>  
        <Nav />
        <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
         <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
    </SessionProvider>
  );
}

export default NitroBlogFrontend
