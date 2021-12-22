import React from "react";
import { useDispatch } from "react-redux";
import contactsAction from "../../redux/contacts";
import { useTranslation } from "react-i18next";
import "./Phonebook.css";
import { GrUserManager } from "react-icons/gr";

const ContactList = ({ lists, onClick }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
              {t("contactList.delete")}
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
