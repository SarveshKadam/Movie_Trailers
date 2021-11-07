import React, { useState } from "react";
import Modal from "../Modal/index";
import Trailer from "../Trailer/index";
import { AiFillLike, AiOutlinePlayCircle } from "react-icons/ai";
import "./index.css";
function index(props) {
  const [showModal, setShowModal] = useState(false);
  const {
    imageUrl,
    trailerUrl,
    movieName,
    wtsPercent,
    votes,
    releaseDate,
    genre,
    language,
    willWatch,
    wontWatch,
    mayBeWatch
  } = props;
  function defaultSrc(e) {
    e.target.src = require("../../../public/images/dummy_img.png");
  }
  function hanldeTrailer(data) {
    console.log("Which Movie", data);
    setShowModal(true);
  }
  return (
    <div>
      <div className="card" onClick={() => hanldeTrailer(movieName)}>
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
              <AiFillLike style={{ color: "#00fa9a" }} />
            </span>
            {wtsPercent} %
          </p>
          <p style={{ fontSize: "13px" }}>{votes} votes</p>
        </div>
        <div>
          <p className="white-text">{movieName}</p>
        </div>
      </div>
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <Trailer
          movieName={movieName}
          trailerUrl={trailerUrl}
          wtsPercent={wtsPercent}
          releaseDate={releaseDate}
          willWatch={willWatch}
          wontWatch={wontWatch}
          mayBeWatch={mayBeWatch}
          genre={genre}
          language={language}
          votes={votes}
        />
      </Modal>
    </div>
  );
}

export default index;
