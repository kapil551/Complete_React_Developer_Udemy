import React from "react";

import "./customButton.scss";

const CustomButton = ({ children, ...otherProps }) => {
  // console.log(children);
  return (
    <button 
        className="custom-button"
        {...otherProps}
    > 
        {children} 
    </button>
  );
};

export default CustomButton;
