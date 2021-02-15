/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContentItemDetails from "../content-item-details/ContentItemDetails";

const ContentDetails = () => {
  const { robotId } = useParams();
  const robotById = useSelector(
    (state) =>
      state.robots.robots &&
      state.robots.robots.find((item) => item.id === +robotId)
  );

  return (
    <>
     {robotById && <ContentItemDetails {...robotById}/>}
    </>
  );
};

export default ContentDetails;
