/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentItem from "../content-item/ContentItem";
import "./ContentPreview.scss";

import { setRobotsBySearchValue } from "../../../redux/reducers/robots/robotsReducer";

const ContentPreview = () => {
  const dispatch = useDispatch();
  const enterValue = useSelector((state) => state.robots.searchValue);
  const robotsBySearch = useSelector((state) =>
    state.robots.robotsBySearch ? state.robots.robotsBySearch : []
  );

  const handleOnEnterSearchValue = useCallback(() => {
    dispatch(setRobotsBySearchValue());
  }, [dispatch]);

  useEffect(() => {
    handleOnEnterSearchValue();
  }, [handleOnEnterSearchValue, enterValue]);

  return (
    <div className="content-preview">
      {robotsBySearch.map((item) => (
        <ContentItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContentPreview;
