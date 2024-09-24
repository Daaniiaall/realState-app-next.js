import styles from "@/modules/TextInput.module.css";

import { p2e } from "@/utils/replaceNumber";

function TextInput({ title, name , profileData, setProfileData, textarea = false }) {

  const changeHandler = (e) => {
    setProfileData({ ...profileData, [e.target.name]: p2e(e.target.value) });
  };

  return (
    <div className={styles.container}>
      <label htmlFor={title}>{title}</label>
      {textarea ? (
        <textarea
          type="text"
          id={title}
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          id={title}
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
