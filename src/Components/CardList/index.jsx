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
              <Card imageUrl={item.EventImageUrl} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardList;
