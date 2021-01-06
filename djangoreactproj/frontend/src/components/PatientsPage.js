import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PatientList from "./PatientList";
import Box from "@material-ui/core/Box";

import axios from "axios";

import { API_URL } from "../constants";

class PatientsPage extends Component {
  state = {
    patients: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getPatients = () => {
    axios.get(API_URL).then((res) => this.setState({ patients: res.data }));
  };

  resetState = () => {
    this.getPatients();
  };

  render() {
    return (
      <Box border={0} textAlign="left">
        <Container style={{ marginTop: "20px" }} textAlign="left">
          <Row textAlign="left">
            <Col>
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
