import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPatientForm extends React.Component {
  state = {
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
    rib_fracture: "",
  };

  componentDidMount() {
    if (this.props.patient) {
      const {
        pk,
        case_id,
        age,
        sex,
        weight,
        ancestry,
        mod,
        cod,
        cod_type,
        xray,
        belted,
        obese,
        cardio,
        patho,
        tobacco,
        marijuana,
        alcohol,
        prescription,
        drug_use,
        health_notes,
        rib_fracture,
      } = this.props.patient;
      this.setState({
        pk,
        case_id,
        age,
        sex,
        weight,
        ancestry,
        mod,
        cod,
        cod_type,
        xray,
        belted,
        obese,
        cardio,
        patho,
        tobacco,
        marijuana,
        alcohol,
        prescription,
        drug_use,
        health_notes,
        rib_fracture,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  createPatient = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
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
        rib_fracture: "",
      });
      this.props.toggle();
    });
  };

  editPatient = (e) => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={this.props.patient ? this.editPatient : this.createPatient}
      >
        <FormGroup>
          <Label for="case_id">Case ID:</Label>
          <Input
            type="text"
            name="case_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.case_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age:</Label>
          <Input
            type="text"
            name="age"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.age)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sex">Sex:</Label>
          <select
            name="sex"
            id="sex-select"
            value={this.state.sex}
            onChange={this.onChange}
          >
            <option value="">-- select an option --</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight:</Label>
          <Input
            type="text"
            name="weight"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.weight)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ancestry">Ancestry:</Label>
          <select
            name="ancestry"
            id="ancestry-select"
            value={this.state.ancestry}
            onChange={this.onChange}
          >
            <option value="">-- select an option --</option>
            <option value="White">White</option>
            <option value="Hispanic">Hispanic</option>
            <option value="Black">Black</option>
            <option value="American Indian">American Indian</option>
            <option value="Asian">Asian</option>
            <option value="Filipino">Filipino</option>
            <option value="Pacific Islander">Pacific Islander</option>
            <option value="West Asian">West Asian</option>
            <option value="Asian Indian">Asian Indian</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="mod">Mode of Death:</Label>
          <Input
            type="text"
            name="mod"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.mod)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cod">Cause of Death:</Label>
          <Input
            type="text"
            name="cod"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.cod)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cod_type">COD Type:</Label>
          <Input
            type="text"
            name="cod_type"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.cod_type)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="xray">XRAY:</Label>
          <select
            name="xray"
            id="xray-select"
            value={this.state.xray}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="belted">Belted:</Label>
          <select
            name="belted"
            id="belted-select"
            value={this.state.belted}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="obese">Obese:</Label>
          <select
            name="obese"
            id="obese-select"
            value={this.state.obese}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="cardio">Cardio:</Label>
          <select
            name="cardio"
            id="cardio-select"
            value={this.state.cardio}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="patho">Patho:</Label>
          <select
            name="patho"
            id="patho-select"
            value={this.state.patho}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="tobacco">Tobacco:</Label>
          <select
            name="tobacco"
            id="tobacco-select"
            value={this.state.tobacco}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="marijuana">Marijuana:</Label>
          <select
            name="marijuana"
            id="marijuana-select"
            value={this.state.marijuana}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="alcohol">Alcohol:</Label>
          <select
            name="alcohol"
            id="alcohol-select"
            value={this.state.alcohol}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="prescription">Prescription:</Label>
          <select
            name="prescription"
            id="prescription-select"
            value={this.state.prescription}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="drug_use">Drug Use:</Label>
          <select
            name="drug_use"
            id="drug_use-select"
            value={this.state.drug_use}
            onChange={this.onChange}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label for="health_notes">Health Notes:</Label>
          <Input
            type="text"
            name="health_notes"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.health_notes)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPatientForm;
