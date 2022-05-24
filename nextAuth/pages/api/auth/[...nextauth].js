import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
require('dotenv').config()


export default NextAuth({
  providers: [
    // OAuth authentication providers...
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ]
})