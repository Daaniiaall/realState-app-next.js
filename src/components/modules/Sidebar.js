import styles from "@/modules/Sidebar.module.css";

import { HiFilter } from "react-icons/hi";
import Link from "next/link";

function Sidebar() {
  return (  
  <div className={styles.container}>
     <h3> <HiFilter /> دسته بندی</h3>
        <ul>
            <li>
                <Link href="/buy-residential">همه</Link>
            </li>
            <li>
                <Link href={{pathname:"/buy-residential" , query:{category:"villa"}}}>ویلا</Link>
            </li>
            <li>
                <Link href={{pathname:"/buy-residential" , query:{category:"apartment"}}}>آپارتمان</Link>
            </li>
            <li>
                <Link href={{pathname:"/buy-residential" , query:{category:"office"}}}>دفتر</Link>
            </li>
            <li>
                <Link href={{pathname:"/buy-residential" , query:{category:"store"}}}>مغازه</Link>
            </li>
        </ul>
  </div>);
}

export default Sidebar;
