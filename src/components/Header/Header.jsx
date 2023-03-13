import React, { lazy } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const NavbarList = lazy(() => import("../NavbarList/NavbarList"));

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo">
            <span>Odyssey</span>
          </NavLink>
          <NavbarList />
        </div>
      </div>
    </header>
  );
};

export default Header;
