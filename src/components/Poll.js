import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Header, Button, Image } from "semantic-ui-react";

const Poll = () => {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const question = useSelector(state => state.questions[question_id]);
  const authedUser = useSelector(state => state.users.authedUser);
  const user = useSelector(state => state.users[question.author]);

  if (!question) {
    return <p>This question doesn't exist</p>;
  }

  // const handleBackClick = () => {
  //   // history.goBack();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "VOTE",
      payload: {
        questionId: question_id,
        userId: authedUser,
        vote: e.target.option.value,
      },
    });
    navigate("/");
        //this.props.history.push("/");
  };

  const hasUserVoted = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
  const votesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const percentageOne= ((optionOneVotes / votesTotal) * 100).toFixed(2);
  const percentageTwo= ((optionTwoVotes / votesTotal) * 100).toFixed(2);

    {console.log(question)}
  return (
    
    <div style={{ justifyContent: "center", display: "flex" }}>
      <Card
        elevation={15}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          width: 700,
        }}
      >
        <Header as="h5" textAlign="left">
          {question.author} asks:
        </Header>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Image src={user.avatarURL} size="small" circular centered />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
            <Header as="h5" textAlign="center" style={{ color: "black" }}>
              Would you rather
            </Header>
            
            {hasUserVoted ? (
              <Fragment>
        <header as="h3">
          Results:
           {/* <div style={{ fontWeight: "bold" }}>Would you rather</div> */}
        </header>
        <div
          // color={option1.color}
          // style={{ backgroundColor: `${option1.bgColor}` }}
        >
          {/* {userVote === "optionOne" && <YourVoteLabel />} */}
          <p style={{ fontWeight: "bold" }}>{question.optionOne.text}</p>
          <div style={{ 
    border: '1px solid #ccc', 
    width: '100%', 
    height: '20px', 
    borderRadius: '4px', 
    overflow: 'hidden'
}}>
    <div style={{ 
        width: `${percentageOne}%`, 
        height: '100%', 
        backgroundColor:  'green', 
        textAlign: 'center', 
        lineHeight: '20px'
    }}>
        {percentageOne}%
    </div>
</div>
            {/* {optionOneVotes} out of {votesTotal} votes
          </div> */}
        </div>
        <div
          // color={option2.color}
          // style={{ backgroundColor: `${option2.bgColor}` }}
        >
          {/* {userVote === "optionTwo" && <YourVoteLabel />} */}

          <p style={{ fontWeight: "bold" }}>{question.optionTwo.text}</p>
        </div>
        <div style={{ 
    border: '1px solid #ccc', 
    width: '100%', 
    height: '20px', 
    borderRadius: '4px', 
    overflow: 'hidden'
}}>
    <div style={{ 
        width: `${percentageTwo}%`, 
        height: '100%', 
        backgroundColor:  'green', 
        textAlign: 'center', 
        lineHeight: '20px'
    }}>
        {percentageTwo}%
    </div>
</div>
              </Fragment>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>
                  {question.optionOne.text}
                  <input type="radio" value="optionOne" name="option" />
                </label>
                <p>or</p>
                <label>
                  {question.optionTwo.text}
                  <input type="radio" value="optionTwo" name="option" />
                </label>
                <br />
                <Button type="submit">Submit</Button>
              </form>
            )}

            {/* <Button onClick={handleBackClick}>Back</Button> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Poll;
// // import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// // import React, { useState } from "react";
// import { Card, Header, Button, Image } from "semantic-ui-react";
// import { useSelector, useDispatch} from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// // import { handleSaveQuestionAnswer } from "../actions/questions";
// import  {unanswered, answered} from ".question";

// const Poll = (unanswered, answered) => {
//   const { question_id } = useParams();
//   const dispatch = useDispatch();
//   console.log({ question_id, state: useSelector(state => state) })
//   const question = useSelector(state => Object.values(state.questions).find

//     (
//       question => String(question.id) === question_id
//     ));
//   const authedUser = useSelector(state => state.users.authedUser);
//   const user = useSelector(state => Object.values(state.users).find
//     (
//       user => String(user.id) === question.author));
//   console.log({ question, user })
//   console.log({state:useSelector(state => state)})

//   if (!question) {
//     return <p>This question doesn't exist</p>;
//   }
 
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     console.log(e.target.option.value)

    
//    dispatch({
//      type: "VOTE",
//      payload: {
//        questionId: question_id,
//        userId: authedUser,
//        vote: e.target.option.value,
//      },
//    });
//   }
//   return (
    
//     <div style={{ justifyContent: "center", display: "flex" }}>
//       <Card
//         elevation={15}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "left",
//           width: 700,
//         }}
//       >
//         <Header
//           as="h5"
//           textAlign="left"
//           style={{
//             marginTop: 0,
//             margin: 0,
//           }}
//         >
//           {question.author} asks:
//         </Header>
//         <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//           <div style={{ display: "flex", flexDirection: "row", alignItems: "left" }}>
//             <Image src={`${user.avatarURL}`} size="small" circular centered />
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
//             <Header as="h5" textAlign="center" style={{ color: "black" }}>
//               Would you rather
//             </Header>
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//               <form onSubmit={handlesubmit}>
//                 <label>
//                 {question.optionOne.text}
//                   <input type="radio" value="optionOne" name="option" />
//                 <p>or</p>
              
//                   {question.optionTwo.text}
//                    <input type="radio" value="optionTwo" name="option" />
//                 </label>
//                 <br></br>

//           <button   >Submit</button>
//                 {/* <input type="submit" value="Submit" onChange={handlesubmit}/> */}
//               </form>

//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

//   // const user = users[authedUser];
//   // const question = questions[question_id];
//   // // const optionOneVotes = questions[question_id].optionOne.votes.length;
//   // // const optionTwoVotes = questions[question_id].optionTwo.votes.length;
//   // const answeredQuestions = user ? Object.keys(user.answers) : [];
//   // const showResults = answeredQuestions.includes(question_id);
//   // console.log({ questions, users, authedUser,question});

//     // user,
//     // question,
//     // // optionOneVotes,
//     // // optionTwoVotes,
//     // showResults,
  

// export default (Poll);
