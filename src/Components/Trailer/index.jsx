import React from "react";
import { useParams } from "react-router-dom";
import { AiFillLike, AiTwotoneCalendar } from "react-icons/ai";
import "./index.css";

function Trailer() {
  const params = useParams();
  const genre = "Action|Adventure|Thriller";
  return (
    <div className="box-container">
      <div class="box">
        <div class="one">
          <iframe
            title="video"
            width="100%"
            height="200%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
        <div class="two">
          <div className="to-left">
            <h5>Venom</h5>
            <p>ENGLISH</p>
            {genre.split("|").map((value, index) => (
              <span className="genre" key={index}>
                {value}
              </span>
            ))}
            <span className="iconText">
              <p>
                <span>
                  <AiFillLike style={{ color: "white" }} />
                </span>
                100 %
              </p>
              <p style={{ fontSize: "13px" }}>1256 votes</p>
            </span>
            <span className="iconText">
              <AiTwotoneCalendar style={{ color: "white" }} />5 Oct 2019
            </span>
          </div>
          <div className="icon-row">
            <div className="iconText icon-col">
              <AiFillLike style={{ color: "white" }} />
              <p>Will Watch</p>
              <p>(125622)</p>
            </div>
            <div className="iconText icon-col">
              <AiFillLike style={{ color: "white" }} />
              <p>Will Watch</p>
              <p>(125622)</p>
            </div>
            <div className="iconText icon-col">
              <AiFillLike style={{ color: "white" }} />
              <p>Will Watch</p>
              <p>(125622)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
