import React, { useState, useEffect, Fragment } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { setLastVisitedUrl } from "../actions/authedUser";

function Login({ users, setAuthedUser }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectTo404, setRedirectTo404] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const lastVisitedUrl = useSelector((state) => state.auth.lastVisitedUrl);
  Login.defaultProps = {
    users: [],
};
  useEffect(() => {
    const from404 = location?.state?.from404 || false;

    if (from404) {
      // Dispatch an action to update lastVisitedUrl in your Redux state
      dispatch({ type: "SET_LAST_VISITED_URL", url: "/404" });
    }
  }, [location, dispatch]);
  useEffect(() => {
    if (redirectTo404) {
      navigate("/404");
    }
  }, [redirectTo404, navigate]);

  const handleLoading = () => setLoading(true);

  const onChange = (event) => setValue(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthedUser(value);
    handleLogin();
  };

  const handleLogin = () => {

    if (lastVisitedUrl) {
      navigate(lastVisitedUrl);
      dispatch(setLastVisitedUrl(null));
    } else {
       navigate("/dashboard");
    }
  };
  console.log(users);  // in your component

  return (
    <div className="log-in">
      <Fragment>
        <div />
        <div>
          <header />
        </div>
      </Fragment>
      <form className="ui-form" onSubmit={handleSubmit}>
        <header className="header">Sign In</header>
        <select className="dropdown" value={value} onChange={onChange} required>
          <option value="" disabled>
            Select User
          </option>
          {users.filter(user => user).map((user) => (
  <option key={user.id} value={user.id}>
    {user.name}
  </option>
))}

        </select>
        <button className="submit-button">Login</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
    console.log(state.users);  // in mapStateToProps
return{
  users: Object.values(state.users),
}
};

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (id) => dispatch({ type: "SET_AUTHED_USER", id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
