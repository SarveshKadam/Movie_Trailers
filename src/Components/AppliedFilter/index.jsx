import React from "react";
import "./index.css";
function AppliedFilter({ getSelectedLang, getSelectedGenre }) {
  return (
    <div className="filter-body">
      <span className="white"> Applied Filters </span>
      {getSelectedLang.map((value, index) => (
        <span key={index} className="rounded-Btn">
          {value}
        </span>
      ))}
      {getSelectedGenre.map((value, index) => (
        <span key={index} className="rounded-Btn">
          {value}
        </span>
      ))}
    </div>
  );
}

export default AppliedFilter;
