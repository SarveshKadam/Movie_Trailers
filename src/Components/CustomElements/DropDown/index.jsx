import React, { useState, useEffect } from "react";
import "./index.css";

const SearchBar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [selections, setSelections] = useState([]);

  const {
    defaultTitle,
    dropDownMenu,
    fetchSelectedLang,
    fetchSelectedGenre
  } = props;
  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  useEffect(() => {
    fetchSelectedLang && fetchSelectedLang(selections);
    fetchSelectedGenre && fetchSelectedGenre(selections);
  }, [selections]);

  const handleChange = (event) => {
    if (event.target.checked) {
      return setSelections([...selections, event.target.name]);
    }
    const filtered = selections.filter((name) => name !== event.target.name);
    return setSelections(filtered);
  };

  return (
    <div className="w-full">
      <div>
        <div onClick={toggleExpanded}>
          <div className={`link ${expanded ? "up-arrow" : "down-arrow"}`}>
            {selections.length
              ? selections.map((name, i) => (
                  <span key={i}>
                    {i ? ", " : null}
                    {name}
                  </span>
                ))
              : defaultTitle}
          </div>
        </div>
        {expanded && (
          <div className="input-border">
            {dropDownMenu.map((platform) => (
              <label htmlFor="one" className="block" key={platform}>
                <input
                  type="checkbox"
                  name={platform}
                  value={platform}
                  onChange={handleChange}
                  className="checkBox"
                />
                {platform}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
