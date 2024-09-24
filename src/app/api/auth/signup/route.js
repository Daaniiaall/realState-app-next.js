import Client from "@/models/Client";
import connectDB from "@/utils/auth/connectDB";
import { hashPassword } from "@/utils/auth/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { email, password } = body;
    console.log({ email, password });

    if (!email || !password) {
      return NextResponse.json(
        { message: "لطفا ایمیل و رمز معتبر وارد کنید" , status: 422  },
      );
    }

    const existingClient = await Client.findOne({ email: email });
    if (existingClient) {
      return NextResponse.json(
        { message: "این نام کاربری قبلا ثبت نام شده است" , status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newClient = Client.create({ email: email, password: hashedPassword });
    console.log(newClient);

    return NextResponse.json({ message: "حساب کاربری ایجاد شد" , status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "مشکلی در سرور رخ داده است" , status: 500}
    );
  }
}
