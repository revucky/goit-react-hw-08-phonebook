import React from "react";
import PropTypes from "prop-types";

class Phonebook extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const name = e.target.id;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good * 100) / 100);
  // };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
      </div>
    );
  }
}

Feedback.propTypes = {};

export default Phonebook;
