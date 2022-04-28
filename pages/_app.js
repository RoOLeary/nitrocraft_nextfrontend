import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Layout from "../components/Layout";
// pages/_app.js
import { SessionProvider } from "next-auth/react"

function NitroBlogFrontend({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default NitroBlogFrontend
