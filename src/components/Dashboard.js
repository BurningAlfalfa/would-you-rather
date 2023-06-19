import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Question from './Question';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Results from './Results';
import users from '../reducers/users';

const Dashboard = ({ unansweredQuestions, answeredQuestions, user,authedUser}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  

 const selectedUser = users[authedUser];
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
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-poll">New Poll</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
        <div className="user-info">
          <img src={user} alt="User Avatar" />
          <span>{user}</span>
          <button>Logout</button>
        </div>
      </nav>
      <h3 className="center">Your Timeline</h3>
      <Box sx={{ width: '100%', borderColor: 'grey' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Unanswered" />
            <Tab label="Answered" />
          </Tabs>
        </Box>
        {selectedTab === 0 && (
          <div>
            <h4>Unanswered Questions</h4>
            {renderQuestions(unansweredQuestions)}
          </div>
        )}
        {selectedTab === 1 && (
          <div>
            <h4>Answered Questions</h4>
            {renderQuestions(answeredQuestions)}
          </div>
        )}
      </Box>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { questions, users, authedUser } = state;
  const questionsArray = Object.values(questions);
  const unansweredQuestions = questionsArray.filter(
    (question) => !question.answered
  );
  const answeredQuestions = questionsArray.filter(
    (question) => question.answered
  );
  
  const user = authedUser ? users[authedUser] : null;
  console.log('User:', users);
  console.log('authedUser:', authedUser);
  
  const selectedUser = user ? users[authedUser] : null;
  const userName = selectedUser ? selectedUser.name : null;
  const userAvatar = selectedUser ? selectedUser.avatarURL : null;

  return {
    authedUser,
    users,
    unansweredQuestions,
    answeredQuestions,
    userName,
    userAvatar,
  };
};








export default connect(mapStateToProps)(Dashboard);