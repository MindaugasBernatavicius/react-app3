import React from "react";
import "./Button.css";

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button
        id="my-button"
        className="btn btn-danger"
        onClick={(e) => {
          handleClick();
          e.currentTarget.blur();
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
