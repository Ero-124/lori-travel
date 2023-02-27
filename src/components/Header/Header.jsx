import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Header.scss";

const Header = ({ headerRef }) => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  const width = useWindowSize();

  const handleClickMenu = () => {
    setToggleBurgerMenu(!toggleBurgerMenu);
  };

  const handleClickLink = () => {
    setToggleBurgerMenu(false);
  };

  return (
    <header className="header" id="home" >
      <div className="container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo">
            <span>LORI TRAVEL</span>
          </NavLink>
          <nav className="header__navbar">
            <ul className={`navbar__list ${toggleBurgerMenu ? "active" : ""} `}>
              <li className="navbar__item">
                <NavLink
                  to="/"
                  className="navbar__link"
                  onClick={handleClickLink}
                >
                  Home
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  to="/sights"
                  className="navbar__link"
                  onClick={handleClickLink}
                >
                  Sights
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  to="/toures"
                  className="navbar__link"
                  onClick={handleClickLink}
                >
                  Toures
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  to="/blog"
                  className="navbar__link"
                  onClick={handleClickLink}
                >
                  Blog
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  to="/about"
                  className="navbar__link"
                  onClick={handleClickLink}
                >
                  About us
                </NavLink>
              </li>
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
