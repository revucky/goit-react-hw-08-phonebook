import { useEffect } from "react";
// import React, { Component } from "react";
// import { useLocalStorage } from "react-use";

import ContactForm from "../ContactForm/ContactForm";
import { useSelector, useDispatch } from "react-redux";

import * as contactsOperations from "../../redux/contacts/contactsOperation";
import Filter from "../Fliter/Filter";
import ContactList from "./ContactList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import * as storage from "../../services/localStorage";
import { useTranslation } from "react-i18next";
import "./Phonebook.css";
import { ImAddressBook } from "react-icons/im";

// const STORAGE_KEY = "contacts";
const { getContact, deleteContacts } = contactsOperations;

const Phonebook = () => {
  // // const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, []);
  // const [filter, setFilter] = useState("");
  const { t } = useTranslation();
  const contacts = useSelector((state) => state.contacts.data.items);
  const filter = useSelector((state) => state.contacts.filter);

  // const loading = useSelector((state) => state.contacts.data.loading);
  // const error = useSelector((state) => state.contacts.data.error);
  const dispatch = useDispatch();
  // console.log(contactsAction);

  //локал сторадж
  // useEffect(() => {
  //   storage.save(STORAGE_KEY, contacts);
  // }, [contacts]);
  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);
  // додавання
  // const handleCreate = (newContact) => {
  //   dispatch(createContacts(newContact));
  //   // setContacts((prevState) => [...prevState, newContact]);
  // };
  // const { deleteContacts } = contactsAction.actions;
  // видалення
  const handleDelete = (id) => {
    // setContacts(contacts.filter((contact) => contact.id !== ev.target.id));
    dispatch(deleteContacts(id));
  };
  // пошук по імені
  // const handleFilter = (value) => dispatch(actions.changeFilter());
  const getFilter = () => {
    return contacts.length
      ? contacts.filter((el) =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  };
  return (
    <div className="main">
      <h1 className="hero">
        {/* <AiFillPlusSquare color="#f57b0b" className="icon" /> */}
        <ImAddressBook color="#f57b0b" className="icon" />
        {t("phonebook.title")}
      </h1>
      <ContactForm allContacts={contacts} />
      <h2 className="title">{t("phonebook.subtitle")}</h2>
      <Filter />
      <ContactList lists={getFilter()} onClick={handleDelete} />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
// const mapStateToProps = (state) => ({});
// const mapDispatchToPTops = (dispatch) => ({});

// const connectContacts = connect(mapStateToProps, mapDispatchToPTops);
export default Phonebook;

// export default class Phonebook extends React.Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const savedContact = storage.get(STORAGE_KEY);
//     if (savedContact) {
//       this.setState({ contacts: savedContact });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       storage.save(STORAGE_KEY, contacts);
//     }
//   }

//   //зміни;
//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   // створення;
//   handleCreate = (newContact) => {
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };
//   //видалення
//   handleDelete = (ev) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== ev.target.id
//       ),
//     }));
//   };

//   handleFilter = (value) => this.setState({ filter: value });
//   getFilter = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { handleCreate, handleDelete, handleFilter, getFilter } = this;
//     const { filter, contacts } = this.state;

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm allContacts={contacts} onSubmit={handleCreate} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={handleFilter} />
//         <ContactList lists={getFilter()} onClick={handleDelete} />
//       </div>
//     );
//   }
// }
