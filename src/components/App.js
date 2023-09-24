import { connect, useDispatch } from "react-redux";
import React, { Component, Fragment, useEffect} from "react";
import { handleInitalData } from "../actions/shared";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
import Navbar from "./Navbar";
import Login from "./Login";
import authedUser from "../actions/authedUser";
import Poll from "./Poll.tsx";
import NewPoll from "./NewPoll";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Error404 from "./Error404";
function Fallback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //       navigate('/');
        
  //   dispatch({ type: 'LOGOUT_USER' });  // This assumes 'LOGOUT_USER' is your logout action type
  // }, [ navigate, dispatch]);

  return null;  // Render nothing while the logout and redirect are being handled
}
class App extends Component {
  async componentDidMount() {
    await handleInitalData()(this.props.dispatch);
    // this.props.dispatch({ type: "SET_AUTHED_USER", id: "joeylene" });
    // this.props.dispatch(handleInitalData());
  }
  //      <div>{this.props.loading === true ? null : <Dashboard />}</div>

  render() {
     const { authedUser } = this.props;
   // let authedUser = this.props.authedUser;
console.log({authedUser})
    return (
      // <Provider store={store}>

      <BrowserRouter>
       {authedUser && <Navbar />}
        <Routes>
          {!authedUser ? (
            // <Route path="/" element={<Login users={this.props.users} />}></Route>
            <Route path="/" element={<Login />}></Route>
          ) : (
            <Route path="/" element={<Dashboard />}></Route>
          )}
          <Route path="/newpoll" element={<NewPoll />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/question/:question_id" element={<Poll/>} />
          <Route path="*" element={<Error404 />}/>

          {/* <Route path="/results/:question_id" element={<Results/>} /> */}
        </Routes>
      </BrowserRouter>
      // </Provider>
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
