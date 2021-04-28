import React from "react";

const ErrorMsg = ({ children, className, ...rest }) => {
  return (
    <div className={`text-red-200 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export default ErrorMsg;
