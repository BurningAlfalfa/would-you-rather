import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Question from "./Question.tsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// import Results from "./Results";

const Dashboard = ({ unansweredQuestions, answeredQuestions, user }) => {
    useEffect(() => {
    console.log('Dashboard updated due to change in questions');
  }, [unansweredQuestions, answeredQuestions]);
  const [selectedTab, setSelectedTab] = useState(0);

  // const selectedUser = users[authedUser];
  //const userName =  selectedUser.name
  //console.log(users[id === authedUser])

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderQuestions = (questions) => {
      console.log('renderQuestions called with questions:', questions);  // Add logging here

    return questions.map((question) => (
      <Question key={question.id} id={question.id} />
    ));
  };

  return (
    <div>
    

       <Box
        style={{}}
      //   sx={{
      //     borderColor: "grey",
      //     borderWidth: 1,   // This ensures the border exists
      //     borderStyle: "solid",
      //   }}
       >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //border: "1px solid grey",
          }}
          // sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Unanswered" />
            <Tab label="Answered" />
          </Tabs>
        </Box>
        {selectedTab === 0 && (
          <div
            style={{
              gap: 30,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: 20,
            }}
          >
            {renderQuestions(unansweredQuestions)}
          </div>
        )}
        {selectedTab === 1 && (
          <div
            style={{
              gap: 30,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: 20,
            }}
          >
            {renderQuestions(answeredQuestions)}
          </div>
        )}
      </Box> 
    </div>
  );
};

const mapStateToProps = (state) => {
  const { questions, users, answers } = state;
  const { authedUser } = users;
  console.log({ users, authedUser });
  const user = authedUser ? users[authedUser] : null;

  const questionsArray = Object.values(questions);
  const sortedQuestionsArray = questionsArray.sort((a, b) => {
    const timestampA = a.timestamp || a.timeStamp;
    const timestampB = b.timestamp || b.timeStamp;
    return timestampB - timestampA;
});

  const userAnsweredQuestions = user ? Object.keys(user.answers) : [];

  // Filter the questions based on whether their id is in the user's answered questions
  const unansweredQuestions = sortedQuestionsArray.filter(
    (question) => !userAnsweredQuestions.includes(question.id)
  );
  const answeredQuestions = sortedQuestionsArray.filter((question) =>
    userAnsweredQuestions.includes(question.id)
  );

  //console.log("User:", user);
  // console.log("authedUser:", authedUser);

  const selectedUser = user ? users[authedUser] : null;
  const userName = selectedUser ? selectedUser.name : null;
  const userAvatar = selectedUser ? selectedUser.avatarURL : null;
  console.log('sortedQuestionsArray:', sortedQuestionsArray);  // Add logging here
  console.log('unansweredQuestions:', unansweredQuestions);  // Add logging here
  console.log('answeredQuestions:', answeredQuestions); 
console.log({authedUser})
  return {
    unansweredQuestions,
    answeredQuestions,
    user,
    authedUser
  };
};

export default connect(mapStateToProps)(Dashboard);
