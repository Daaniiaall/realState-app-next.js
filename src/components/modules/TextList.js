import styles from "@/modules/TextList.module.css";
import { MdOutlineAddBox } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

function TextList({ title, profileData, setProfileData, type }) {
  const addHandler = (e) => {
    e.preventDefault();
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const items = [...profileData[type]];
    items[index] = value;
    setProfileData({ ...profileData, [type]: items });
  };

  const deleteHandler = (e, index) => {
    e.preventDefault();
    const items = [...profileData[type]];
    items.splice(index, 1);
    // console.log(items);
    setProfileData({ ...profileData, [type]: items });
  };

  return (
    <div className={styles.container}>
      <h4>{title}</h4>

      {profileData[type].map((item, index) => (
        <div key={index}>
          <input
            type="text"
            value={item}
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            onClick={(e) => deleteHandler(e, index)}
            className={styles.delete__button}
          >
            حذف <RiDeleteBin2Line />
          </button>
        </div>
      ))}

      <button onClick={addHandler} className={styles.add__button}>
        افزودن
        <MdOutlineAddBox />
      </button>
    </div>
  );
}

export default TextList;
