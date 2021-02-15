import React from "react";
import { Link } from "react-router-dom";

import "./ContentItem.scss";

import Button from "../../custom-components/button/Button";


const ContentItem = ({ imageUrl, name, id }) => (
  <div className="content-item">
    <div className="content-item-image">
      <img src={imageUrl} alt="robot" />
    </div>
    <div className="content-item-descriptions">
      <span className="name">{name}</span>
    </div>
    <div className="content-item-button">
      <Link to={`/${id}`}>
      <Button>DETAILS</Button>
      </Link>
    </div>
  </div>
);

export default ContentItem;
