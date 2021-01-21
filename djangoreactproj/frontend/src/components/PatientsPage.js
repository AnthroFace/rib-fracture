import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PatientList from "./PatientList";
import Box from "@material-ui/core/Box";
import SearchBar from "./SearchBar";

import axios from "axios";

import { API_URL } from "../constants";

const URL = "http://localhost:8000/api/filter";

class PatientsPage extends Component {
  state = {
    patients: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getFilteredPatients = (f, v) => {
    console.log(f, v);
    axios
      .get("URL", {
        params: {
          fil: "ancestry",
          val: "asian",
        },
      })
      .then((res) => this.setState({ patients: res.data }));
    axios.get(URL + f + v).then((res) => this.setState({ patients: res.data }));
  };

  getPatients = () => {
    console.log();
    axios.get(API_URL).then((res) => this.setState({ patients: res.data }));
  };

  resetState = () => {
    this.getPatients();
  };

  render() {
    return (
      <Box border={0}>
        <Container style={{ marginTop: "20px", marginLeft: "0px"}} align="left">
          <SearchBar onSelectValue={(f, v) => this.getFilteredPatients(f, v)} />
          <Row textAlign="left">
            <Col textAlign="left">
              <PatientList
                textAlign="left"
                patients={this.state.patients}
                resetState={this.resetState}
              />
            </Col>
          </Row>
        </Container>
      </Box>
    );
  }
}

export default PatientsPage;
