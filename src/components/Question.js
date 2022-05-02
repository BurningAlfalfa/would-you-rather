import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

//import { tyler, john, sara } from "..assests/images";

class Question extends Component {
  toQuestion = (e, id) => {
    e.preventDefault();
  };

  render() {
    console.log(this.props);

    const { question } = this.props;
    if (question === null) {
      return <p>This question doesnt exist </p>;
    }

    const { name, avatar, option1, timestamp, option2, text } = question;

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
            <button
              className="answer-poll"
              onCliick={(e) => this.toQuestion(e, question.id)}
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
    question: formatQuestion(question, users[question.author], authedUser),
  };
}
export default connect(mapStateToProps)(Question);
