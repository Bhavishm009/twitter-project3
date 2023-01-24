import { Button, Popover } from "antd";
import { useState } from "react";

import style from "./DialogBox2.module.css";

const DialogBox2 = (props) => {
  const [open, setOpen] = useState(false);
  // const[IsNotIntrested,setIsNotIntrested]=useState(false)

  // function Hello(e) {
  //  alert("hllo")
  //  setIsNotIntrested(true)
  // }
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<a onClick={props.onClick}>🙁  Is Not Intrested</a>}
      title=" 😒 This trend is harmful or spammy"
      trigger="click"
      open={open}
      overlayInnerStyle={{
        color: "#fff",
        background: "white",
        border: "1px solid #fff",
      }}
      onOpenChange={handleOpenChange}
    >
      <Button className={style.btn}>...</Button>
    </Popover>
  );
};
export default DialogBox2;
