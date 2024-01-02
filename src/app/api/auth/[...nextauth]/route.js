import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { getSession } from 'next-auth/react'; // Update import
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import mongoose from 'mongoose'; // Import mongoose
import clientPromise from '@/libs/mongoConnect'; // Update import
import UserInfo from '@/models/UserInfo';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export const authOptions = {
  secret: process.env.SECRET_AMIR,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_AMIR,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_AMIR,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'test@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL_AMIR);
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
};

const isAdmin = async () => {
  const session = await getSession({ req });
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
};

export default isAdmin;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
