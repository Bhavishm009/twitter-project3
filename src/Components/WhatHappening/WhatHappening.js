import React, { useState } from "react";
import style from "./whatHappening.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../../Atom/Button/CustomButton";
import { tweetPosts } from "../../TweetData/TweetData";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isTweetPost } from "../../Recoil/Atom1/Atom";

function WhatHappening() {
  const [storeArray, setStoreArray] = useState("");
  // const [forTrue, setForTrue] = useState(0);
  const [loginStatus, setLoginStatus] = useRecoilState(isTweetPost);
  const Icons = [
    { id: 0, icon: <FaGlobe /> },
    { id: 1, icon: <FaImage /> },
    { id: 2, icon: <FaMapMarker /> },
    { id: 3, icon: <FiCamera /> },
    { id: 4, icon: <CgSmileMouthOpen /> },
    { id: 5, icon: <BiUserCircle /> },
  ];
  function takeTweet(e) {
    setStoreArray(e.target.value);
  }
  function handleNewTweet() {
    let newObj = {
      name: "Bhavish Muneshwar ",
      handlerName: "@Bhavishm009",
      organization: "Work For Future",
      tweetText: storeArray,
      tweetPic: "",
      tweetCount: "",
      retweetCount: "",
      likesCount: "",
      viewsCount: "",
      followers: "",
      followings: "",
      joinedDate: "22 dec 2022",
    };

    tweetPosts.unshift(newObj);
    setLoginStatus(loginStatus + 1);
  }

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          <div className={style.wrapper}>
            <textarea
              placeholder="What's happening?"
              rows={8}
              cols={60}
              onChange={takeTweet}
            />
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
            btnNext={handleNewTweet}
            customCss={style.button}
          />
        </div>
      </div>
    </>
  );
}

export default WhatHappening;