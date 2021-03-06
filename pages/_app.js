import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// pages/_app.js
import { SessionProvider } from "next-auth/react";


function NitroBlogFrontend({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Nav />
          <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default NitroBlogFrontend
