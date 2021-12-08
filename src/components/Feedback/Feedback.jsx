import React from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "../../services/Statistics";
import Notification from "../../services/Notification";
import Section from "../../services/Section";

class Feedback extends React.Component {
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
        <h2>Please leave feedback</h2>
        <FeedbackOptions handleClick={this.handleClick} />
        <h3>Statics</h3>
        <Notification message="There is no feedback" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good + this.state.neutral + this.state.bad}
          positivePercentage={this.state.good}
        />

        <Section title="" />
      </div>
    );
  }
}

Feedback.propTypes = {};

export default Feedback;
