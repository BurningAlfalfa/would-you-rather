import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Header, Segment, Button, Grid, Image } from "semantic-ui-react";
import { grey } from "@mui/material/colors";
import { Card } from "@mui/material";
//import { tyler, john, sara } from "..assests/images";
const color = {
  green: {
    name: "green",
    hex: "#21ba45",
  },
  blue: {
    name: "blue",
    hex: "#2185d0",
  },
  teal: {
    name: "teal",
    hex: "#009c95",
  },
  grey: {
    name: null,
    hex: "#767676",
  },
};
class Question extends Component {
  toQuestion = (e, id) => {
    e.preventDefault();
  };

  render() {
    //console.log(question);

    const { question, unanswered, questions, id, answers, user, users } =
      this.props;
    if (!question === null) {
      return <p>This question doesnt exist </p>;
    }
    const tabColor = unanswered === true ? color.green : color.blue;
    // const { author } = questions;
    const { avatar, optionOne, timestamp, option2, text } = user;
    return (
      <Card
        elevation={15}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <>
          <Header
            as="h5"
            textAlign="left"
            style={{
              borderTop: `2px solid ${tabColor.hex}`,
              marginBottom: "1em",
            }}
          >
            {questions[id].author} asks:
          </Header>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
              }}
            >
              <Image src={`${user.avatarURL}`} size="small" circular centered />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Header as="h5" textAlign="center">
                Would you rather
              </Header>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  {questions[id].optionOne.text}
                  <br />
                  or...
                </p>
                <Button
                  color={tabColor.name}
                  size="tiny"
                  fluid
                  onClick={this.handleClick}
                >
                  {unanswered === true ? "Answer Poll" : "Results"}
                </Button>
              </div>
            </div>
          </div>
        </>
      </Card>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  //const user = authedUser ? users[authedUser] : null;
  const user = users[users.authedUser];
  console.log({ id });
  //const question = users[user].questions;

  const unanswered = !Object.keys(user.answers).includes(id);
  const answered = user.questions.includes(id);
  //console.log(authedUser);
  console.log(questions);
  return {
    questions,
    id,
    unanswered,
    answered,
    user,
  };
}
export default connect(mapStateToProps)(Question);
/*<SegmentGroup>
      <Header className="header"  style={{boarderTop: "2px solid ${tabColor.hex}"}}
      
      > </Header>
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
      </SegmentGroup> */
