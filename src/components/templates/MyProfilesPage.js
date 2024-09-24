import DashboardCard from "@/modules/DashboardCard";
import styles from "@/templates/MyProfilesPage.module.css";

function MyProfilesPage({ profiles }) {
  // console.log(profiles);
  return (
    <div>
      {profiles.length ? null : <p className={styles.text}>آگهی ثبت شده وجود ندارد</p>}
      {profiles.map((profile) => (
        <DashboardCard key={profile._id} data={JSON.parse(JSON.stringify(profile))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
