import React from "react";
import "./Phonebook.css";

const ContactList = ({ lists, onClick }) => {
  return (
    <div>
      <ul className="list">
        {lists.map(({ name, number, id }) => (
          <li className="list-item" key={id}>
            {name}: {number}
            <button
              className="btn btn-list"
              type="button"
              id={id}
              onClick={onClick}
            >
              видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   lists: PropTypes.array,
// };

export default ContactList;
