import React from "react";
import BRAND_NAME from "../util/brand/index";

const Footer = () => {
  return (
    <div className="p-6 font-bold text-white bg-gray-400">
      <ul>
        <li>
          <a>Terms &amp; Conditions</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Cookie Policy</a>
        </li>
      </ul>
      <a>
        {BRAND_NAME} &copy; {new Date().getFullYear()}
      </a>
    </div>
  );
};

export default Footer;
