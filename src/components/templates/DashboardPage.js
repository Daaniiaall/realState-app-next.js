import styles from "@/templates/DashboardPage.module.css";

function DashboardPage({ createdAt }) {
  return (
    <div className={styles.container}>
      <h3>سلام👋</h3>
      <p>آگهی خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <span>تاریخ عضویت:</span>
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
      </div>
    </div>
  );
}

export default DashboardPage;
