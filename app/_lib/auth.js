import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getGuest } from "./data-service";

const authConfig = {
  providers: [Google],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },

    async jwt({ token }) {
      const guest = await getGuest(token.email);
      token.guestId = guest?.id ?? null;

      return token;
    },

    async session({ session, token }) {
      session.guestId = token.guestId;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
};

export const { auth, signIn, signOut, handlers } = NextAuth(authConfig);
