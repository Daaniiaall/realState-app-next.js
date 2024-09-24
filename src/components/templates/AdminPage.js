import AdminCard from "@/modules/AdminCard";
import styles from "@/templates/AdminPage.module.css";

function AdminPage({ profiles }) {
  // console.log(profiles)

  return (
    <div>
      {profiles.length ? null : <p className={styles.text}>هیچ آگهی در انتظار تایید وجود ندارد</p>}
      {profiles.map((profile) => (
        <AdminCard key={profile._id} data={JSON.parse(JSON.stringify(profile))} />
      ))}
    </div>
  );
}

export default AdminPage;
