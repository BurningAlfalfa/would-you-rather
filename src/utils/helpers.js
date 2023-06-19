export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
export const colors = {
  green: {
    name: "green",
    hex: "#21ba45",
  },
  blue: {
    name: "blue",
    hex: "#2185d0",
  },
  grey: {
    name: null,
    hex: "#d4d4d5",
  },
};

export const styles = {
  primary: {
    color: "green",
    bgColor: "honeydew",
  },
  secondary: {
    color: "grey",
    bgColor: "#f4f4f4",
  },
};
export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    id,
    timestamp,
    name,
    avatar: avatarURL,
    option1: optionOne.text,
    option1Votes: optionOne.votes,
    option2: optionTwo.text,
    option2Votes: optionTwo.votes,
  };
}

