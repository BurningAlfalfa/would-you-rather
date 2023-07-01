import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
//import { tyler, john, sara } from "..assests/images";

class Login extends Component {
  state = {
    value: "",
    loading: false,
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };
  onChange = (event) => {
    const id = event.target.value;
    this.setState({ value: id });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { /*onLoading,*/ setAuthedUser } = this.props;
    const authedUser = this.state.value;
    setAuthedUser(authedUser);
  };
  /*generateDropdownData = () => {
    const { users } = this.props;
    console.log("hi");
    return (
      users &&
      users.map((user) => ({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL },
      }))
    );
  };*/

  render() {
    //const { value } = this.props;
    //  const disabled = value === "" ? true : false;
    //const { users } = this.props;
    return (
      <div className="log-in">
        <Fragment>
          <div
            //image={<BrandImage />}
            form={<ConnectedLogin onLoading={this.handleLoading} />}
            //loading={this.state.loading ? true : false}
          />
          <div>
            <header />
            {/*  <div
              form={<ConnectedLogin onLoading={this.handleLoading} />}
              loading={this.state.loading}
            /> */}
          </div>
        </Fragment>
        <form className="ui-form" onSubmit={this.handleSubmit}>
          <header className="header">Sign In</header>

          <select
            className="dropdown"
            fluid="true"
            selection="true"
            scrolling="true"
            value={this.state.value}
            onChange={this.onChange}
            required
          >
            <option key={""} value={""} disabled>
              Select User
            </option>

            {this.props.users.length > 0 &&
              this.props.users.map((user) => {
                if (user) {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                }
              })}
          </select>
          <button
            className="submit-button"
            positive="true"
            //disabled={disabled}
            fluid="true"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (id) => dispatch({ type: "SET_AUTHED_USER", id }),
});

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
//const ConnectedLogin = connect(mapStateToProps, { setAuthedUser })(Login);

export default ConnectedLogin;
