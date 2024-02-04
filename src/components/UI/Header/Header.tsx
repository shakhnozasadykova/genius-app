import React from "react";
import Logo from "../../UI/Header/Logo.png"

export const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderPrimary">
        <form className="Search">
          <input type="text" placeholder="Search lyrics  & more" />
        </form>
        <img
          className="Logo"
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className="HeaderMenu">
        <ul>
          <li className="MenuItem">
            The 50th
            <span>|</span>
          </li>
          <li className="MenuItem">
            Featured
            <span>|</span>
          </li>
          <li className="MenuItem">
            Charts
            <span>|</span>
          </li>
          <li className="MenuItem">
            Videos
            <span>|</span>
          </li>
          <li className="MenuItem">
            Community
            <span>|</span>
          </li>
          <li className="MenuItem">
            Promote your music
            <span>|</span>
          </li>
        </ul>
      </div>
    </header>
  );
};
