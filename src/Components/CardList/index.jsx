import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              <Link to={`/movie?movieId=${item[1].EventCode}`}>
                <Card
                  movieName={item[1].EventTitle}
                  imageUrl={item[1].EventImageUrl}
                  wtsPercent={item[1].wtsPerc}
                  votes={item[1].wtsCount}
                  releaseDate={item[1].ShowDate}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardList;
