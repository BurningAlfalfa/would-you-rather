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
    this.props.dispatch(handleInitalData());
  }
  //      <div>{this.props.loading === true ? null : <Dashboard />}</div>

  render() {
    const { authedUser } = this.props;
    console.log(authedUser);

    return (
      <BrowserRouter>
        <Routes>
          {authedUser === null ? (
            <Route path="/" element={<Login />}></Route>
          ) : (
            <Route path="/" element={<Dashboard />}></Route>
          )}
        </Routes>
        {console.log(authedUser)}
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
