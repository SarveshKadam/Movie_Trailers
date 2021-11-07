import React, { useState } from "react";
import Modal from "../Modal/index";
import Trailer from "../Trailer/index";
import LazyImage from "../LazyImage/index";
import { AiFillLike, AiOutlinePlayCircle } from "react-icons/ai";
import "./index.css";
function Card(props) {
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

  //open the modal
  function hanldeTrailer() {
    setShowModal(true);
  }
  return (
    <div>
      <div className="card" onClick={() => hanldeTrailer()}>
        <LazyImage src={imageUrl} alt={movieName} />
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

export default Card;
