import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

//import { tyler, john, sara } from "..assests/images";

class Question extends Component {
  toQuestion = (e, id) => {
    e.preventDefault();
  };

  render() {

    const { question } = this.props;
    if (question === null) {
      return <p>This question doesnt exist </p>;
    }

    const { name, avatar, optionOne, timestamp, option2, text } = question;

    return (
      <div
        className="question"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={avatar} alt={`Avatar of ${name} `} className="avatar" />
        <div className="question-info">
          <span>{name} asks:</span>
          <div>
             <p>{`Option 1: ${question.option1}`}</p>
            <p>{`Option 2: ${question.option2}`}</p>
            <button
              className="answer-poll"
              onClick={(e) => this.toQuestion(e, question.id)}
            >
              Answer Poll
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}
export default connect(mapStateToProps)(Question);
