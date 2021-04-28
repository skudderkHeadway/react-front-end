import React from "react";

const TextLink = ({ children, className, ...rest }) => {
  return (
    <a className={`underline ${className || ""}`} {...rest}>
      {children}
    </a>
  );
};

export default TextLink;
