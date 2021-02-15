import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => (
  <header>
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/100/100514.svg?token=exp=1613154059~hmac=7a38dea577da63e21312aeb5f6b48ed6"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-links">
        <Link to="/about">
          <span className="header-about">ABOUT</span>
        </Link>
        <Link to="/">
          <span className="header-home">HOME</span>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
