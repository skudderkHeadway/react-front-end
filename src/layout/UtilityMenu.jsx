import React from "react";
import Button from "../components/Button";

const UtilityMenu = () => {
  return (
    <div>
      <Button theme="noBg">Login</Button>
      <Button theme="noBg">Sign up</Button>
      <Button theme="stroke">Get a quote</Button>
    </div>
  );
};

export default UtilityMenu;
