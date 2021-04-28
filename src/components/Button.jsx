import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, className, theme, ...rest }) => {
  const getThemeClasses = () => {
    switch (theme) {
      case "noBg":
        return "no-bg";
      case "stroke":
        return "stroke border border-green-600 text-green-600 bg-white";
      case "primary":
      default:
        return "primary bg-green-600";
    }
  };

  return (
    // TODO: implement theme prop
    <button
      className={`p-3 rounded ${getThemeClasses()} ${styles.button} ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
