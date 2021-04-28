import React from "react";
import Button from "../components/Button";

const MainNavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Button theme={"noBg"}>Feature</Button>
        </li>
        <li>
          <Button theme={"noBg"}>Domain</Button>
        </li>
        <li>
          <Button theme={"noBg"}>Pricing</Button>
        </li>
        <li>
          <Button theme={"noBg"}>Enterprise</Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavMenu;
