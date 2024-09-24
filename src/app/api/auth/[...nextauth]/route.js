import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "@/utils/auth/auth";
import connectDB from "@/utils/auth/connectDB";
import Client from "@/models/Client";

export const authOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        if (!email || !password) {
          throw new Error("لطفا ایمیل و رمز عبور معتبر وارد کنید");
        }

        const client = await Client.findOne({ email: email });

        if (!client) {
          throw new Error("لطفا ابتدا ثبت نام کنید");
        }

        const isValid = await verifyPassword(password, client.password);

        if (!isValid) {
          throw new Error("نام کاربری یا رمز عبور معتبر نیست");
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
