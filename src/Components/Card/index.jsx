import React from "react";
import { AiFillLike, AiOutlinePlayCircle } from "react-icons/ai";
import "./index.css";
function index(props) {
  const { imageUrl } = props;
  const data = {
    EventGroup: "EG00076279",
    EventTitle: "Gone Kesh",
    EventCode: "ET00098458",
    EventImageCode: "gone-kesh-et00098458-11-03-2019-04-35-45",
    EventImageUrl:
      "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/medium/gone-kesh-et00098458-11-03-2019-04-35-45.jpg",
    EventLanguage: "Hindi",
    EventGenre: "Comedy|Drama",
    EventURL: "gone-kesh",
    EventName: "Gone Kesh",
    ShowDate: "29 Mar, 2019"
  };

  return (
    <div className="card">
      <img
        src={data.EventImageUrl}
        alt={data.EventName}
        style={{ width: "100%" }}
      />
      <div className="release-date">
        <p className="white-text">
          <strong>Mar</strong> 2020
        </p>
      </div>
      <div className="play-button">
        <AiOutlinePlayCircle style={{ color: "white", fontSize: "45px" }} />
      </div>
      <div className="container">
        <p>
          <span>
            <AiFillLike style={{ color: "green" }} />
          </span>
          100 %
        </p>
        <p>1176 votes</p>
      </div>
      <div>
        <p className="white-text">{data.EventName}</p>
      </div>
    </div>
  );
}

export default index;
