"use client"

import styles from "@/modules/AdminCard.module.css";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({ data }) {
  // console.log(data.id);

  const router = useRouter()
  useEffect(()=>{
    router.refresh()
  } , [])

  const DetailsHandler = async () => {
    router.push(`/admin/${data._id}`)
  }

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${data._id}`,{ method: "PATCH" } ) 
    const result = await res.json()
    if(result.error){
      return toast.error(result.error)
    } else {
      toast.success(result.message)
      router.refresh()
      return;
    }
  }
  const removeHandler = async () => {
    const res = await fetch(`/api/profile/publish/${data._id}`,{ method: "DELETE" } ) 
    const result = await res.json()
    if(result.error){
      return toast.error(result.error)
    } else {
      toast.success(result.message)
      router.refresh()
      return;
    }
  }

  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className={styles.details}>
        <span>{data.location}</span>
        <span>{`${sp(data.price)}  تومان`}</span>
      </div>
      <div>
        <button onClick={DetailsHandler}>جزئیات آگهی</button>
        <button onClick={publishHandler}>انتشار آگهی</button>
        <button onClick={removeHandler}>حذف آگهی</button>
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

export default AdminCard;
