import React from "react";
import "./index.css";

const STYLES = ["btn-primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) {
  const chechButtonStyle = STYLES.includes[buttonStyle]
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes[buttonSize] ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes[buttonColor] ? buttonColor : null;

  return (
    <button
      className={`btn ${chechButtonStyle} 
        ${checkButtonSize}
        ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
