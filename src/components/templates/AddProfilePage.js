"use client";

import { useEffect, useState } from "react";

import styles from "@/templates/AddProfilePage.module.css";

import TextInput from "@/modules/TextInput";
import RadioList from "@/modules/RadioList";
import TextList from "@/modules/TextList";

import toast, { Toaster } from "react-hot-toast";

import CustomDatePicker from "@/modules/CustomDatePicker";
import Loader from "@/modules/Loader";
import { useRouter } from "next/navigation";

function AddProfilePage({data}) {
  // console.log(data)

  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    category: "",
    constructionDate: new Date(),
    facilities: [],
    rules: [],
  });

  const [loader, setLoader] = useState(false);

  useEffect( () => { 

    if(data){
      setProfileData(data)
    }

  } , [])
  
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault()

    setLoader(true)
    
    const res = await fetch("/api/profile" , {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {"Content-Type" : "application/json"}
    })

    setLoader(false)

    const data = await res.json()

    if(data.error) {
      return toast.error(data.error);
    } else {
      toast.success(data.message);

      setProfileData({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        category: "",
        constructionDate: new Date(),
        facilities: [],
        rules: [],
      })
      
      return ;
    }
  }

  const editHandler = async () => {

    setLoader(true)

    const res = await fetch("/api/profile" , {
      method:"PATCH" ,
      body:JSON.stringify(profileData) ,
      headers: {"Content-Type" : "application/json"}
    })

    const result = await res.json()

    setLoader(false)

    if(result.error) { 
      return toast.error(result.error)
    } else {
      router.refresh()
      return toast.success(result.message)
    }

  }

  return (
    <form className={styles.container}>
      {data ? (<h3>ویرایش آگهی</h3>) : (<h3>ثبت آگهی</h3>)}
      <TextInput title="عنوان آگهی" name="title" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="توضیحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true} />
      <TextInput title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="شماره تماس" name="phone" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="قیمت" name="price" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="گروه مشاور املاک" name="realState" profileData={profileData} setProfileData={setProfileData} />

      <RadioList profileData={profileData} setProfileData={setProfileData} />

      <TextList title="امکانات رفاهی" type="facilities" profileData={profileData} setProfileData={setProfileData}  />
      <TextList title="قوانین" type="rules" profileData={profileData} setProfileData={setProfileData} />

      <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />

      {loader ? 
        (<Loader />) : 
        data ? 
        (<button onClick={editHandler} className={styles.submit}>ویرایش</button>) : 
        (<button type="submit" onClick={submitHandler} className={styles.submit}>ثبت</button>) 
      }
      
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            color: "#713200",
            fontWeight: "400",
          },
        }}
      />
    </form>
  );
}

export default AddProfilePage;
