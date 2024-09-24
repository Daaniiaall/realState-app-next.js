import styles from "@/modules/Card.module.css";

import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { e2p, sp } from "@/utils/replaceNumber";

function Card({ data }) {
  // console.log(data)

  const icons = {
    villa: <FaHouse />,
    apartment: <MdApartment />,
    store: <IoStorefrontSharp />,
    office: <HiOfficeBuilding />,
  };

  return (
    <div className={styles.container}>
      <p
        className={
          data.category === "villa"
            ? styles.icon__villa
            : data.category === "apartment"
            ? styles.icon__apartment
            : data.category === "store"
            ? styles.icon__store
            : data.category === "office"
            ? styles.icon__office
            : styles.icon
        }
      >
        {icons[data.category]}
      </p>
      <p className={styles.title}>{e2p(data.title)}</p>
      <p className={styles.location}>
        <FaLocationDot /> {data.location}
      </p>
      <p className={styles.price}>{sp(data.price)} تومان</p>
      <Link href={`/buy-residential/${data._id}`} className={styles.btn}>
        مشاهده آگهی
        <FaArrowLeftLong />
      </Link>
    </div>
  );
}

export default Card;
