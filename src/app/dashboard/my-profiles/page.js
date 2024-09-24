import connectDB from "@/utils/auth/connectDB";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Client from "@/models/Client";

import MyProfilesPage from "@/templates/MyProfilesPage";
import { redirect } from "next/navigation";

async function MyProfiles() {
  await connectDB();

  const session = await getServerSession(authOptions);
  //   console.log(session);

  if (session) {
    redirect("/dashboard/my-profiles");
  }

  const [client] = await Client.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);

  //   console.log(client.profiles);

  return <MyProfilesPage profiles={client.profiles} />;
}

export default MyProfiles;
