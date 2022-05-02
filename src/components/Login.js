import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

//import { tyler, john, sara } from "..assests/images";

class Login extends Component {
  state = {
    loading: false,
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };
  onChange = (e, { value }) => {
    this.setState({ value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { onLoading, setAuthedUser } = this.props;
    const authedUser = this.state.value;

    new Promise((res, rej) => {
      onLoading();
      setTimeout(() => res(), 500);
    }).then(() => setAuthedUser(authedUser));
  };
  generateDropdownData = () => {
    const { users } = this.props;

    return users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };
  render() {
    const { value } = this.state;
    const disabled = value === "" ? true : false;
    return (
      <div>
        <Fragment>
          <div>
            <header />
            <div
              form={<ConnectedLogin onLoading={this.handleLoading} />}
              loading={this.state.loading}
            />
          </div>
        </Fragment>
        <form onSubmit={this.handleSubmit}>
          <header as="h2" color="green">
            Sign In
          </header>
          <select
            placeholder="Select a Friend"
            fluid
            selection
            scrolling
            options={this.generateDropdownData()}
            value={value}
            onChange={this.onChange}
            required
          />
          <button content="Login" positive disabled={disabled} fluid />
        </form>
      </div>
    );
  }
}
const ConnectedLogin = connect(mapStateToProps, { setAuthedUser })(Login);
function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default Login;
