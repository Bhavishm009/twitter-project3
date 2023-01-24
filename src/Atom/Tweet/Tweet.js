import React, { useState } from "react";
import style from "./Tweet.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../Button/CustomButton";
function Tweet() {
  const [isOpen, setIsOpen] = useState(false);
  const Icons = [
    { id: 0, icon: <FaGlobe /> },
    { id: 1, icon: <FaImage /> },
    { id: 2, icon: <FaMapMarker /> },
    { id: 3, icon: <FiCamera /> },
    { id: 4, icon: <CgSmileMouthOpen /> },
    { id: 5, icon: <BiUserCircle /> },
  ];

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          <div className={style.wrapper}>
            <textarea
              placeholder="What's happening?........"
              rows={8}
              cols={60}
            ></textarea>

            <div className={style.privacy}>
              <FaGlobe />
              <span>Everyone can reply</span>
            </div>

            <div className={style.bottom}>
              {Icons.map((menu) => {
                return (
                  <ul className={style.icons}>
                    <li>{menu.icon}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <CustomButton
            buttonText="Tweet"
            btnNext={() => {
              setIsOpen(true);
            }}
            customCss={style.button}
          />
        </div>
      </div>
    </>
  );
}
export default Tweet;
