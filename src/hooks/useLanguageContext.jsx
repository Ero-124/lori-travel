import { useContext } from "react";
import { LanguageContext } from "../context/contextLang";

const useLanguage = () => {
  return useContext(LanguageContext);
};

export default useLanguage;
