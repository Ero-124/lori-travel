import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";

import AosEffect from "../../shared/AosEffect/AosEffect";
import { navbarList } from "../NavbarList/NavbarList";
import "./Header.scss";

const Header = () => {
  AosEffect();

  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  const width = useWindowSize();

  const handleClickMenu = () => {
    setToggleBurgerMenu(!toggleBurgerMenu);
  };

  const handleClickLink = () => {
    setToggleBurgerMenu(false);
  };

  return (
    <header className="header" id="home">
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo">
            <span>LORI TRAVEL</span>
          </NavLink>
          <nav className="header__navbar" data-aos={width > 769 && 'fade-left'}>
            <ul className={`navbar__list ${toggleBurgerMenu ? "active" : ""} `}>
              {navbarList.map(({ name, to }) => {
                return (
                  <li key={name} className="navbar__item">
                    <NavLink
                      className="navbar__link"
                      to={to}
                      onClick={handleClickLink}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          {width <= 769 && (
            <div
              className={`burger__menu ${toggleBurgerMenu ? "active" : ""}`}
              onClick={handleClickMenu}
            >
              <span></span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
