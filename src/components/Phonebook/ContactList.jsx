import React from "react";
import { useDispatch } from "react-redux";
import contactsAction from "../../redux/contacts";
import "./Phonebook.css";
import { GrUserManager } from "react-icons/gr";

const ContactList = ({ lists, onClick }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="list">
        {lists.map(({ name, number, id }) => (
          <li className="list-item" key={id}>
            <GrUserManager className="icon" /> {name}: {number}
            <button
              className="btn btn-list"
              type="button"
              id={id}
              onClick={() => onClick(id)}
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
