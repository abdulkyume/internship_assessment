import React from "react";
import "./Button.css";

const Button = ({ state, active, setActive }) => {
  
  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <button
      className="commonBtnStyle"
      style={active}
      onClick={handleClick}
      id={state}
    >
      Layout {state}
    </button>
  );
};

export default Button;
