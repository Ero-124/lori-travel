import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Header.scss";

const Header = () => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  const width = useWindowSize();

  const handleClickMenu = () => {
    setToggleBurgerMenu(!toggleBurgerMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <span>LORI TRAVEL</span>
          </div>
          <nav className="header__navbar">
            <ul className={`navbar__list ${toggleBurgerMenu ? "active" : ""} `}>
              <li className="navbar__item">
                <NavLink to="/" className="navbar__link">
                  Home
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink to="/sights" className="navbar__link">
                  Sights
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink to="/toures" className="navbar__link">
                  Toures
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink to="/blog" className="navbar__link">
                  Blog
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink to="/about" className="navbar__link">
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