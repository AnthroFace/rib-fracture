import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PatientList from "./PatientList";
import Box from "@material-ui/core/Box";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { API_URL } from "../constants";

const URL = "http://localhost:8000/api/filter";

class PatientsPage extends Component {
  state = {
    patients: [],
    rib_counts: "",
  };

  componentDidMount() {
    this.resetState();
  }

  getPatients = () => {
    axios.get(API_URL, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      } ,
         params:{
            dataset: localStorage.getItem("current_dataset")}
    }).then((res) =>
      this.setState({
        patients: res.data.patients,
        rib_counts: res.data.rib_counts,
      })
    );
    console.log(localStorage.getItem("current_dataset"))
  };

  getFilteredPatients = () => {
    var nums = axios.get(URL).then(
      (res) =>
        this.setState({
          patients: res.data.patients ? res.data.patients : res.data,
          rib_counts: res.data.rib_counts ? res.data.rib_counts : "",
        })

      // console.log(res)
    );
  };

  resetState = () => {
    this.getPatients();
  };

  logging = () => {
    console.log(this.state.rib_counts);
  };

  render() {
    return (
      <Box border={0}>
        <Container
          style={{ marginTop: "20px", marginLeft: "0px" }}
          align="left"
        >
          <SearchBar
            onSelectValue={this.getFilteredPatients}
            onClear={this.getPatients}
          />
          {/* <Link
            to={{
              pathname: "/heatmap",
              state: {
                ribCount: this.state.rib_counts,
              },
            }}
          >
            <Button variant="contained" onClick={this.logging}>
              HeatMap
            </Button>
          </Link> */}
          <Row textAlign="left">
            <Col textAlign="left">
              <PatientList
                textAlign="left"
                patients={this.state.patients}
                // resetState={this.resetState}
                resetState={this.resetState.bind(this)}
              />
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Box>
    );
  }
}

export default PatientsPage;
