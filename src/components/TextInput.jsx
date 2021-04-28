import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = React.forwardRef(({ className, hasError, ...rest }, ref) => {
  const errorClasses = "has-error border-2 border-red-600";

  return (
    <input
      type="text"
      className={`p-2 m-1 text-black ${hasError && errorClasses} ${
        styles.textInput
      } ${className || ""}`}
      {...rest}
      ref={ref}
    />
  );
});

export default TextInput;
