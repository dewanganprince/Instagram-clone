
import React from "react";


// import logo from "../assets/logo_.svg";
import logo from "../assets/logo.png";
import profile from "../assets/Mask Group (2).svg";

import notify from "../assets/Mask Group.svg";


const Header = () => {
  return(
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt=""/>
          <div>
          </div>
        </div>

        <div className="header__search-bar">
          <div className="searchbox">
            <input className="search__field input" placeholder="Search bar...." />
          </div>
        </div>

        <div className="header__info">
          <div className="header__info-notify">
            <img src={notify} alt=""/>
          </div>
          <div className="header__info-profile">
            <img src={profile} alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;