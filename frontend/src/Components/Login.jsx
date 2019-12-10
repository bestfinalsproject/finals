import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  passLoginInfo = e => {
    e.preventDefault();
    console.log(this);
    this.props.login(this.state.username, this.state.password);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.passLoginInfo}>
          <div class="form-label-group">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="username"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div class="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label" for="customCheck1">
              Remember password
            </label>
          </div>
          <button
            class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
            onClick={this.notify}
          >
            Sign in
          </button>
          <div class="text-center">
            <a class="small" href="#home">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
