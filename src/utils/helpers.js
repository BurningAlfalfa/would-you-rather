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
  const { id, votes, text, timestamp, option1, option2 } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    votes,
    option1,
    option2,

    //likes: likes.length,
    // replies: replies.length,
    // hasLiked: likes.includes(authedUser),
    /* parent: !parentTweet
      ? null
      : {
          author: parentTweet.author,
          id: parentTweet.id,
        },
        */
  };
}
