import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ onChange, value }) => {
  return (
    <div className="filterWrap">
      <p className="title-filter">Пошук по імені</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={value}
        placeholder="Почни вводити імʼя"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
