import React from "react";

import "./ContentItemDetails.scss";

const ContentItemDetails = ({
  imageUrl,
  name,
  email,
  phone,
  address: { street, city },
  company: { name: companyName },
}) => (
  <div className="content-details">
    <div className="content-details-img">
      <img src={imageUrl} alt="robot" />
    </div>
    <div className="content-details-descriptions">
      <div className="name-email-phone">
        <span>NAME: {name}</span>
        <span>EMAIL: {email}</span>
        <span>PHONE: {phone}</span>
      </div>
      <div className="address-company">
        <div className="address">
          ADDRESS:
          <span className="street">Street: {street}</span>
          <span className="city">City: {city}</span>
        </div>
        <div className="company">
          COMPANY:
          <span>{companyName}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ContentItemDetails;
