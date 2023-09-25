import React, { useState} from "react";
import { connect, } from "react-redux";
import { addQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { Button, Input, Loader } from "semantic-ui-react";
import { addQuestionToUser } from "../actions/users";

const NewPoll = (props) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate(); // <-- Use the hook
 /* const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
   if (!isAuthenticated) {
     dispatch(setLastVisitedUrl('/newpoll'));
          navigate('/');

     dispatch(logoutUser());
    }
 }, [isAuthenticated, dispatch, navigate]);*/
  const handleSubmit = () => {
    setLoading(true);

    // Dispatch the action to Redux
    const author = props.authedUser;
    const id = Math.random().toString(36);
    const timeStamp = Date.now();
    //const qid = props.qid;
    //  console.log({optionOne, optionTwo, author});
    props.handleSaveQuestion(optionOne, optionTwo, author, timeStamp, id);
    setLoading(false);
    navigate("/");
    // Optionally, redirect or update UI state here
  };

  // Use action creators to submit the data
  // await props.submitPollData({ optionOne, optionTwo });

  //     // <-- Navigate to the desired route
  // };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Would you rather</h2>
      <Input
        style={{ width: "fit-content", marginTop: 2 ,  justifyContent:"center"}}
      
        placeholder="Enter option one..."
        value={optionOne}
        onChange={(e) => setOptionOne(e.target.value)}
      />
      <h3 style={{ textAlign: "center" }}>OR</h3>
      <Input
        placeholder="Enter option two..."
        value={optionTwo}
        onChange={(e) => setOptionTwo(e.target.value)}
      />
      <Button
        style={{ marginTop: 20,        maxWidth:50
}}
        onClick={handleSubmit}
        disabled={!optionOne || !optionTwo || loading}
      >
        Submit
      </Button>
      {loading && <Loader />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveQuestion: async (optionOne, optionTwo, author, timeStamp, id) => {
      const question =  await addQuestion(optionOne, optionTwo, author, timeStamp, id)(dispatch)
      console.log({question})
      //try {
        // const question = await dispatch(
        //   addQuestion(optionOne, optionTwo, author, timeStamp, id)
        // );
        if (!question || !question.id) {
          console.error("Error: addQuestion did not return the expected data.");
          return;
        }
        const qid = question.id;
        const result = dispatch(addQuestionToUser({qid, id: author}));

        if (!result) {
          console.error("Error: addQuestionToUser did not work as expected.");
        }
      // } catch (error) {
      //   console.error("Error in handleSaveQuestion:", error.message);
      // }
    },
  };
};
const mapStateToProps = (state, ) => {
  const { users } = state;
  const { questions } = state;
  console.log({ questions, users });
  return {
    authedUser: state.users.authedUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);


