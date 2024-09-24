import styles from "@/templates/DashboardPage.module.css";

import Client from "@/models/Client";
import connectDB from "@/utils/auth/connectDB";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function DashboardPage() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const client = await Client.findOne({ email: session.user.email });
  // console.log(client.createdAt)
  const date = client.createdAt.toLocaleDateString()
  
  return (
    <div className={styles.container}>
      <h3>سلام👋</h3>
      <p>آگهی خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <span>تاریخ عضویت:</span>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default DashboardPage;
