import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/User"


export const options : NextAuthOptions = {

  providers: [
    GoogleProvider({
      clientId:process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.NEXT_GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
          email: { label: "email", type: "text", placeholder: "jsmith@gmail.com" },
          password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
          await connect();
          if (!credentials) {
              return null;
          }
          const email = credentials.email;
          const password = credentials.password;
          // Add logic here to look up the user from the credentials supplied
          const user = await User.findOne({ email });

          if (!user) {
              const obj = { email: email, password: password };
              const newUser = new User(obj);
              let userDb = await newUser.save();
              console.log(userDb);
              return {
                  id: userDb._id,
                  email: userDb.email,
              }
          } else {
              //TODO:: Make this safer, encrypt passwords
              if (user.password !== password) {
                  return null
              }
              // User is authenticated
              return {
                  id: user._id,
                  email: user.username,
              }
          }
      }
  }),
    
  ],
  secret:process.env.NEXT_AUTH_SECRET,
  session:{
    strategy:'jwt',
    maxAge:30*24*60*60
  },
  // jwt:{
  //   encryption : true
  // }
}
