import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
export const authOptions: NextAuthOptions = {
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID as string,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        // }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt',
     },
    pages: {
      signIn: "/auth/login",
  },

}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };