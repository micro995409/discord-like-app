import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';
import dbConnect from './db';
import User from '../models/User';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        await dbConnect();
        type UserRecord = {
          _id: unknown;
          username: string;
          email: string;
          passwordHash: string;
        };

        const user = (await User.findOne({ email: credentials.email }).lean()) as UserRecord | null;
        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!isValid) {
          return null;
        }

        return {
          id: String(user._id),
          name: user.username,
          email: user.email
        };
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
};

export default NextAuth(authOptions);
