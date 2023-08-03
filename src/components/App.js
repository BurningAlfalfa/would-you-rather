import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { handleInitalData } from "../actions/shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
import Navbar from "./Navbar";
import Login from "./Login";
import authedUser from "../actions/authedUser";
import Poll from "./Poll";
import NewPoll from "./NewPoll";
import Dashboard from "./Dashboard";
import Question from "./Question";
import Leaderboard from "./Leaderboard";

class App extends Component {
  async componentDidMount() {
    await handleInitalData()(this.props.dispatch);
    this.props.dispatch({ type: "SET_AUTHED_USER", id: "joeylene" });
    // this.props.dispatch(handleInitalData());
  }
  //      <div>{this.props.loading === true ? null : <Dashboard />}</div>

  render() {
    // const { authedUser } = this.props;
    let authedUser = this.props.authedUser;

    return (
      <BrowserRouter>
       {authedUser && <Navbar />}
        <Routes>
          {!authedUser ? (
            // <Route path="/" element={<Login users={this.props.users} />}></Route>
            <Route path="/" element={<Login />}></Route>
          ) : (
            <Route path="/" element={<Dashboard />}></Route>
          )}
          <Route path="/new-poll" element={<NewPoll />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/question/:question_id" element={<Poll/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ users }) {
  //console.log({ users });
  return {
    //loading: authedUser === null,
    authedUser: users.authedUser,
  };
}
export default connect(mapStateToProps)(App);
