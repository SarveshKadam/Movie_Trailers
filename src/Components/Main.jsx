import React, { useState, useEffect } from "react";
import CardList from "./CardList/index";
import Header from "./Header/index";
const Main = () => {
  const [languageList, setLangualist] = useState([]);
  const [selectLang, setSelectLang] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  //Fetch API Response
  const fetchResponse = async () => {
    try {
      const response = await fetch(
        "https://peaceful-forest-62260.herokuapp.com/"
      );
      const data = await response.json();
      setLangualist(data.languageList);
    } catch (error) {
      alert(error);
    }
  };
  function getSelectedLang(data) {
    setSelectLang(data);
  }
  function getSelectedGenre(data) {
    setSelectedGenre(data);
  }
  useEffect(() => fetchResponse(), []);
  return (
    <main>
      <Header
        languageList={languageList}
        getSelectedLang={getSelectedLang}
        getSelectedGenre={getSelectedGenre}
      />
      <CardList selectLang={selectLang} selectedGenre={selectedGenre} />
    </main>
  );
};

export default Main;
