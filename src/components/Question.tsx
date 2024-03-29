import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Segment, Button, Grid, Image } from "semantic-ui-react";
import { Card } from "@mui/material";

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

// Define component prop types
interface QuestionProps {
  question: any; // You might want to replace 'any' with the actual type
  unanswered: boolean;
  questions: Record<string, any>; // Replace 'any' with the actual type of a question
  id: string;
  answers: any; // Replace 'any' with actual type
  user: any; // Replace 'any' with actual user type
  users: Record<string, any>; // Replace 'any' with actual user type
  author?: any; // Replace 'any' if you have a type for 'author'
}

const Question: React.FC<QuestionProps> = ({ question, unanswered, questions, id, answers, user, users, author }) => {
  const navigate = useNavigate();

  const handleQuestionClick = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };
  
  if (question === null) {
        navigate('/', { state: { from404: true } });

    return <p>This question doesnt exist </p>;
  }

  const tabColor = unanswered ? color.green : color.blue;
  const authorId = questions[id].author;
  console.log({authorId})
  const avatarUser = users[authorId];
  const avatarURL = avatarUser.avatarURL;
  //console.log(questions[],authorId);

  return (
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
            borderTop: `3px solid ${tabColor.hex}`,
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
            {questions[id].author} asks:
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
            <Image src={`${avatarURL}`} size="small" circular centered />
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
                {questions[id].optionOne.text}
                <br />
                or...
              </p>
              <Button
                style={{
                  height: 40,
                  width: 300,
                  margin: 10,
                  backgroundColor: `solid ${tabColor.hex}`,
                }}
                onClick={() => handleQuestionClick(id)}
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

const mapStateToProps = (state: any, ownProps: any) => { // You should replace 'any' with the actual type of your Redux state and props
  const { users, questions } = state;
  const { authedUser } = users;

  const user = users[users.authedUser];
  const unanswered = !Object.keys(user.answers).includes(ownProps.id);
  const answered = user.questions.includes(ownProps.id);

  return {
    questions,
    id: ownProps.id,
    unanswered,
    users,
    answered,
    user,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);

// import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import { formatQuestion } from "../utils/helpers";
// import { Header, Segment, Button, Grid, Image } from "semantic-ui-react";
// import { grey } from "@mui/material/colors";
// import { Card } from "@mui/material";
// //import { tyler, john, sara } from "..assests/images";
// const color = {
//   green: {
//     name: "green",
//     hex: "#21ba45",
//   },
//   blue: {
//     name: "blue",
//     hex: "#2185d0",
//   },
//   teal: {
//     name: "teal",
//     hex: "#009c95",
//   },
//   grey: {
//     name: null,
//     hex: "#767676",
//   },
// };
// function Question({ question, unanswered, questions, id, answers, user, users, author }) {
//   const navigate = useNavigate();

//   const handleQuestionClick = (questionId) => {
//    // if (unanswered === true) {
//     navigate(`/question/${questionId}`);
//     // } else {
//     //   navigate(`/results/${questionId}`);
//     // }
//   };

//   if (question === null) {
//     return <p>This question doesnt exist </p>;
//   }


//   const tabColor = unanswered === true ? color.green : color.blue;
//   const { avatar, optionOne, timestamp, option2, text } = user;
//   const authorId = questions[id].author;
//   const avatarUser = users[authorId];
//   const avatarURL = avatarUser.avatarURL;
//   // console.log({avatarURL,authorId,avatarUser,users,questions,id,author,avatar,optionOne,timestamp,option2,text});



//   return (
//     <Card
//       elevation={15}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "left",
//         width: 700,
//       }}
//     >
//       <>
//         <Header
//           as="h5"
//           textAlign="left"
//           style={{
//             borderTop: `3px solid ${tabColor.hex}`,
//             marginTop: 0,
//             margin: 0,
//           }}
//         ></Header>
//         <Card
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             backgroundColor: "lightGrey",
//             height: 50,
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               fontSize: 20,
//             }}
//           >
//             {questions[id].author} asks:
//           </div>
//         </Card>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "left",
//             }}
//           >
//             <Image src={`${avatarURL}`} size="small" circular centered />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "left",
//             }}
//           >
//             <Header as="h5" textAlign="center" style={{ color: "black" }}>
//               Would you rather
//             </Header>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <p>
//                 {questions[id].optionOne.text}
//                 <br />
//                 or...
//               </p>
//               <Button
//                 style={{
//                   height: 40,
//                   width: 300,
//                   margin: 10,
//                   backgroundColor: `solid ${tabColor.hex}`,
//                 }}
//                 onClick={() => handleQuestionClick(id)}
//               >
//                 {unanswered === true ? "Answer Poll" : "Results"}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </>
//     </Card>
//   );
// }

// function mapStateToProps({  users, questions }, { id }) {
//   const { authedUser } = users;

//   const user = users[users.authedUser];
//   console.log({users, authedUser})
//    console.log({questions})
//   const unanswered = !Object.keys(user.answers).includes(id);
//   const answered = user.questions.includes(id);
//     return {
//     questions,
//     id,
//     unanswered,
//     users,
//     answered,
//     user,
//     authedUser
//   };
// }
// export default connect(mapStateToProps)(Question);
