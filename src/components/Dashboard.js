import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Question from "./Question";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Results from "./Results";

const Dashboard = ({ unansweredQuestions, answeredQuestions, user }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  // const selectedUser = users[authedUser];
  //const userName =  selectedUser.name
  //console.log(users[id === authedUser])

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderQuestions = (questions) => {
    return questions.map((question) => (
      <Question key={question.id} id={question.id} />
    ));
  };

  return (
    <div>
      {/* <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // height: 20,
          // margin:0,
          // padding:0
        }}
        className="navbar"
      >
        <ul style={{display: "flex"}}>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/new-poll">New Poll</Link>
          </ul>
          <ul>
            <Link to="/leaderboard">Leaderboard</Link>
          </ul>
        </ul>
        <div style={{display:"flex"}}className="user-info">
          <img style={{width:40,
          height:40}} src={user.avatarURL} alt="User Avatar" />
          {user && <span>{<ul key={user.id}>{user.name}</ul>}</span>}
          <button>Logout</button>
        </div>
      </nav> */}
      <h3 className="center">Your Timeline</h3>
      <Box
        style={{}}
        sx={{
          borderColor: "grey",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          sx={{ borderBottom: 1, borderColor: "divider" }}
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
            }}
          >
            <h4>Unanswered Questions</h4>
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
            }}
          >
            <h4>Answered Questions</h4>
            {renderQuestions(answeredQuestions)}
          </div>
        )}
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { questions, users, answers } = state;
  // console.log(users);
  const { authedUser } = users;
  console.log({ users, authedUser });
  const user = authedUser ? users[authedUser] : null;

  const questionsArray = Object.values(questions);

  const userAnsweredQuestions = user ? Object.keys(user.answers) : [];

  // Filter the questions based on whether their id is in the user's answered questions
  const unansweredQuestions = questionsArray.filter(
    (question) => !userAnsweredQuestions.includes(question.id)
  );
  const answeredQuestions = questionsArray.filter((question) =>
    userAnsweredQuestions.includes(question.id)
  );

  //console.log("User:", user);
  // console.log("authedUser:", authedUser);

  const selectedUser = user ? users[authedUser] : null;
  const userName = selectedUser ? selectedUser.name : null;
  const userAvatar = selectedUser ? selectedUser.avatarURL : null;

  return {
    unansweredQuestions,
    answeredQuestions,
    user,
  };
};

export default connect(mapStateToProps)(Dashboard);
