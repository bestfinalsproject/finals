import React, { Component } from "react";
import "./home.css";
import { Login } from ".";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  notify = () => {
    window.alert(
      "This feature isn't working right now, stay posted for future updates!"
    );
  };
  render() {
    return (
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Welcome back!</h3>
                    <Login />
                    <div class="text-center">
                      New to The Forge ?
                      <button>
                        <Link to={"/content/signup"}>Signup</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
