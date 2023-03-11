import React from "react";
import { NavLink } from "react-router-dom";
import AosEffect from "../../shared/AosEffect/AosEffect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "./img/logo.webp";
import "./Header.scss";
import NavbarList from "../NavbarList/NavbarList";



const Header = () => {
  AosEffect();

  return (
    <header className="header" id="home">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo">
            <LazyLoadImage src={logo} alt="Odyssey" />
          </NavLink>
          <NavbarList />
        </div>
      </div>
    </header>
  );
};

export default Header;
