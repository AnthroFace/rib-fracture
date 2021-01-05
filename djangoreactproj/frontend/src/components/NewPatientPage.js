import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import NewPatientForm from "./NewPatientForm";
import { Typography } from "@material-ui/core";

class NewPatientPage extends Component {
  state = {};

  toggle = () => {
    alert("Database changed");
  };

  resetState = () => {
    this.setState({
      pk: 0,
      case_id: "",
      age: "",
      sex: "",
      weight: "",
      ancestry: "",
      mod: "",
      cod: "",
      cod_type: "",
      xray: "",
      belted: "",
      obese: "",
      cardio: "",
      patho: "",
      tobacco: "",
      marijuana: "",
      alcohol: "",
      prescription: "",
      drug_use: "",
      health_notes: "",
      add_notes: "",
      rib_fracture: "",
    });
  };

  render() {
    return (
      <Fragment>
        <Typography variant="h2">Creating New Patient</Typography>
        <NewPatientForm resetState={this.resetState} toggle={this.toggle} />
      </Fragment>
    );
  }
}

export default NewPatientPage;
