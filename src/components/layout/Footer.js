import styles from "@/layout/Footer.module.css"

import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>Developed By <a href="https://github.com/Daaniiaall" target="_blank" rel="noreferrer">Danial Momenpour</a> with <FaHeart /> </p>
    </div>
  )
}

export default Footer