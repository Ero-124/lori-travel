import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import NavbarList from "../Header/NavbarList/NavbarList";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <span>Odyssey.am</span>
          </div>
          <div className="footer__navigation">
            <NavbarList burger={false} />
          </div>
          <div className="footer__social">
            <div className="social__item">
              <NavLink to="https://www.facebook.com" target={"_blank"}>
                <FontAwesomeIcon icon={faFacebookF} />
              </NavLink>
              <span>Facebook</span>
            </div>
            <div className="social__item">
              <NavLink to="https://www.instagram.com" target={"_blank"}>
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
              <span>Instagram</span>
            </div>
            <div className="social__item">
              <NavLink to="https://www.telegram.com" target={"_blank"}>
                <FontAwesomeIcon icon={faTelegram} />
              </NavLink>
              <span>Telegram</span>
            </div>
          </div>
          <div className="footer__copyright">
            <p>Copyright &#169; 2023 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
