import React from "react";

const FormItem = ({ children, className, ...rest }) => {
  return (
    <div className={`m-2 ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

export default FormItem;
