import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./../text.css";

import "../App.js";


class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_change = e => {
     // console.log("change");
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      console.log(newState); 
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handle_signup(e, this.state)} className = "signupform" style = {{padding: "0px 0px 0px 350px"}}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SignupForm;

//SignupForm.propTypes = {
 // handle_signup: PropTypes.func.isRequired
//};