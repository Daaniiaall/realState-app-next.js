"use client"

import styles from "@/modules/ShareButton.module.css";

import { useEffect, useState } from "react";

import { IoShareSocialOutline } from "react-icons/io5";

import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

function ShareButton() {

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url} onCopy={() => {toast.success("آدرس این صفحه کپی شد")}}>
      <div className={styles.share}>
        <IoShareSocialOutline />
        <button>اشتراک گذاری</button>
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            color: "#713200",
            fontWeight: "400",
          },
        }}
      />
      </div>
    </CopyToClipboard>
    
  );
}

export default ShareButton;
