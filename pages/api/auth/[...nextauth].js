import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    theme: {
        colorScheme: "auto", // "auto" | "dark" | "light"
        brandColor: "#ffffff", // Hex color code
        logo: "" // Absolute URL to image
    } 
}

export default (req, res) => NextAuth(req, res, options)