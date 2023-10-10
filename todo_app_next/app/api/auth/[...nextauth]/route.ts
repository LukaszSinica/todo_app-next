import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(userCredentials => {
                        if (userCredentials.user) {
                            return userCredentials.user
                        }
                        return null
                    }).catch(error => (console.log(error)))
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
})
  
export { handler as GET, handler as POST }