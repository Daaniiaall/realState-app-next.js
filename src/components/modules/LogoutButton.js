"use client"

import styles from "@/modules/LogoutButton.module.css"
import { signOut } from "next-auth/react";

import { MdOutlineLogout } from "react-icons/md";

function LogoutButton() {
  return (
    <button onClick={()=>signOut()} className={styles.logout}>
        <MdOutlineLogout />
        خروج
    </button>
  )
}

export default LogoutButton