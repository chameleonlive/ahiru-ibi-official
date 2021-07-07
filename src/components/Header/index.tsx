import React from "react";

import logoSrc from "../../images/logo.png";
import { ReactComponent as FacebookLogo } from "../../images/facebook.svg";
import { ReactComponent as TwitterLogo } from "../../images/twitter.svg";
import { ReactComponent as YoutubeLogo } from "../../images/youtube.svg";

import "./index.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={logoSrc} alt="" />
      <div className="menu">
        <div className="menu-item">關於伊比</div>
        <div className="menu-item">蔬果店成員</div>
        <div className="menu-item">YouTube會員</div>
        <div className="menu-item">週邊商店</div>
        <div className="menu-item">贊助蔬果店</div>
        <div className="menu-item">聯絡我們</div>
        <div className="menu-item sns">
          <div className="sns-icons">
            <FacebookLogo />
          </div>
          <div className="sns-icons">
            <TwitterLogo />
          </div>
          <div className="sns-icons">
            <YoutubeLogo />
          </div>
        </div>
      </div>
    </div>
  );
}
