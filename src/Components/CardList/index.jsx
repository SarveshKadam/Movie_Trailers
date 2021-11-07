import React, { useEffect, useState } from "react";
import Card from "../Card/index";

import "./index.css";

function CardList() {
  const [moviesData, setMoviesData] = useState([]);
  const fetchResponse = async () => {
    const response = await fetch(
      "https://peaceful-forest-62260.herokuapp.com/"
    );
    const data = await response.json();
    setMoviesData(data.moviesData);
  };

  useEffect(() => fetchResponse(), []);
  return (
    <div>
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
    </div>
  );
}

export default CardList;
