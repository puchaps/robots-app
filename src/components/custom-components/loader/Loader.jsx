import React from "react";

import "./Loader.scss";

const Loader = ({ children, onLoader }) => {
  if (onLoader) {
    return (
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/159/159075.svg?token=exp=1613152014~hmac=89da90b3d7101131b5031c0e6c35dcfd"
        alt=""
        className="loader-img"
      />
    );
  }
  return <div className="loader">{children}</div>;
};

export default Loader;
