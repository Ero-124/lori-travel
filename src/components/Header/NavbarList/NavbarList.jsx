import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEthernet,
  faTaxi,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import useLanguage from "../../../hooks/useLanguageContext";
import traduction from "../NavbarList/language.json";
import "./NavbarList.scss";

const NavbarList = ({ burger }) => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const width = useWindowSize();
  const { language } = useLanguage();
  const { links, subInfo } = traduction[language];

  const navbarList = [
    { name: links[0], to: "/" },
    { name: links[1], to: "/info" },
    { name: links[2], to: "/toures" },
    { name: links[3], to: "/blog" },
    { name: links[4], to: "/about" },
  ];

   useEffect(() => {
    setIsDropdownOpen(false);
    setToggleBurgerMenu(false)
  }, [location.pathname]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickMenu = useCallback(() => {
    setToggleBurgerMenu(!toggleBurgerMenu);
    document.body.classList.toggle("no-overflow");
  }, [toggleBurgerMenu]);

  const handleClickLink = useCallback(() => {
    setToggleBurgerMenu(false);
    document.body.classList.remove("no-overflow");
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

 

  return (
    <>
      <nav
        className={`header__navbar ${burger ? "show" : "hide"}  ${
          toggleBurgerMenu ? "active" : ""
        }`}
      >
        <ul className="navbar__list">
          {navbarList.map(({ name, to }) => {
            const infoName = links[1];
            return (
              <li key={name} className="navbar__item">
                {name === infoName ? (
                  <div className="dropdown" ref={dropdownRef}>
                    <button
                      onClick={handleDropdownClick}
                      className="navbar__link"
                    >
                      <span>{name}</span>
                    </button>
                    {isDropdownOpen && (
                      <ul className="dropdown__menu">
                        <li className="dropdown__item">
                          <NavLink className="dropdown__link" to="/info/foods">
                            <span>{subInfo[0]}</span>
                            <FontAwesomeIcon
                              icon={faUtensils}
                              onClick={handleClickLink}
                            />
                          </NavLink>
                        </li>
                        <li className="dropdown__item">
                          <NavLink
                            className="dropdown__link"
                            to="/info/transport"
                          >
                            <span>{subInfo[1]}</span>
                            <FontAwesomeIcon
                              icon={faTaxi}
                              onClick={handleClickLink}
                            />
                          </NavLink>
                        </li>
                        <li className="dropdown__item">
                          <NavLink
                            className="dropdown__link"
                            to="/info/gazebos"
                          >
                            <span>{subInfo[2]}</span>
                            <FontAwesomeIcon
                              icon={faEthernet}
                              onClick={handleClickLink}
                            />
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    className="navbar__link"
                    to={to}
                    onClick={handleClickLink}
                  >
                    <span>{name}</span>
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {width <= 766.9 && burger && (
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
