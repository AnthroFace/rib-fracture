import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  PatientsList from  './../PatientsList.js'
import  PatientCreateUpdate  from './../PatientCreateUpdate'
import  Home from './Home.js'

class Nav extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">AnthroFace</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/List">PATIENTS</a>
                        <a className="nav-item nav-link" href="/Patient">CREATE PATIENT</a>
                        </div>
                    </div>
                </nav>
                <div className="content">
                <Route path="/" exact component={Home} />
                <Route path="/list" exact component={PatientsList} />
                <Route path="/patient/:pk"  component={PatientCreateUpdate} />
                <Route path="/patient/" exact component={PatientCreateUpdate} />                
                </div>
            </div>)
        </BrowserRouter>
    );
  }
}

export default Nav;