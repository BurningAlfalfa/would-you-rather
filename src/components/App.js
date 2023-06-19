import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { handleInitalData } from "../actions/shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
//import Nav from "./Nav";
import Login from "./Login";
import authedUser from "../actions/authedUser";
import NewPoll from "./NewPoll";
import Dashboard from "./Dashboard";
import Question from "./Question";

class App extends Component {
  componentDidMount() {
    handleInitalData()(this.props.dispatch) 
    // this.props.dispatch(handleInitalData());
  }
  //      <div>{this.props.loading === true ? null : <Dashboard />}</div>

  render() {
    // const { authedUser } = this.props;
    let authedUser = this.props.authedUser;

    return (
      <BrowserRouter>
        <Routes>
          {authedUser === null ? (
            // <Route path="/" element={<Login users={this.props.users} />}></Route>
            <Route path="/" element={<Login />}></Route>
          ) : (
            <Route path="/" element={<Dashboard />}></Route>
          )}
          <Route path="/new-poll" element={<NewPoll />} />
          <Route path="/leaderboard" element={<leaderboard/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    //loading: authedUser === null,
    "authedUser":  authedUser,
    "users": ['user1', ]
    ,
  };
}
export default connect(mapStateToProps)(App);
