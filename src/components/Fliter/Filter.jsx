import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
