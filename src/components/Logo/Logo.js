import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
    </div>
  );
};

export default Logo;
