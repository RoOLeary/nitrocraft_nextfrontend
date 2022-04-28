import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://nitroblog.nitro/api",
    cache: new InMemoryCache(),
});

export default client;