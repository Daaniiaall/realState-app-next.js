"use client"
import { MdKeyboardBackspace } from "react-icons/md";
import styles from '@/modules/BackButton.module.css'
import { useRouter } from 'next/navigation'

function BackButton() {

    const router = useRouter()

  return (
    <button className={styles.button} onClick={() => router.back()}>بازگشت به صفحه قبل <MdKeyboardBackspace /></button>
  )
}

export default BackButton