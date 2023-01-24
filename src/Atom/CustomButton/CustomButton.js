import React from "react";
// import style from "../styled.module.css";

function CustomButton({ type, buttonText, icon, btnNext, customCss }) {
  return (
    <button type={type} className={customCss} onClick={btnNext}>
      {icon}&nbsp;&nbsp;
      {buttonText}
    </button>
  );
}

export default CustomButton;
