import styles from "@/layout/DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";

import Link from "next/link";

import LogoutButton from "@/modules/LogoutButton";

async function DashboardSidebar({ children, email, role }) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.navbar}>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <button>خروج
          <MdOutlineLogout />
        </button>
      </div> */}

      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? <p className={styles.role}>ADMIN</p> : null}
        <p>{email}</p>
        <span></span>
        <div className={styles.links}>
          <Link href="/dashboard">حساب کاربری</Link>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
          <Link href="/dashboard/add">ثبت آگهی</Link>
          {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
          <LogoutButton />
        </div>
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
