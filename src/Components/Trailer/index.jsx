import React from "react";
import {
  AiFillLike,
  AiTwotoneCalendar,
  AiOutlineQuestionCircle,
  AiFillDislike
} from "react-icons/ai";
import getVideoId from "../../Helpers/embedYt";
import getThumbNail from "../../Helpers/fetchThumbnail";
import "./index.css";

function Trailer(props) {
  const {
    movieName,
    trailerUrl,
    genre,
    language,
    wtsPercent,
    releaseDate,
    willWatch,
    wontWatch,
    mayBeWatch,
    votes
  } = props;
  const src = getVideoId(trailerUrl);
  const thumbNail = getThumbNail(trailerUrl);
  const srcdoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${src}/?autoplay=1><img src=${thumbNail} alt='AltTagContent'><span>▶</span></a>`;
  return (
    <div className="box-container">
      <div className="box">
        <div className="one">
          <iframe
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={movieName}
            srcDoc={srcdoc}
            className="iframe-style"
          ></iframe>
        </div>
        <div className="two">
          <div className="to-left">
            <p>{movieName}</p>
            <p>{language}</p>
            <div>
              {genre.split("|").map((value, index) => (
                <span className="genre" key={index}>
                  {value}
                </span>
              ))}
            </div>
            <div className="inline-style">
              <div className="iconText">
                <p>
                  <span>
                    <AiFillLike style={{ color: "white" }} />
                  </span>
                  {wtsPercent} %
                </p>
                <p style={{ fontSize: "13px" }}>{votes} votes</p>
              </div>
              <div className="iconText">
                <div style={{ marginTop: "15px" }}>
                  <AiTwotoneCalendar style={{ color: "white" }} />
                  {releaseDate}
                </div>
              </div>
            </div>
            <br />
            <div className="icon-row">
              <div className="iconText icon-col">
                <AiFillLike style={{ color: "#00FA9A" }} />
                <p className="green">Will Watch</p>
                <p className="green">({willWatch})</p>
              </div>
              <div className="iconText icon-col">
                <AiOutlineQuestionCircle style={{ color: "#CCCC00	" }} />
                <p className="yellow">Maybe</p>
                <p className="yellow">({mayBeWatch})</p>
              </div>
              <div className="iconText icon-col">
                <AiFillDislike style={{ color: "#F08080" }} />
                <p className="red">Won't Watch</p>
                <p className="red">({wontWatch})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
