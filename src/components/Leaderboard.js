import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router";
import { setLastVisitedUrl,logoutUser } from '../actions/authedUser';

const Leaderboard = ({ users ,user}) => {
  // Sort users by score in descending order

   const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setLastVisitedUrl('/leaderboard'));
           navigate('/');

      dispatch(logoutUser());
     }
  }, [isAuthenticated, dispatch, navigate]);
  if (!users) {
    return <div>Loading...</div>; 
  }
 

 
  const sortedUsers = Object.entries(users).sort((a, b) => {
    // Ensure that the answers and questions properties exist before trying to use them
    const scoreA = (a[1].answers ? Object.keys(a[1].answers).length : 0) + 
                   (a[1].questions ? a[1].questions.length : 0);
    const scoreB = (b[1].answers ? Object.keys(b[1].answers).length : 0) + 
                   (b[1].questions ? b[1].questions.length : 0);
  
    return scoreB - scoreA;
  });
  
  
  
  console.log({user,users})

  return (
    <div style={{display:"flex", justifyContent: "center",
    alignItems: "center", flexDirection: "column"}}>
      <h1>Leaderboard</h1>
      {sortedUsers.map(([userName, user], index) => (
  <div key={userName} className="user-score">
    <h2>{index + 1}. {userName}</h2>
    <img src={user.avatarURL} alt={`${userName}'s avatar`} style={{width: '50px', height: '50px'}} />
    <p>Answered questions: {user.answers ? Object.keys(user.answers).length : 0}</p>
    <p>Created questions: {user.questions ? user.questions.length : 0}</p>
    <p>Total score: {(user.answers ? Object.keys(user.answers).length : 0) + (user.questions ? user.questions.length : 0)}</p>
  </div>
))}

    </div>
  );
};

// Map Redux state to React component props
const mapStateToProps = (state) => {
  return {
    users: state.users || {},
  };
};

// Connect Redux to React
export default connect(mapStateToProps)(Leaderboard);
/*import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({ users,user }) => {
  // Sort users by score in descending order
  if (!users) {
    return <div>Loading...</div>; 
  }
  const sortedUsers = Object.values(users).sort((a, b) => {
    console.log(a.answers, a.questions); // Debug line
  console.log(b.answers, b.questions); // Debug line
    const scoreA = Object.keys(a.answers || {}).length + (a.questions || []).length;
    const scoreB = Object.keys(b.answers || {}).length + (b.questions || []).length;
    
    return scoreB - scoreA;
  });
  console.log({user,users})
  return (
    <div>
      <h1>Leaderboard</h1>
      {sortedUsers.map((user, index) => (
        <div key={user.id} className="user-score">
          <h2>{index + 1}. {users[user.name]}</h2>
          <img src={user.avatarURL} alt={`${user.name}'s avatar`} style={{width: '50px', height: '50px'}} />
          <p>Answered questions: {Object.keys(user.answers).length}</p>
          <p>Created questions: {user.questions.length}</p>
          <p>Total score: {Object.keys(user.answers).length + user.questions.length}</p>
        </div>
      ))}
    </div>
  );
};

// Map Redux state to React component props
// Map Redux state to React component props
const mapStateToProps = (state,user) => {
    console.log("State: ", state);  // Added debug line
    return {
      users: state.users||  {},
        user: state.user || {},
    //   uownProps
    };
  };
  

// Connect Redux to React
export default connect(mapStateToProps)(Leaderboard);
*/