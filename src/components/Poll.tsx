


import React, { FC, Fragment } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Header, Button, Image } from "semantic-ui-react";
import { LOGOUT_USER, logoutUser } from "../actions/authedUser";
import { useQuestion } from "../hooks/question404";

interface Question {
  author: string;
  optionOne: {
    text: string;
    votes: string[];
  };
  optionTwo: {
    text: string;
    votes: string[];
  };
}

interface User {
  avatarURL: string;
}

interface State {
  questions: Record<string, Question>;
  users: {
    authedUser: string;
    [key: string]: User;
  };
}

interface PollProps {
  handleSubmit: (authedUser: string, questionId: string, option: string) => void;
}

const Poll: FC<PollProps> = ({ handleSubmit }) => {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const question = useQuestion()
  const authedUser = useSelector((state: State) => state.users.authedUser);
  const user = useSelector((state: State) => state.users[question?.author]);

  if (!question) {
    navigate('/');
    dispatch(logoutUser());
    navigate('/404') // Log the user out
    return null;
  }

  const onClickSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      option: { value: string };
    };
    try {
      await handleSubmit(authedUser, question_id, target.option.value);
      navigate("/question/" + question_id);
    } catch (error) {
      console.error("failed to submit vote", error);
    }
  };

  const hasUserVoted =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);
  const votesTotal =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const percentageOne = ((optionOneVotes / votesTotal) * 100).toFixed(2);
  const percentageTwo = ((optionTwoVotes / votesTotal) * 100).toFixed(2);

  {
    console.log(question);
  }
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image src={user.avatarURL} size="small" circular centered />
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

            {hasUserVoted ? (
              <Fragment>
                <header as="h3">
                  Results:
                </header>
                <div
                >
                  <p style={{ fontWeight: "bold" }}>
                    {question.optionOne.text}
                  </p>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      width: "100%",
                      height: "20px",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${percentageOne}%`,
                        height: "100%",
                        backgroundColor: "green",
                        textAlign: "center",
                        lineHeight: "20px",
                      }}
                    >
                      {percentageOne}%
                    </div>

                  </div>
                  <div>
                    {optionOneVotes + " out of " + votesTotal}
                    {question.optionOne.votes.includes(authedUser) && (
                      <p style={{ color: "orange", fontWeight: "bold" }}>YOUR VOTE</p>
                    )}



                  </div>

                </div>
                <div

                >

                  <p style={{ fontWeight: "bold" }}>
                    {question.optionTwo.text}
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #ccc",
                    width: "100%",
                    height: "20px",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${percentageTwo}%`,
                      height: "100%",
                      backgroundColor: "green",
                      textAlign: "center",
                      lineHeight: "20px",
                    }}
                  >
                    {percentageTwo}%
                  </div>
                  <p>

                  </p>
                </div>
                {optionTwoVotes + " out of " + votesTotal}
                {question.optionTwo.votes.includes(authedUser) && (
                  <p style={{
                    color: "orange",
                    fontWeight: "bold"
                  }}>YOUR VOTE</p>
                )}


              </Fragment>
            ) : (
              <form onSubmit={onClickSubmit}>
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

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    handleSubmit: (authedUser: string, questionId: string, option: string) => {
      return dispatch({ type: "VOTE", payload: { authedUser, questionId, option } });
    },
  };
};

export default connect(null, mapDispatchToProps)(Poll);
