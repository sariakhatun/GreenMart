import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
 CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
  console.log("authorize received:", credentials);
  try {
    const user = await loginUser(credentials);
    console.log("authorize user:", user);
    return user || null;
  } catch (err) {
    console.error("authorize error:", err);
    return null;
  }
}

})

],
pages:{
  signIn : '/login'
}

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }