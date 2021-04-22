import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PatientList from "./PatientList";
import Box from "@material-ui/core/Box";
import SearchBar from "./SearchBar";
import axios from "axios";
import Heatmap from "./Heatmap";
import Button from "@material-ui/core/Button";

import { API_URL } from "../constants";

const URL = "http://localhost:8000/api/filter";

class HeatmapPage extends Component {
  state = {
    patients: [],
    rib_counts: null,
  };

  componentDidMount() {
    this.resetState();
  }

  getPatients = () => {
    axios.get(API_URL, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    }).then((res) =>
      this.setState({
        patients: res.data.patients,
        rib_counts: res.data.rib_counts,
      })
    );
  };

  getFilteredPatients = () => {
    axios.get(URL, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    }).then(
      (res) =>
        this.setState({
          patients: res.data.patients ? res.data.patients : res.data,
          rib_counts: res.data.rib_counts ? res.data.rib_counts : null,
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
    console.log(this.state);
    return (
      <Box border={0}>
        <Container
          style={{ marginTop: "20px", marginLeft: "0px" }}
          align="left"
        >
          <SearchBar
            onSelectValue={this.getFilteredPatients}
            onClear={this.resetState}
          />
          <Heatmap rib_counts={this.state.rib_counts} />
        </Container>
      </Box>
    );
  }
}

export default HeatmapPage;
