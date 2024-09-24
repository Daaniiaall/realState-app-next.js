import styles from "@/templates/BuyResidentialPage.module.css";

import Card from "@/modules/Card";

import Sidebar from "@/modules/Sidebar";

function BuyResidentialPage({ data }) {
//   console.log(data);
  return (
    <div className={styles.container}>

      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}

        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>

    </div>
  );
}

export default BuyResidentialPage;
