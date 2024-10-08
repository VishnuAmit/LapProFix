import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import connection from "@/db/config";
import User from "@/models/userModels";
import crypto from 'crypto';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: { params: { prompt: "consent" } },
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            });

            if (sessionUser) {
                session.user.id = sessionUser._id.toString();
            }

            return session;
        },
        async signIn({ profile }){
            try {
                await connection();

                const isUserExists = await User.findOne({
                    email: profile.email
                });

                if (!isUserExists) {
                    // Generate a random password for OAuth users
                    const randomPassword = crypto.randomBytes(16).toString('hex');

                    await User.create({
                        email: profile.email,
                        name: profile.name,
                        password: randomPassword,  // Set the random password here
                    });
                }

                return true; 
            } catch (err) {
                console.log(err);
                return false; 
            }
        }
    },
    
});

export { handler as GET, handler as POST };
