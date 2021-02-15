import React from "react";

import "./Content.scss";

import Form from "../../custom-components/form/Form";
import ContentPreview from "../content-preview/ContentPreview";

const Content = () => (
  <div className="content">
    <Form type="search" name="search" placeholder="Search" />
    <ContentPreview />
  </div>
);

export default Content;
