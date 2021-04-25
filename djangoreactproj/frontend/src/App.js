import React, { Component, Fragment } from "react";
import Nav from "./components/Nav";
import LoginNav from "./components/LoginNav";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
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
          username: json.user.username
        });
      });
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

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
    localStorage.clear()
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    //let {isLoggedIn} = this.state; 

    const renderAuthButton = () => {
      <div style ={{padding :"100px 0px 0px 485px"}}>
      <Box borderTop={0} borderBottom={0} padding="50px 136px">
        <img
          variant="h1"
          component="h2"
          height="200"
          src="/images/AnthrofaceLogo1.png"
          alt=""
        />
      </Box>
      </div>
      if(!this.state.logged_in){
        console.log(this.state.logged_in);
        return  <Fragment>   {form}
        <LoginNav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
          
        /> </Fragment>;  
      }
      else{
        console.log(this.state.logged_in); 
        return  <Fragment> 
        <LoginNav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        /> <Nav /></Fragment>; 
      }
    }

    return (
      <div className="App">
          {renderAuthButton()}
      </div>
    );
  }
}
export default App;
//login render
      /*
        {form}
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3>
        <LoginNav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        */



//home render
/*
class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
      </Fragment>
    );
  }
}
*/