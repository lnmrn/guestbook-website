import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [Google],
};

export const { auth, handlers } = NextAuth(authConfig);
