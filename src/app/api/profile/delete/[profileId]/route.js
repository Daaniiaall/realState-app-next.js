import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/auth/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    console.log(context);

    await connectDB();

    const id = context.params.profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const client = await Client.findOne({ email: session.user.email });
    if (!client) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد!" },
        { status: 404 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    if (!client._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود است" },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی مورد نظر حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
        { error: " مشکلی در سرور رخ داده است" },
        { status: 500 }
      );
  }
}
