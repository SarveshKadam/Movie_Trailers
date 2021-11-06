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
    // console.log(data.moviesData);
    // Object.entries(data.moviesData).map((item)=> {
    //   console.log(item[1]);

    // })
  };

  useEffect(() => fetchResponse(), []);
  return (
    <div>
      <ul className="cards">
        {moviesData &&
          Object.entries(moviesData).map((item) => (
            <li className="cards_item" key={item}>
              <Card
                movieName={item[1].EventTitle}
                imageUrl={item[1].EventImageUrl}
                wtsPercent={item[1].wtsPerc}
                votes={item[1].wtsCount}
                releaseDate={item[1].ShowDate}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardList;
