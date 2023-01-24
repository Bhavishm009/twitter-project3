import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import CustomButton from "../../Atom/CustomButton";
import { isValidEmail, isValidMobile, isValidString } from "../../helper";
import Input from "../../Atom/Input";
import { json, Link } from "react-router-dom";
import Dob from "../Dob.js/Dob";
import { FlareSharp, Password } from "@mui/icons-material";
// import { Data } from "../../Recoil/Atom1/Atom";

function Register() {
  // let initialValues;
  // if (localStorage.getItem("user") === null) {
  //   initialValues = [];
  // } else {
  //   initialValues = JSON.parse(localStorage.getItem("user"));
  // }

  const [form, Setform] = useState(false);
  const [toggle, setToggle] = useState(false);
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: [e.target.value] });
    console.log(data.name);
  };
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     let data = JSON.parse(localStorage.getItem("user"));
  //     setData(data);
  //     console.log(data);
  //   }
  // }, []);
  function Form() {
    Setform(true);
  }
  function ToggleEU() {
    setToggle(!toggle);
  }
  // function handleName(inputName) {
  //   setName(inputName);
  // }
  // function handleMobile(inputMobile) {
  //   setPhone(inputMobile);
  // }
  // function handleEmail(inputEmail) {
  //   setEmail(inputEmail);
  // }

  function submitFunction(e) {
    e.preventDefault();
    setIsSubmit(true);
  }
  useEffect(() => {
    let userList = JSON.parse(localStorage.getItem("user")) || [];
    userList.push(setData);
    localStorage.setItem("user", JSON.stringify(userList));
  }, [isSubmit, data]);
  console.log(localStorage.getItem("user"));
  // const Data = {
  //   Name: name,
  //   Phone: phone,
  //   Email: email,
  // };

  // let flag = 0;
  // if (!isValidString(name)) {
  //   alert("add proper Name");

  //   flag = 1;
  // } else {
  //   flag = 0;
  // }
  // if (toggle === true) {
  //   if (!isValidMobile(phone)) {
  //     alert("add proper PhoneNumber ");

  //     flag = 1;
  //   } else {
  //     flag = 0;
  //   }
  // } else {
  //   if (!isValidEmail(email)) {
  //     alert("Give correct email");

  //     flag = 1;
  //   } else {
  //     flag = 0;
  //   }
  // }

  // if (flag == 0) {
  //   alert("succesfullly registred");
  //   setData([...data], Data);
  //   localStorage.setItem("user", JSON.stringify(Data));
  //   // window.location.assign('/Home')
  // }

  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.mainContainer}>
          {form ? (
            <>
              <form onSubmit={submitFunction} className={style.form}>
                <div>
                  <h3>{data.name}</h3>
                  <h1>Create your account</h1>
                </div>
                <div>
                  <Input
                    className={style.input1}
                    placeholder="Name"
                    value={data.name}
                    onChange={handleChange}
                  />

                  <br />
                  <div className={style.toogleData}>
                    {toggle ? (
                      <>
                        <Input
                          className={style.input2}
                          placeholder="Phone"
                          value={data.phone}
                          onChange={handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <Input
                          className={style.input2}
                          placeholder="email"
                          value={data.email}
                          onChange={handleChange}
                        />
                      </>
                    )}
                    <span className={style.toggle} onClick={ToggleEU}>
                      {toggle ? (
                        <h6> UseEmail insted </h6>
                      ) : (
                        <h6>UsePhone insted</h6>
                      )}
                    </span>
                  </div>
                  <div>
                    <Dob />
                  </div>
                </div>
                <div>
                  <CustomButton
                    buttonText="Sign up"
                    customCss={style.formbtn}
                  ></CustomButton>
                </div>
              </form>
            </>
          ) : (
            <>
              <p>
                <i class="fa fa-brands fa-twitter"></i>
              </p>
              <h1>Join Twitter today</h1>
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-google"></i>}
                  buttonText="Sign in with google"
                  customCss={style.CustomButton1}
                ></CustomButton>
              </div>
              <br />
              <div>
                <CustomButton
                  icon={<i class="fa fa-brands fa-apple"></i>}
                  buttonText="Sign in with Apple"
                  customCss={style.CustomButton2}
                />
              </div>
              <div className={style.or}>
                <p className={style.line}>__________</p>
                OR
                <p className={style.line}>__________</p>
              </div>
              <div className={style.signupbtn}>
                <CustomButton
                  btnNext={Form}
                  buttonText="sign up with phone number or email"
                  customCss={style.CustomButton2}
                />
                <p>
                  By signing up, you agree to the Terms of Service <br />
                  and Privacy Policy, including Cookie Use.
                </p>
              </div>
              <div className={style.txt2}>
                Have an Account Already..? <Link path="/"> Log in</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
