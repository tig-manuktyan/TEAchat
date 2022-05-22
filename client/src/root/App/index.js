import React from "react";
import Websock from "../pages/Chat/WebSock";
import "./index.css";
import { useTranslation } from "react-i18next";
import "./../services/i18n/i18n";
const App = () => {
  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <button onClick={() => handleClick("en")}>English</button>
      <button onClick={() => handleClick("ru")}>Korean</button>
      <Websock />
    </div>
  );
};

export default App;
