import React from "react";
import style from "./ProfileSection.module.css";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";

function ProfileSection() {
   const nevigate = useNavigate();

  
  let Data = JSON.parse(localStorage.getItem("user0"));
  console.log(Data);
  return (
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{Data.Name}</h2>
      </div>
        <img className={style.container} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/elon-2_2_0-sixteen_nine.jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/elon-2_2_0-sixteen_nine.jpg"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data.Name}`}</h4>
        <h5>{`${"@"}${Data.Email}`}</h5>
        <h5>{`${"Mob no:-"}${Data.Phone}`}</h5>
      </div>
    </div>
  );
}

export default ProfileSection;