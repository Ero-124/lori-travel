import React from "react";
import { Select } from "antd";
import useLanguage from "../../../hooks/useLanguageContext";
import flagUsa from "./img/usa.svg";
import flagArmenia from "./img/armenia.svg";
import flagRussia from "./img/russia.svg";
import "./ChangeLanguage.scss";

const ChangeLanguage = () => {
  const { language, switchLanguage } = useLanguage();
  return (
    <div className="change__language">
      <Select
        defaultValue={language}
        onChange={(value) => switchLanguage(value)}
        options={[
          {
            value: "en",
            label: (
              <span className="label__lang">
                EN
                <img src={flagUsa} alt="" />
              </span>
            ),
          },
          {
            value: "am",
            label: (
              <span className="label__lang">
                AM
                <img src={flagArmenia} alt="" />
              </span>
            ),
          },
          {
            value: "ru",
            label: (
              <span className="label__lang">
                RU
                <img src={flagRussia} alt="" />
              </span>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ChangeLanguage;

/* import flagUsa from "./img/usa.svg";
import flagArmenia from "./img/armenia.svg";
import flagRussia from "./img/russia.svg"; */

/* const countryLanguage = [
  {
    name: "en",
    img: flagUsa,
  },
  {
    name: "am",
    img: flagArmenia,
  },
  {
    name: "ru",
    img: flagRussia,
  },
]; */
