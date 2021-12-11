import React, { Component } from "react";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = this.checkIfDuplicate();
    if (isDuplicate) {
      return alert(`${this.state.name} already exist in your contacts!`);
    }
    this.props.onSubmit({ ...this.state, id: nanoid(3) });
    this.reset();
  };
  checkIfDuplicate = () =>
    this.props.allContacts.some(({ name }) => name === this.state.name);

  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const { handleChange, state, handleSubmit } = this;
    const { name, number } = state;
    const isBtnDis = Object.values(this.state).some((value) => {
      return !value;
    });
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=" Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan "
            required
          />
        </label>
        <br />
        <label>
          Number
          <input
            type="tel"
            name="number"
            // id={nanoid(3)}
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=" Phone number must be digits and can contain spaces, dashes, parentheses and can start with + "
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isBtnDis}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
