import { connectToDb } from '@database/connection';
import { create_user, fetch_user } from '@service/userService';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await fetch_user({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDb();
            
                // Check if user already exists
                const userExists = await fetch_user({ email: profile.email });
                
                // Create user if user doesn't exist
                if (!userExists) {
                    await create_user({
                        email: profile.email,
                        image: profile.image,
                        username: profile.name
                    })
                }
                
                return true;
            } catch (error) {
                console.log("Error while trying to sign in:", error);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };