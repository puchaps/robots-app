/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { setSearchValue } from "../../../redux/reducers/robots/robotsReducer";

import "./Form.scss";

const Form = ({ ...onOtherProps }) => {
  const { register } = useForm();
  const dispatch = useDispatch();
  const enterValue = useSelector(state => state.robots.searchValue);

  const handleInputOnChange = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <form className="from">
      <input {...onOtherProps} ref={register} onChange={handleInputOnChange} value={enterValue}/>
    </form>
  );
};

export default Form;
