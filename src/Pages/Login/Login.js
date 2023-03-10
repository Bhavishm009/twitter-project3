import React, { useState } from "react";
import style from "./Login.module.css";
import CustomButton from "../../Atom/Button/CustomButton";
import { FaTwitter } from "react-icons/fa";
import Input from "../../Atom/Input/Input";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { isValidLogin } from "../../helper";
import { Link } from "react-router-dom";


function Login() {
  const [nextbtn, setNextBtn] = useState(false);
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const navigate = useNavigate();
  const [loginv, setLoginV] = useState("");
  const [passWordValue, setPasswordValue] = useState("");
  const [localstorageKey, setLocalstorageKey] = useState();
  const [loginError, setLoginError] = useState("");
  function loginValue(inputLogin) {
    setLoginV(inputLogin);
  }
  function passWordChangeValue(inputPassword) {
    setPasswordValue(inputPassword);
  }
  const buttonNext = () => {
    let flag = 1;
    if (isValidLogin(loginv)) {
      setLoginError("Give Username or Email or Phone no");

      flag = 1;
    } else {
      flag = 0;
    }

    let flagForLs = 0;
    for (var i = 0; i < localStorage.length; i++) {
      let k = JSON.parse(localStorage.getItem("user" + i));
      //console.log(k.Email)
      //console.log(loginv)
      if (k.Email === loginv || k.Name === loginv || k.Phone == loginv) {
        flagForLs = 1;
        //const store=i;
        setLocalstorageKey(i);
      }
    }
    if (flagForLs == 1 && flag == 0) {
      setNextBtn(true);
    } else if (flagForLs == 0) {
      setNextBtn(false);
      setLoginError("User Not Found");
    }
  };
  const handleLogIn = () => {
    //console.log(isLogin);

    let flagForLs = 0;
    let k = JSON.parse(localStorage.getItem("user" + localstorageKey));
    console.log(k.password);

    if (k.password === passWordValue) {
      flagForLs = 1;
    }

    if (flagForLs == 1) {
      setLoginStatus(true);
      alert("successfully Login");
      navigate("/");
    } else {
      alert("false");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.container1}>
          <FaTwitter className={style.logo} />
          {nextbtn ? (
            <>
              <div className={style.containerpass}>
                <h1>Enter your Password</h1>
                <div>
                  <Input
                    className={style.input2}
                    placeholder="passsword"
                    handleOnchange={passWordChangeValue}
                  />
                </div>

                <div className={style.password}>
                  <CustomButton
                    buttonText="Log In"
                    btnNext={handleLogIn}
                    customCss={style.loginbtn}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={style.text}>
                <h1>Sign in to Twitter</h1>
              </div>

              <CustomButton
                buttonText="Sign in with Google"
                customCss={style.btn1}
                icon={<i className="fa fa-brands fa-google"></i>}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Sign in with Apple"
                icon={<i className="fa fa-brands fa-apple"></i>}
                customCss={style.btn1}
              ></CustomButton>
              <br />
              <div className={style.or}>
                <span style={{ display: "flex" }}>
                  <hr style={{ width: "8.4rem", height: "0px" }} />
                  &nbsp;&nbsp;or&nbsp;&nbsp;
                  <hr style={{ width: "8.4rem", height: "0px" }} />
                </span>
              </div>
              <br />
              <div>
                <Input
                  className={style.input}
                  placeholder="Phone, email or username"
                  handleOnchange={loginValue}
                />
              </div>
              <span style={{ color: "red" }}>{loginError}</span>
              <br />
              <CustomButton
                buttonText="Next"
                customCss={style.btn1}
                btnNext={buttonNext}
              ></CustomButton>
              <br />
              <CustomButton
                buttonText="Forgot Password?"
                customCss={style.btnForget}
                style={{ backgroundColor: "black" }}
              ></CustomButton>
              <br />
            </>
          )}
          <div className={style.para}>
            <p>
              Don't have an account?{" "}
              <Link to="/Register">
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
