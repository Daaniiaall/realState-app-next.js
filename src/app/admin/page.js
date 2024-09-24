import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Client from "@/models/Client";
import Profile from "@/models/Profile";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/templates/AdminPage";

async function ADMIN() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  const client = await Client.findOne({ email: session.user.email });
  // console.log(client)
  if (client.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSidebar email={session.user.email} role={client.role}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  );
}

export default ADMIN;
