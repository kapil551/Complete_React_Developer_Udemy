import React from "react";

import "./customButton.scss";

const CustomButton = ({ children }) => {
  // console.log(children);
  return (
    <button className="custom-button"> {children} </button>
  );
};

export default CustomButton;
