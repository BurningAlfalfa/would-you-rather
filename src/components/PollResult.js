import React, { Component } from "react";
import { connect } from "react-redux";

class PollResult extends Component {
  render() {
    const { question } = this.props;

    if (!question) {
      return <p>This question doesn't exist </p>;
    }

    return (
      <div>
        <h2>{question.optionOne.text}</h2>
        <h3>or</h3>
        <h2>{question.optionTwo.text}</h2>
        {/* Add your layout and design here */}
      </div>
    );
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;

  return {
    question: questions[id],
  };
}

export default connect(mapStateToProps)(PollResult);
