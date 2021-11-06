import React from "react";
import { AiFillLike, AiOutlinePlayCircle } from "react-icons/ai";
import "./index.css";
function index(props) {
  const { imageUrl, movieName, wtsPercent, votes, releaseDate } = props;
  function defaultSrc(e) {
    e.target.src = require("../../../public/images/dummy_img.png");
  }
  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={movieName}
        style={{ width: "100%" }}
        onError={defaultSrc}
      />
      <div className="release-date">
        <p className="white-text">{releaseDate.toString().split(",")[0]}</p>
      </div>
      <div className="play-button">
        <AiOutlinePlayCircle style={{ color: "white", fontSize: "45px" }} />
      </div>
      <div className="container">
        <p>
          <span>
            <AiFillLike style={{ color: "green" }} />
          </span>
          {wtsPercent} %
        </p>
        <p style={{ fontSize: "13px" }}>{votes} votes</p>
      </div>
      <div>
        <p className="white-text">{movieName}</p>
      </div>
    </div>
  );
}

export default index;
