import React from "react";
import "../assets/styles/componets/Header.scss";
import Logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/descarga3.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={Logo} alt="" width="100" height="100" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="./otros/login.html">Iniciar sesion</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
