import React, { useEffect, useState } from "react";
import Card from "../Card/index";

import "./index.css";

function CardList({ selectLang, selectedGenre }) {
  const [moviesData, setMoviesData] = useState([]);

  const fetchResponse = async () => {
    const response = await fetch(
      "https://peaceful-forest-62260.herokuapp.com/"
    );
    const data = await response.json();
    if (selectLang.length > 0 || selectedGenre.length > 0) {
      let filteredData;
      if (selectLang.length > 0 && selectedGenre.length > 0) {
        filteredData = Object.entries(data.moviesData)
          .filter(filterLang)
          .filter(filterGenre);
      } else if (selectLang.length > 0) {
        filteredData = Object.entries(data.moviesData).filter(filterLang);
      } else {
        filteredData = Object.entries(data.moviesData).filter(filterGenre);
      }
      function filterLang(value) {
        const res = selectLang.includes(value[1].EventLanguage);
        return res;
      }
      function filterGenre(value) {
        const res = selectedGenre.some((n) => value[1].EventGenre.includes(n));
        return res;
      }
      function filterData(value) {
        const checkLang =
          selectLang.length > 0 && selectLang.includes(value[1].EventLanguage);
        console.log("every", checkLang);
        const genreCheck =
          selectedGenre.length > 0 &&
          selectedGenre.some((n) => value[1].EventGenre.includes(n));
        console.log("every-G", genreCheck[0], typeof genreCheck[0]);
        return checkLang || genreCheck[0];
        // return (
        //   (await selectLang.includes(value && value[1].EventLanguage)) &&
        //   (await selectedGenre.map((n) => {
        //     value && value[1].EventGenre.includes(n);
        //   }))
        // );
      }
      const finalData = Object.fromEntries(filteredData);
      console.log("FIlted data", Object.fromEntries(filteredData));
      setMoviesData(finalData);
      //setMoviesData(data.moviesData);
    } else {
      console.log("og data", data.moviesData);

      setMoviesData(data.moviesData);
    }
  };

  useEffect(() => fetchResponse(), [selectLang, selectedGenre]);
  return (
    <>
      <ul className="cards">
        {moviesData &&
          Object.entries(moviesData).map((item) => (
            <li className="cards_item" key={item}>
              <div>
                <Card
                  movieName={item[1].EventTitle}
                  imageUrl={item[1].EventImageUrl}
                  wtsPercent={item[1].wtsPerc}
                  votes={item[1].csCount}
                  releaseDate={item[1].ShowDate}
                  trailerUrl={item[1].TrailerURL}
                  willWatch={item[1].wtsCount}
                  wontWatch={item[1].dwtsCount}
                  mayBeWatch={item[1].maybeCount}
                  genre={item[1].EventGenre}
                  language={item[1].EventLanguage}
                />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default CardList;
