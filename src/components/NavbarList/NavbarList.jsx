import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import useLanguage from "../../hooks/useLanguageContext";
import AosEffect from "../../shared/AosEffect/AosEffect";
import ChangeLanguage from "../Header/ChangeLanguage/ChangeLanguage";
import traduction from "../NavbarList/language.json";
import "./NavbarList.scss";

const NavbarList = () => {
  const { language } = useLanguage();

  const navbarList = [
    {
      name: traduction[language].links[0],
      to: "/",
    },
    {
      name: traduction[language].links[1],
      to: "/sights",
    },
    {
      name: traduction[language].links[2],
      to: "/toures",
    },
    {
      name: traduction[language].links[3],
      to: "/blog",
    },
    {
      name: traduction[language].links[4],
      to: "/about",
    },
  ];

  AosEffect();

  const width = useWindowSize();
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  const handleClickMenu = () => {
    setToggleBurgerMenu(!toggleBurgerMenu);

    if (!toggleBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleClickLink = () => {
    setToggleBurgerMenu(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className={`header__navbar ${toggleBurgerMenu ? "active" : ""}`}>
        <ul className="navbar__list">
          {navbarList.map(({ name, to }) => {
            return (
              <li key={name} className="navbar__item">
                <NavLink
                  className="navbar__link"
                  to={to}
                  onClick={handleClickLink}
                >
                  <span> {name}</span>
                  <div className="wave"></div>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ChangeLanguage />
      </nav>
      {width <= 766.9 && (
        <div
          className={`burger__menu ${toggleBurgerMenu ? "active" : ""}`}
          onClick={handleClickMenu}
        >
          <span></span>
        </div>
      )}
    </>
  );
};

export default NavbarList;
