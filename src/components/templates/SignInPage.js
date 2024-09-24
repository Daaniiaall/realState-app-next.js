"use client";

import styles from "@/templates/SignUpPage.module.css";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { signIn } from "next-auth/react";

import Loader from "@/modules/Loader";

import toast, { Toaster } from "react-hot-toast";

import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";


function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loader, setLoader] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const router = useRouter();

  const signInHandler = async (e) => {
    e.preventDefault();

    setLoader(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoader(false);

    if (res.error) {
      return toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h2>فرم ورود</h2>
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

        {loader ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signInHandler}>
           ورود
          </button>
        )}
      </form>

      <p>
        حساب کاربری ندارید؟<Link href="/signup">ثبت نام</Link>
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

export default SignInPage;
