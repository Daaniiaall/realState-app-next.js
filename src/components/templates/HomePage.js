import CategoryCard from "@/modules/CategoryCard";

import styles from "@/templates/HomePage.module.css";

import { PiStarFill } from "react-icons/pi";

function HomePage() {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "شیراز",
    "اصفهان",
    "تبریز",
    "کرمانشاه",
    "مازندران",
    "اهواز",
    "یزد",
    "بندر عباس",
    "گیلان",
  ];

  return (
    <div>
      <div className={styles.banner}>
        <h1>سامانه خرید و اجاره ملک</h1>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <PiStarFill />
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر اداری" name="office" />
      </div>
      <div className={styles.cities}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
