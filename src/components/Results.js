import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { styles } from "../utils/helpers";


const YourVoteLabel = () => (
  <div color="orange" ribbon="right" className="vote">
    <div name="check circle outline" size="big" className="compact" />
    <div style={{ float: "right" }}>
      Your
      <br />
      Vote
    </div>
  </div>
);
export class Results extends Component {
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

    let option1 = styles.secondary,
      option2 = styles.secondary;
    if (optionOneVotes > optionTwoVotes) {
      option1 = styles.primary;
    } else if (optionTwoVotes > optionOneVotes) {
      option2 = styles.primary;
    }

    return (
      <Fragment>
        <header as="h3">
          Results:
          <div style={{ fontWeight: "bold" }}>Would you rather</div>
        </header>
        <div
          color={option1.color}
          style={{ backgroundColor: `${option1.bgColor}` }}
        >
          {userVote === "optionOne" && <YourVoteLabel />}
          <p style={{ fontWeight: "bold" }}>{question.optionOne.text}</p>
          <div
            percent={((optionOneVotes / votesTotal) * 100).toFixed(2)}
            progress
            color={option1.color}
          >
            {optionOneVotes} out of {votesTotal} votes
          </div>
        </div>
        <div
          color={option2.color}
          style={{ backgroundColor: `${option2.bgColor}` }}
        >
          {userVote === "optionTwo" && <YourVoteLabel />}

          <p style={{ fontWeight: "bold" }}>{question.optionTwo.text}</p>
        </div>
        <button size="tiny" floated="right" onClick={this.handleClick}>
          Back
        </button>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user,
  };
}

export default connect(mapStateToProps)(Results);
