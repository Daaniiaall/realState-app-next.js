import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/auth/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const profiles = await Profile.find().select("-userId")
    // console.log(profile)
    return NextResponse.json({ data: profiles }, { status: 200 });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    // console.log(body);
    const { title, description, location, phone, price, realState, category, constructionDate, facilities, rules } = body;

    const session = await getServerSession(req);
    // console.log(session);

    if (!session) {
      return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید" }, { status: 401 });
    }

    const client = await Client.findOne({ email: session.user.email });
    if (!client) {
      return NextResponse.json({ error: "حساب کاربری یافت نشد!" }, { status: 404 });
    }

    if (!title || !description || !location || !phone || !price || !realState || !category || !constructionDate) {
      return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 400 });
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      category,
      constructionDate,
      facilities,
      rules,
      userId: new Types.ObjectId(client._id),
    });
    console.log(newProfile);

    return NextResponse.json({ message: "آگهی جدید اضافه شد" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const body = await req.json()
    const { _id , title, description, location, phone, price, realState, category, constructionDate, facilities, rules } = body;
    
    const session = await getServerSession(req)
    console.log(session)
    if(!session) {
      return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید" }, { status: 401 });
    }
    
    const client = await Client.findOne({ email: session.user.email });
    if(!client) {
      return NextResponse.json({ error: "حساب کاربری یافت نشد!" }, { status: 404 });
    }

    if (!title || !description || !location || !phone || !price || !realState || !category || !constructionDate) {
      return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 400 });
    }

    const profile = await Profile.findOne({_id : _id})
    if(!client._id.equals(profile.userId)) {
      return NextResponse.json({ error:"دسترسی شما به این آگهی محدود است" } , { status: 403 })
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.price = price;
    profile.realState = realState;
    profile.category = category;
    profile.constructionDate = constructionDate;
    profile.facilities = facilities;
    profile.rules = rules;

    profile.save()

    return NextResponse.json({message:"آگهی با موفقیت ویرایش شد"} , {status: 200})

  } catch (error) {
    console.log(error)
    return NextResponse.json({error:"مشکلی در سرور رخ داده است"} , {status: 500})
  }
}