import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Usuario",
          type: "username",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      url: '/search',
      async authorize(credentials) {
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        if (
          credentials.username === "admin" &&
          credentials.password === "123456"
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
        return session;
      },
    async redirect({ url, baseUrl }) {
      const urlf = '/search';
      if (url.startsWith("/")) return `${baseUrl}${urlf}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
