import React from "react";
import "../assets/styles/componets/Header.scss";

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src="./image/logo-platzi-video-BW2.png"
      alt=""
      width="100"
      height="100"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="./image/descarga3.png" alt="user" />
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
