// LanguageContext.js
import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ge");

  useEffect(() => {
    const fontFamily =
      language === "en"
        ? "'supreme', sans-serif"
        : "'BPGNinoMtavruliNormal', sans-serif";
    document.body.style.fontFamily = fontFamily;
  }, [language]);

  //     const font = new FontFace(
  //       "supreme",
  //       "url(./Fonts/5ZZU4JM62PS7KOJ7BOKLPL3AEO2G76TS.woff2) )"
  //     );
  //     font.load().then(() => {
  //       document.fonts.add(font);
  //       applyFont();
  //     });
  //   }, [language]);

  const contextValue = {
    language,
    setLanguage: (newLanguage) => {
      setLanguage(newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};