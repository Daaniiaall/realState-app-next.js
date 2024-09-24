"use client";

import styles from "@/modules/DashboardCard.module.css";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Card from "@/modules/Card";

import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import toast, { Toaster } from "react-hot-toast";

function DashboardCard({ data }) {
  // console.log(data)

  const router = useRouter();

  useEffect( () => {
    router.refresh()
  } , [])

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });

    const result = await res.json();

    if (result.error) {
      return toast.error(result.error);
    } else {
      router.refresh();
      return toast.success(result.message);
    }
  };

  return (
    <div className={styles.container}>
      <Card data={data} />

      <div className={styles.actions}>
        <button className={styles.edit} onClick={editHandler}>
          ویرایش
          <FaRegEdit />
        </button>
        <button className={styles.delete} onClick={deleteHandler}>
          حذف
          <AiFillDelete />
        </button>
      </div>

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
  );
}

export default DashboardCard;
