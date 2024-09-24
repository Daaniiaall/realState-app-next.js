"use client"
import styles from "@/layout/Header.module.css";
import { FiLogIn } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

import Link from "next/link";

import { useSession } from "next-auth/react";

function Header() {

  const {data , status} = useSession()
  // console.log({data,status})

  return (
    <div className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/"> صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        {status === "authenticated" ? (
          <Link href="/dashboard">
            <FaRegUserCircle />
            <span>پنل کاربری</span>
          </Link>
        ) : (
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
