import React from "react";

//CSS
import "./Button.css";

const Button = ({ text }) => {
  return <div className="button">{text && text}</div>;
};

export default Button;
