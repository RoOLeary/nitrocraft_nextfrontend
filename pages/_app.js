import '../styles/globals.css'
// import { ApolloProvider } from "@apollo/client";
// import client from "../apollo-client";
import { AnimatePresence } from 'framer-motion'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// pages/_app.js
import { SessionProvider } from "next-auth/react";


function NitroBlogFrontend({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>  
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
