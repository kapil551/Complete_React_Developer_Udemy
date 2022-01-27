import React from "react";

import "./customButton.scss";

const CustomButton = ({ children, isgooglesignin, ...otherProps }) => {
  // console.log(children);
  return (
    <button
    className={`${isgooglesignin ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
  );
};

export default CustomButton;
