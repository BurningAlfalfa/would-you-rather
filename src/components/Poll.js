import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "@mui/material";
import { Header, Segment, Button, Grid, Image } from "semantic-ui-react";
import React, { Component } from "react";


const Poll = (props, users, avatarURL, author, user) => {
  const { question_id } = useParams();
  const question = props.questions[question_id];
  if (!question) {
    return <p>This question doesn't exist </p>;
  }
   const authorId = question.author;
  // const avatarUser = users[authorId];
  // const avatarURL = avatarUser.avatarURL;
  console.log({users})
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
                <Button
                  style={{
                    height: 40,
                    width: 300,
                    margin: 10,
                    //backgroundColor: `solid ${tabColor.hex}`,
                  }}
                  // onClick={() => handleQuestionClick(id)}
                >
                {/* {unanswered === true ? "Answer Poll" : "Results"} */}
                </Button>
              </div>
            </div>
          </div>
        </>
      </Card>
 
      
      {/* Add your layout and design here */}
    </div>
  );
};

function mapStateToProps({ questions, users, } ,{id}) {
  const user = users[users.authedUser];

  return {
    questions,
    users,
    id,
    user
  };
}

export default connect(mapStateToProps)(Poll);