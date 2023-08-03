import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "@mui/material";
import { Header, Segment, Button, Grid, Image } from "semantic-ui-react";
import React, { Component } from "react";


const Poll = (props, users, avatarURL, author, user, showResults) => {
  const { question_id } = useParams();
  const question = props.questions[question_id];
  if (!question) {
    return <p>This question doesn't exist </p>;
  }
   const authorId = question.author;
  // const avatarUser = users[authorId];
  // const avatarURL = avatarUser.avatarURL;
  console.log({showResults})
  return (
    <div>
     <Card
        elevation={15}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          width: 700,
        }}
      >
        <>
          <Header
            as="h5"
            textAlign="left"
            style={{
              // borderTop: `3px solid ${tabColor.hex}`,
              marginTop: 0,
              margin: 0,
            }}
          ></Header>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "lightGrey",
              height: 50,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 20,
              }}
            >
              {question.author} asks:
            </div>
          </Card>
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
              {/* <Image src={`${user.avatarURL}`} size="small" circular centered /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Header as="h5" textAlign="center" style={{ color: "black" }}>
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
              {question.optionOne.text}
              <h3>or</h3>
              {question.optionTwo.text}
            </p>
           { console.log(showResults)}

            {showResults ? (
              <>
                <p>You have answered this question.</p>
                <Button
                  style={{
                    height: 40,
                    width: 300,
                    margin: 10,
                  }}
                >
                  Results
                </Button>
              </>
            ) : (
              <Button
                style={{
                  height: 40,
                  width: 300,
                  margin: 10,
                }}
                // onClick={() => handleQuestionClick(id)}
              >
                Answer Poll
              </Button>
            )}
          </div>
            </div>
          </div>
        </>
      </Card>
 
      
      {/* Add your layout and design here */}
    </div>
  );
};

function mapStateToProps({ questions, users }, ownProps) {
  // const question_id = ownProps.question_id; // assuming you pass question_id as a prop

  const user = users[users.authedUser];
  const answeredQuestions = user ? Object.keys(user.answers) : [];
  const showResults = answeredQuestions.includes(question_id);

  return {
    questions,
    users,
    id: question_id,
    user,
    showResults,
  };
}


export default connect(mapStateToProps)(Poll);