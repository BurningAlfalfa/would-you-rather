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
  onChange = (event) => {
    this.setState({ value: event.target.value });
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
                                                console.log(this.props)

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
                                                      console.log("stuff")

          <select
            className="dropdown"
            placeholder="Select a Friend"
            fluid="true"
            selection="true"
            scrolling="true"
            value={this.state.value}
            onChange={this.onChange}
            required
          >
                                            console.log("stuff")

            {this.props.length > 0 &&

              this.props.users.map((user) => {
                return (
                  <option  key={user} value={user}>
                    {user}
                  </option>
                  
                );
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
const ConnectedLogin = connect(mapStateToProps, { setAuthedUser })(Login);

export default ConnectedLogin;
