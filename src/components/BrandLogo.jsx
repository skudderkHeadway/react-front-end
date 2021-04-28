import React from "react";
import BRAND_NAME from "../util/brand/index";

const BrandLogo = () => {
  return (
    <div className="inline-flex text-3xl text-green-800 font-bold p-5 bg-green-100">
      {BRAND_NAME}
    </div>
  );
};

export default BrandLogo;
