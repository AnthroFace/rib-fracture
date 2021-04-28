import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import PatientsPage from "./PatientsPage";
import NewPatientPage from "./NewPatientPage";
import Home from "./Home";
import ImportCSV from "./ImportCSV";
import ExportCSV from "./ExportCSV";
import Heatmap from "./Heatmap";
import LoginForm from "./LoginForm"
import HeatmapPage from "./HeatmapPage";
import Datasets from "./Datasets";
import "./../App.css";
import Image from "react-image-resizer";

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <a className="navbar-brand" href="/">
              <Image src="/images/AnthrofaceLogo3.png" height={65} alt="" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="/Database">
                  DATABASE
                </a>
                <a className="nav-item nav-link" href="/Create">
                  NEW PATIENT
                </a>
                <a className="nav-item nav-link" href="/import">
                  IMPORT DATA
                </a>
                <a className="nav-item nav-link" href="/export">
                  EXPORT DATA
                </a>
                <a className="nav-item nav-link" href="/heatmap">
                  HEATMAP
                </a>
                <a className="nav-item nav-link" href="/dataset">
                  USING DATASET: {localStorage.getItem("current_dataset_name")}
                </a>
              </div>
            </div>
          </nav>
          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={NewPatientPage} />
            <Route path="/database" exact component={PatientsPage} />
            <Route path="/patient/:pk" component={PatientsPage} />
            <Route path="/patient/" exact component={PatientsPage} />
            <Route path="/import/" exact component={ImportCSV} />
            <Route path="/export/" exact component={ExportCSV} />
            <Route path="/heatmap/" exact component={HeatmapPage} />
            <Route path="/dataset/" exact component={Datasets} />
            <Route path="/login/" exact component={LoginForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
//if want name on navbar, insert on line navbar-brand between ><
//img variant="h1" component="h2" src = "/images/AnthrofaceLogo3.png" alt=""
// ^^ old code for image insertion without image resizer

export default Nav;
