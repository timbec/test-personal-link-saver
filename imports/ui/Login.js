import React from "react";
import { Link } from "react-router";
import { Meteor } from "meteor/meteor";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, err => {
      console.log("Login callback: ", err);
      if (err) {
        this.setState({ error: "Unable to login. Check email and password" });
      } else {
        this.setState({ error: "" });
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" name="email" ref="email" placeholder="Email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
        <Link to="/signup">Need An Account?</Link>
      </div>
    );
  }
}

export default Login;
