import React, { useEffect, useState } from "react";
import Card from "../Card/index";

import "./index.css";

function CardList({ selectLang, selectedGenre }) {
  const [moviesData, setMoviesData] = useState([]);

  //fethcing data from API
  const fetchResponse = async () => {
    try {
      const response = await fetch(
        "https://peaceful-forest-62260.herokuapp.com/"
      );
      const data = await response.json();
      //Filtering Data based up on the options selected
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
        //Filter By Language
        function filterLang(value) {
          const res = selectLang.includes(value[1].EventLanguage);
          return res;
        }

        //Filter by Genre
        function filterGenre(value) {
          const res = selectedGenre.some((n) =>
            value[1].EventGenre.includes(n)
          );
          return res;
        }
        const finalData = Object.fromEntries(filteredData);
        setMoviesData(finalData);
      } else {
        setMoviesData(data.moviesData);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => fetchResponse(), [selectLang, selectedGenre]);
  return (
    <>
      <ul className="cards">
        {moviesData &&
          Object.entries(moviesData).map((item) => (
            <li className="cards_item" key={item}>
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
            </li>
          ))}
      </ul>
    </>
  );
}

export default CardList;
