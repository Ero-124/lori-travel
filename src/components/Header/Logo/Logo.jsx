import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="header__logo">
      <span>Odyssey</span>
    </NavLink>
  );
};

export default Logo;
