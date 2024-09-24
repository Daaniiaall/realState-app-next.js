"use client";

import styles from "@/templates/SignUpPage.module.css";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

import toast, { Toaster } from "react-hot-toast";

import Loader from "@/modules/Loader";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [loader, setLoader] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const router = useRouter();

  const signUpHandler = async (e) => {
    e.preventDefault();

    setLoader(true);

    if (password !== rePassword) {
      setLoader(false);
      return toast.error("رمز عبور و تکرار آن برابر نیست!");
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    setLoader(false);

    const data = await res.json();

    if (data.status === 201) {
      router.push("/signin");
    } else {
      return toast.error(data.message);
    }
  };

  return (
    <div className={styles.form}>
      <h2>فرم ثبت نام</h2>
      <form>
        <label htmlFor="email">ایمیل:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">رمز عبور:</label>

        <div className={styles.input__form}>
          <input
            id="password"
            type={visibility ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div onClick={() => setVisibility(!visibility)}>
            {visibility ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
          </div>
        </div>

        <label htmlFor="rePassword">تکرار رمز عبور:</label>

        <div className={styles.input__form}>
          <input
            id="rePassword"
            type={visibility ? "text" : "password"}
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />

          <div onClick={() => setVisibility(!visibility)}>
            {visibility ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
          </div>
        </div>

        {loader ? (
         <Loader />
        ) : (
          <button type="submit" onClick={signUpHandler}>
            ثبت نام
          </button>
        )}
      </form>

      <p>
        حساب کاربری دارید؟<Link href="/signin">ورود</Link>
      </p>

      <Toaster
        toastOptions={{
          style: {
            border: "2px solid red",
            padding: "16px",
            color: "#713200",
            fontWeight: "400",
          },
        }}
      />
    </div>
  );
}

export default SignUpPage;
