import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") ?? "en"
  );
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLanguage(localStorage.getItem("lang"));
    }
  }, []);

  const switchLanguage = (updateLang) => {
    setLanguage(updateLang);
    localStorage.setItem("lang", updateLang);
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
