import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getGuest } from "./data-service";

const authConfig = {
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    async jwt({ token, user }) {
      if (user) {
        const guest = await getGuest(user.email);
        token.guestId = guest?.id ?? null;
      }
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
