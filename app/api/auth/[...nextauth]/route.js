import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connection from "@/db/config";
import User from "@/models/userModels";
import bcrypt from "bcrypt";
import crypto from "crypto";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { prompt: "consent" } },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        await connection();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
    async signIn({ user, account, profile, credentials }) {
      if (account?.provider === "google") {
        try {
          await connection();

          const isUserExists = await User.findOne({
            email: profile?.email,
          });

          if (!isUserExists) {
            // Generate a random password for OAuth users
            const randomPassword = crypto.randomBytes(16).toString("hex");
            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            await User.create({
              email: profile?.email,
              name: profile?.name,
              password: hashedPassword, 
            });
          }

          return true;
        } catch (err) {
          console.error("Error in Google signIn callback:", err);
          return false;
        }
      } else if (account?.provider === "credentials") {
        // CredentialsProvider already handled authorization
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/auth/signin", 
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
