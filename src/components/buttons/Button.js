import React from "react";

//CSS
import "./Button.css";

const Button = ({ text, active }) => {
  return (
    <div className={`button ${active ? "active" : ""}`}>{text && text}</div>
  );
};

export default Button;
