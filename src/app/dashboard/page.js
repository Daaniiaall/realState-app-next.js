import Client from "@/models/Client";
import connectDB from "@/utils/auth/connectDB";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import DashboardPage from "@/templates/DashboardPage";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const client = await Client.findOne({ email: session.user.email });
  // console.log(client.createdAt)
  const createdAt = client.createdAt;

  return <DashboardPage createdAt={createdAt} />;
}

export default Dashboard;
