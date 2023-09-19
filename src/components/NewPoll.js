import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../actions/questions';


import { useNavigate  } from 'react-router-dom';

// Import any action creators needed to handle data submission
import { Button, Input, Loader } from 'semantic-ui-react';
import { setAuthedUser } from '../actions/authedUser';

const NewPoll = (props) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();  // <-- Use the hook

  const handleSubmit = () => {
       setLoading(true);

    // Dispatch the action to Redux
    const author = props.authedUser; 
 console.log({optionOne, optionTwo, author});
    props.handleSaveQuestion(optionOne, optionTwo, author);
    setLoading(false);
navigate('/home');
    // Optionally, redirect or update UI state here
  };
  
    
    // Use action creators to submit the data
    // await props.submitPollData({ optionOne, optionTwo });

  //     // <-- Navigate to the desired route
  // };

  return (
    <div style={{ justifyContent: "center", display: "flex" ,flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ textAlign: "center" }}>Would you rather</h2>
      <Input 
        style={{ width: "fit-content", marginTop: 2 }}
        justifyContent="center"
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
        style={{ marginTop: 20 }}
        maxWidth={50}
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

    handleSaveQuestion: (optionOne, optionTwo, author) => {
      dispatch(addQuestion(optionOne, optionTwo, author));
    },
  };
};

const mapStateToProps = (state) => {
console.log({state})
  return {  
    authedUser: state.users.authedUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);


// import React, { Component } from "react";
// import { connect } from "react-redux";
// //import { handleAddTweet } from "../actions/tweets";
// //import { Redirect } from "react-router-dom";

// class NewPoll extends Component {
//   state = {
//     text: "",
//     toHome: false,
//   };
//   handleChange = (e) => {
//     const text = e.target.value;

//     this.setState(() => ({
//       text,
//     }));
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { text } = this.state;
//     const { dispatch, id } = this.props;


//     this.setState(() => ({
//       text: "",
//       toHome: id ? false : true,
//     }));
//   };
//   render() {
//     const { text, toHome } = this.state;
//     if (toHome === true) {
//       // return <Redirect to="/" />;
//     }
//     const tweetLeft = 280 - text.length;
//     return (
//       <div>
//         <h3 className="center">Compose new Tweet</h3>
//         <form className="new-tweet" onSubmit={this.handleSubmit}>
//           <textarea
//             placeholder="What's happening?"
//             value={text}
//             onChange={this.handleChange}
//             className="textarea"
//             maxLength={280}
//           />
//           {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
//           <button className="button" type="submit" disabled={text === ""}>
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// export default connect()(NewPoll);
