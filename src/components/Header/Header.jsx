import React, { lazy } from "react";
import ChangeLanguage from "../Header/ChangeLanguage/ChangeLanguage";
import Logo from "./Logo/Logo";
import "./Header.scss";
const NavbarList = lazy(() => import("./NavbarList/NavbarList"));
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <NavbarList burger={true} />
          <ChangeLanguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
