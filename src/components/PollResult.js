import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const PollResult = (props) => {
  const { question_id } = useParams();
  const question = props.questions[question_id];

  if (!question) {
    return <p>This question doesn't exist </p>;
  }

  return (
    <div>
      <h2>{question.optionOne.text}</h2>
      <h3>or</h3>
      <h2>{question.optionTwo.text}</h2>
      {/* Add your layout and design here */}
    </div>
  );
};

function mapStateToProps({ questions }) {
  return {
    questions
  };
}

export default connect(mapStateToProps)(PollResult);