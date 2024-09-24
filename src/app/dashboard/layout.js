import DashboardSidebar from "@/layout/DashboardSidebar";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Client from "@/models/Client";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  // console.log(session)
  if (!session) {
    redirect("/signin");
  }

  const client = await Client.findOne({ email: session.user.email });
  // console.log(client)
  return (
    <DashboardSidebar email={session.user.email} role={client.role} >{children}</DashboardSidebar>
  );
}

export default DashboardLayout;
