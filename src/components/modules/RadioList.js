import styles from "@/modules/RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changeHandler = (e) => {setProfileData({...profileData , category : e.target.value })};
  return (
      <div className={styles.container}>
        <h4>دسته بندی</h4>
        <div className={styles.main}>
      <div className={styles.radio}>
        <label htmlFor="villa">ویلا</label>
        <input
          type="radio"
          id="villa"
          value="villa"
          name="category"
          onChange={changeHandler}
          checked={category === "villa"}
        />
      </div>
      <div className={styles.radio}>
        <label htmlFor="apartment">آپارتمان</label>
        <input
          type="radio"
          id="apartment"
          value="apartment"
          name="category"
          onChange={changeHandler}
          checked={category === "apartment"}
        />
      </div>

      <div className={styles.radio}>
        <label htmlFor="store">مغازه</label>
        <input
          type="radio"
          id="store"
          value="store"
          name="category"
          onChange={changeHandler}
          checked={category === "store"}
        />
      </div>

      <div className={styles.radio}>
        <label htmlFor="office">دفتر</label>
        <input
          type="radio"
          id="office"
          value="office"
          name="category"
          onChange={changeHandler}
          checked={category === "office"}
        />
      </div>
      </div>
      
    </div>
  );
}

export default RadioList;
