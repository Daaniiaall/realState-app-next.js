import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/auth/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  console.log(context);
  try {
    await connectDB();

    const id = context.params.profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شود" },
        { status: 403 }
      );
    }

    const client = await Client.findOne({ email: session.user.email });
    if (!client) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    if(client.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی شما محدود شده است" }, { status: 403 });
    }

    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    profile.save();

    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شود" },
        { status: 403 }
      );
    }

    const client = await Client.findOne({ email: session.user.email });
    if (!client) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    await Profile.findOneAndDelete({ _id: id });

    return NextResponse.json({ message: "آگهی حذف شد" }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
  }
}
