import React, { Fragment } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import RibImage from "./RibImage";

import axios from "axios";

import { API_URL } from "../constants";

class NewPatientForm extends React.Component {
  state = {
    pk: 0,
    case_id: "",
    age: "",
    sex: "",
    weight: "",
    height: "",
    ancestry: "",
    mod: "",
    cod: "",
    cod_type: "",
    xray: "",
    cpr: "",
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
    notes: "",
    rib_fracture: [
      { location: "", completeness: "", fracture_type: "", cpr: "" },
    ],
    num_fractures: 1,
  };

  componentDidMount() {
    if (this.props.patient) {
      const {
        pk,
        case_id,
        age,
        sex,
        weight,
        height,
        ancestry,
        mod,
        cod,
        cod_type,
        xray,
        cpr,
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
        notes,
        rib_fracture,
        num_fractures,
      } = this.props.patient;
      this.setState({
        pk,
        case_id,
        age,
        sex,
        weight,
        height,
        ancestry,
        mod,
        cod,
        cod_type,
        xray,
        cpr,
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
        notes,
        rib_fracture,
        num_fractures,
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
        height: "",
        ancestry: "",
        mod: "",
        cod: "",
        cod_type: "",
        xray: "",
        cpr: "",
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
        notes: "",
        rib_fracture: [
          { location: "", completeness: "", fracture_type: "", cpr: "" },
        ],
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

  handleLocationChange = (loc) => {
    console.log(loc);
    // console.log(index);
    const values = [...this.state.rib_fracture];
    if (this.state.num_fractures == 1) {
      values[0].location = loc;
    } else {
      values.push({
        location: loc,
        completeness: "",
        fracture_type: "",
        cpr: "",
      });
    }
    this.setState({ rib_fracture: values });
    this.setState({ num_fractures: this.state.num_fractures + 1 });
    // const values = [...this.state.rib_fracture];
    // values[index].location = location;
    // this.setState({ rib_fracture: values });
  };

  handleFractureInputChange = (index, event) => {
    const values = [...this.state.rib_fracture];
    if (event.target.name === "location") {
      values[index].location = event.target.value;
    } else if (event.target.name === "completeness") {
      values[index].completeness = event.target.value;
    } else if (event.target.name === "fracture_type") {
      values[index].fracture_type = event.target.value;
    } else if (event.target.name === "cpr") {
      values[index].cpr = event.target.value;
    }
    console.log(index);
    console.log(event);
    this.setState({ rib_fracture: values });
  };

  handleFractureAddFields = () => {
    const values = [...this.state.rib_fracture];
    values.push({ location: "", completeness: "", fracture_type: "", cpr: "" });
    this.setState({ rib_fracture: values });
    this.setState({ num_fractures: this.state.num_fractures + 1 });
  };

  handleFractureRemoveFields = (index) => {
    const values = [...this.state.rib_fracture];
    values.splice(index, 1);
    this.setState({ rib_fracture: values });
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
          <Label for="sex">Sex: </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="sex"
            checked={(this.state.sex == "M")}
            onChange={this.onChange}
            value="M"
            />
          Male
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="sex"
            checked={(this.state.sex == "F")}
            onChange={this.onChange}
            value="F"
            />
          Female
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="sex"
            checked={(this.state.sex == "")}
            onChange={this.onChange}
            value=""
            />
          Unknown
          </Label>
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
          <Label for="height">Height:</Label>
          <Input
            type="text"
            name="height"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.height)}
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="xray"
            checked={(this.state.xray == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="xray"
            checked={(this.state.xray == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="cpr">CPR:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="cpr"
            checked={(this.state.cpr == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="cpr"
            checked={(this.state.cpr == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="belted">Belted:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="belted"
            checked={(this.state.belted == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="belted"
            checked={(this.state.belted == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>
        
        <FormGroup>
          <Label for="obese">Obese:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="obese"
            checked={(this.state.obese == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="obese"
            checked={(this.state.obese == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="cardio">Cardio:</Label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="cardio"
            checked={(this.state.cardio == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="cardio"
            checked={(this.state.cardio == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="patho">Patho:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="patho"
            checked={(this.state.patho == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="patho"
            checked={(this.state.patho == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="tobacco">Tobacco:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="tobacco"
            checked={(this.state.tobacco == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="tobacco"
            checked={(this.state.tobacco == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="marijuana">Marijuana:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="marijuana"
            checked={(this.state.marijuana == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="marijuana"
            checked={(this.state.marijuana == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="alcohol">Alcohol:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="alcohol"
            checked={(this.state.alcohol == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="alcohol"
            checked={(this.state.alcohol == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>


        <FormGroup>
          <Label for="prescription">Prescription:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="prescription"
            checked={(this.state.prescription == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="prescription"
            checked={(this.state.prescription == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="drug_use">Drug Use:</Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="drug_use"
            checked={(this.state.drug_use == "Y")}
            onChange={this.onChange}
            value="Y"
            />
          Yes
          </Label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Label>
          <Input 
            type="radio"
            name="drug_use"
            checked={(this.state.drug_use == "N")}
            onChange={this.onChange}
            value="N"
            />
          No
          </Label>
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
        <FormGroup>
          <Label for="notes">Notes:</Label>
          <Input
            type="text"
            name="notes"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.notes)}
          />
        </FormGroup>
        <div id="dynamicform" className="form-row">
          <RibImage
            onSelectLocation={(event) => this.handleLocationChange(event)}
          />
          {this.state.rib_fracture.map((fracture, index) => (
            <Fragment key={`${fracture}~${index}`}>
              {/* <img src="/images/rib_image.png" alt="Workplace" usemap="#workmap" height="100"/> <map name="workmap">
                <area
                  shape="circle"
                  coords="337,300,44"
                  onclick="myFunction()"
                />
              </map>*/}

              <div className="form-group col-sm-6">
                <label htmlFor="location">Rib (1-12).Location (1-4)</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={fracture.location}
                  onChange={(event) =>
                    this.handleFractureInputChange(index, event)
                  }
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="completeness">Completeness (%)</label>
                <input
                  type="text"
                  className="form-control"
                  id="completeness"
                  name="completeness"
                  value={fracture.completeness}
                  onChange={(event) =>
                    this.handleFractureInputChange(index, event)
                  }
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="fracture_type">Fracture Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="fracture_type"
                  name="fracture_type"
                  value={fracture.fracture_type}
                  onChange={(event) =>
                    this.handleFractureInputChange(index, event)
                  }
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="cpr">Broken by CPR (Y/N) </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpr"
                  name="cpr"
                  value={fracture.cpr}
                  onChange={(event) =>
                    this.handleFractureInputChange(index, event)
                  }
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => this.handleFractureRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => this.handleFractureAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
          {/**/}
          <br />
          <pre>{JSON.stringify(this.state.rib_fracture, null, 2)}</pre>
        </div>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPatientForm;
