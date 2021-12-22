import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contactsAction.js";
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
              onClick={(e) => dispatch(deleteContacts(e.target.id))}
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
