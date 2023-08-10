// MainLayout.js
import React from 'react';import { connect } from "react-redux";
import Question from "./Question";

import { Link } from "react-router-dom";


const Navbar = ({  user}) => {
  return (
    <nav
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
{user && <span style={{
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-between",
      // height: 20,
      margin:10,
      // padding:0
    }}>{user.name}</span>}
      <button>Logout</button>
    </div>
  </nav>
     
  );
};

const mapStateToProps = (state) => {
  const { questions, users, answers } = state;
  const { authedUser } = users;
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

export default connect(mapStateToProps)(Navbar);
