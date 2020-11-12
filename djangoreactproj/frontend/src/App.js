import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  PatientsList from './PatientsList'
import  PatientCreateUpdate  from './PatientCreateUpdate'
import './App.css';

const BaseLayout = () => (
  <div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">AnthroFace</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/">PATIENTS</a>
      <a className="nav-item nav-link" href="/Patient">CREATE PATIENT</a>

    </div>
  </div>
</nav>

    <div className="content">
      <Route path="/" exact component={PatientsList} />
      <Route path="/patient/:pk"  component={PatientCreateUpdate} />
      <Route path="/patient/" exact component={PatientCreateUpdate} />

    </div>

  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;