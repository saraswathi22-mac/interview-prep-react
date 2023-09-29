import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GitHubAuth } from "~/interface";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider(<GitHubAuth>{
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
