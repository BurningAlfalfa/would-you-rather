import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Results from "./Results";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  //const userQuestionData = () => this.props;
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <h3
        className="center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Your Timeline
      </h3>
      <Box sx={{ width: "100%", borderColor: "grey" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab style={{}} label="Unanswered " />
            {/*
            {userQuestionData && userQuestionData.length
              ? userQuestionData.answered.map((question) => (
                  <div
                    key={question.id}
                    question_id={question.id}
                    unanswered={true}
                  />
                ))
              : null}  */}

            <Tab label="Answered" />
            {/*
            {userQuestionData && userQuestionData.length
              ? userQuestionData.answered.map((question) => (
                  <div
                    key={question.id}
                    question_id={question.id}
                    unanswered={false}
                  />
                ))
              : null} */}
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};
{
  /*<ul className="dashboard-list">
              {this.props.questionsIds.map((id) => (
                <div key={id}>
                  <Question id={id} />
                </div>
              ))}
            </ul>*/
}

/*function mapStateToProps({ questions, authUser, users }) {
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    userQuestionData: {
      answered,
      unanswered,
    },
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}*/
//export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
