import styles from "@/modules/CustomDatePicker.module.css";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

function CustomDatePicker({ profileData, setProfileData }) {

  const changeHandler = (e) => {
    const date = new Date(e);
    // console.log(date)
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className={styles.container}>
      <h4>تاریخ ساخت:</h4>
      <DatePicker
        value={profileData.constructionDate}
        onChange={changeHandler}
        calendar={persian}
        locale={persian_fa}
        weekDays={weekDays}
        render={<InputIcon />}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustomDatePicker;
