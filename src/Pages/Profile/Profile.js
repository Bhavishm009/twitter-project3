import React from 'react'
import MenuItems from "../../Components/Sections/Left/MenuItems"
import ProfileSection from '../../Components/Sections/ProfileSection/ProfileSection'
import RightSide from '../../Components/Sections/Right/RightSide'
import style from "./Profile.module.css"
function Profile() {
  return (
    <div>
          <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
      <ProfileSection />
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
    </div>
  )
}

export default Profile