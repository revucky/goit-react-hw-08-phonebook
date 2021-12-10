import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ lists, onClick, items }) => {
  return (
    <div>
      <ul>
        {lists.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button type="button" id={id} onClick={onClick}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  lists: PropTypes.array,
};

export default ContactList;
