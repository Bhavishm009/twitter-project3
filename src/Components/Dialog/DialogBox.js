import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import style from "./Dialog.module.css";
import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";

function DialogBox(props) {

  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  function handaleClick() {
    setLoginStatus(false);
    alert("successfully Logout");
  }
  return (
    <Dialog className={style.dialog} onClose={handleClose} open={open}>
      <div className={style.container}>
        <CustomButton
          buttonText="Add an existing user"
          customCss={style.button}
        />
        <CustomButton
          btnNext={handaleClick}
          buttonText="Logout"
          customCss={style.button}
        />
      </div>
    </Dialog>
  );
}
export default DialogBox;
