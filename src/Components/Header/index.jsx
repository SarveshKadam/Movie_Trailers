import React, { useState, useEffect } from "react";
import DropDown from "../CustomElements/DropDown/index";
import { FaBars, FaTimes } from "react-icons/fa";
import content from "../../Content/genre.json";
import "./index.css";

function Navbar({ languageList, getSelectedLang, getSelectedGenre }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { allGenres } = content;
  const handleClick = () => setClick((prev) => !prev);

  const closeMobileMenu = () => setClick(false);

  function fetchSelectedLang(data) {
    getSelectedLang && getSelectedLang(data);
  }

  function fetchSelectedGenre(data) {
    getSelectedGenre && getSelectedGenre(data);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container nav-container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            Movie Trailers
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="nav-links">
                <DropDown
                  defaultTitle="All Languages"
                  dropDownMenu={languageList}
                  fetchSelectedLang={fetchSelectedLang}
                />
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links">
                <DropDown
                  defaultTitle="All Genre"
                  dropDownMenu={allGenres}
                  fetchSelectedGenre={fetchSelectedGenre}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
