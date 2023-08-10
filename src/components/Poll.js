import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { Card } from "@mui/material";
import { Header, Segment, Button, Grid, Image } from "semantic-ui-react";
import React, { Component ,useState} from "react";


const Poll = (props ) => {
  const { question_id } = useParams();
  const question = props.questions[question_id];
  const [optionOneVotes, setOptionOneVotes] = useState(0);
  const [optionTwoVotes, setOptionTwoVotes] = useState(0);
  if (!question) {
    return <p>This question doesn't exist </p>;
  }
  const user = props.user;
  const answeredQuestions = user ? Object.keys(user.answers) : [];
  const showResults = answeredQuestions.includes(question_id);
  

  // const handleButtonClick = () => {
  //   setOptionOneVotes(question.optionOne.votes.length);
  //   setOptionTwoVotes(question.optionTwo.votes.length);
  // };
  // const avatarUser = users[authorId];
  // const avatarURL = avatarUser.avatarURL;
  console.log({showResults})
  return (
    <div style={
      {justifyContent: "center",
    display: "flex",}
    }>
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
              <Image src={`${user.avatarURL}`} size="small" circular centered />
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
                            // onClick={handleButtonClick}

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
                          // onClick={handleButtonClick}

                // onClick={() => handleQuestionClick(id)}
              >
                Answer Poll
              </Button>
            )}
            <div>
   Option One Votes: {optionOneVotes}
</div>
<div>
   Option Two Votes: {optionTwoVotes}
</div>

          </div>
            </div>
          </div>
        </>
      </Card>
 
      
      {/* Add your layout and design here */}
    </div>
  );
};

function mapStateToProps({ questions, users, authedUser }, { questions}) {
  const question = questions[id];
  const user = users[authedUser];

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const userVote = user.answers[id];
 
  const answeredQuestions = user ? Object.keys(user.answers) : [];
  const showResults = answeredQuestions.includes(question_id);

  // let option1 = styles.secondary,
  //   option2 = styles.secondary;
  // if (optionOneVotes > optionTwoVotes) {
  //   option1 = styles.primary;
  // } else if (optionTwoVotes > optionOneVotes) {
  //   option2 = styles.primary;
  // }

  return {
    question,
    user,
    questions,
    users,
    // id: question_id,
    userVote,
    showResults
    // showResults: !!userVote, // showResults will be true if user has answered the question
  };
}
export default connect(mapStateToProps)(Poll);

// function mapStateToProps({ questions, users }, ownProps) {
//   // const question_id = ownProps.question_id; // assuming you pass question_id as a prop

//   const user = users[users.authedUser];
//   const answeredQuestions = user ? Object.keys(user.answers) : [];
//   const showResults = answeredQuestions.includes(question_id);

//   return {
//     questions,
//     users,
//     id: question_id,
//     user,
//     showResults,
