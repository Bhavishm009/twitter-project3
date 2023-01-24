import React from 'react'
import { FaSistrix } from "react-icons/fa";
import  SearchStyle from'./SearchBar.module.css'

function SearchBar() {
  return (
    <>
    <div className={SearchStyle.trends}>
      <div className={SearchStyle.trends__search}>
        <input
          type="text"
          className={SearchStyle.trend__control}
          placeholder={SearchStyle.Search}
        />
        <div className={SearchStyle.trend__icon}>
          <FaSistrix className={SearchStyle.search} />
        </div>
      </div>
      
    </div>
    </>
  )
}

export default SearchBar
