import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPatientForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }
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
        add_notes: "",
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
        <div className="radio">
          <Label for="sex">Sex:</Label>
          <br />    
          <Input 
           type="radio"
           value="Female"
           checked={this.state.selectedOption === "Female"}
           onChange={this.onValueChange}
          />
        Female
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="Male"
           checked={this.state.selectedOption === "Male"}
           onChange={this.onValueChange}
          />
        Male
        </div>  
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
        <div className="radio">
          <Label for="xray">XRAY:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="belted">Belted:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="obese">Obese:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="cardio">Cardio:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="patho">Patho:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="tobacco">Tobacco:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="marijuana">Marijuana:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="alcohol">Alcohol:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="prescription">Prescription:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
        </FormGroup>
        <FormGroup>
        <div className="radio">
          <Label for="drug-use">Drug-use:</Label>
          <br />    
          <Input 
           type="radio"
           value="Yes"
           checked={this.state.selectedOption === "Yes"}
           onChange={this.onValueChange}
          />
        Yes
        </div>  
        <div className="radio">
          <Input 
           type="radio"
           value="No"
           checked={this.state.selectedOption === "No"}
           onChange={this.onValueChange}
          />
        No
        </div>  
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
