import styles from "@/templates/DetailsPage.module.css";
import { IoLocationSharp, IoStorefrontSharp } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { FaHouse, FaRegCalendarCheck } from "react-icons/fa6";
import { MdApartment, MdOutlineRealEstateAgent } from "react-icons/md";
import { e2p, sp } from "@/utils/replaceNumber";
import { HiOfficeBuilding } from "react-icons/hi";
import ShareButton from "@/modules/ShareButton";
import BackButton from "@/modules/BackButton";

function DetailsPage({ data, admin }) {
  // console.log(data);

  const icons = {
    villa: <FaHouse />,
    apartment: <MdApartment />,
    store: <IoStorefrontSharp />,
    office: <HiOfficeBuilding />,
  };

  const categories = {
    villa: "ویلا",
    apartment: "آپارتمان",
    store: "مغازه",
    office: "دفتر اداری",
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <IoLocationSharp />
          {data.location}
        </span>
        <h3>توضیحات</h3>
        <p>{data.description}</p>
        <h3>امکانات</h3>
        {data.facilities.length ? (
          <ul>
            {data.facilities.map((i, index) => (
               i === "" ? null : <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.text}>هیچ موردی ثبت نشده است</p>
        )}
        <h3>قوانین</h3>
        {data.rules.length ? (
          <ul>
            {data.rules.map((i, index) => (
              i === "" ? null : <li key={index}>{i}</li>
              
            ))}
          </ul>
        ) : (
          <p className={styles.text}>هیچ موردی ثبت نشده است</p>
        )}
      </div>

      <div className={styles.sidebar}>

        <div className={styles.realState}>
          <MdOutlineRealEstateAgent className={styles.icon} />
          <h3>{data.realState}</h3>
          <p>
            <AiOutlinePhone />
            {e2p(data.phone)}
          </p>
        </div>

        {admin ? null : <ShareButton />}

        <div className={styles.details}>
          <p>
            {icons[data.category]}
            {categories[data.category]}
          </p>
          <span>{sp(data.price)} تومان</span>
          <p>
            <FaRegCalendarCheck />
            {data.constructionDate.toLocaleDateString("fa-IR")}
          </p>
        </div>
        
      </div>
      <BackButton />
    </div>
  );
}

export default DetailsPage;
