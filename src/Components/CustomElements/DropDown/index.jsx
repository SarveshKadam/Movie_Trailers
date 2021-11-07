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

// const App = () => {
//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       <div className="w-1/2 h-16  text-black-100 flex items-center justify-center text-xl">
//         <SearchBar />
//       </div>
//     </div>
//   );
// };

export default SearchBar;
