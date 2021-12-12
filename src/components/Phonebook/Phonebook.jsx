import React from "react";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Fliter/Filter";
import ContactList from "./ContactList";
import * as storage from "../../services/localStorage";

const STORAGE_KET = "contacts";

class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };
  //

  componentDidMount() {
    const savedContact = storage.get(STORAGE_KET);
    if (savedContact) {
      this.setState({ contacts: savedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save(STORAGE_KET, contacts);
    }
  }

  //зміни
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  // створення
  handleCreate = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  //видалення
  handleDelete = (ev) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== ev.target.id
      ),
    }));
  };

  handleFilter = (value) => this.setState({ filter: value });
  getFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { handleCreate, handleDelete, handleFilter, getFilter } = this;
    const { filter, contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm allContacts={contacts} onSubmit={handleCreate} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList lists={getFilter()} onClick={handleDelete} />
      </div>
    );
  }
}

export default Phonebook;
