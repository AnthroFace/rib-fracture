import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import axios from "axios";
import { API_URL } from "../constants";

const URL = "http://localhost:8000/api/filter/";

const Ancestries = [
  "Asian",
  "White",
  "Black",
  "Hispanic",
  "Filipino",
  "American Indian",
  "Pacific Islander",
  "West Asian",
  "Black Hispanic",
  "Asian Indian",
];

const Sexes = ["Female", "Male"];

const YesNo = ["Yes", "No"];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ancestry: "",
      sex: "",
      xray: "",
      cpr: "",
      belted: "",
      obese: "",
      cardio: "",
      patho: "",
      tobacco: "",
      marijuana: "",
      alcohol: "",
      prescripiton: "",
      druguse: "",
      ancestryinputValue: "",
      sexinputvalue: "",
      xrayinputvalue: "",
      cprinputvalue: "",
      beltedinputvalue: "",
      obeseinputvalue: "",
      cardioinputvalue: "",
      pathoinputvalue: "",
      tobaccoinputvalue: "",
      marijuanainputvalue: "",
      alcoholinputvalue: "",
      prescriptioninputvalue: "",
      druguseinputvalue: "",
      filter: [],
    };
  }

  deleteFilter = (pk) => {
    axios.delete(URL + pk).then(() => {});
  };

  editFilter = (e) => {
    e.preventDefault();
    axios.put(URL + "1", this.state).then(function (response) {
      console.log(response);
    });
  };

  filter = (event) => {
    console.log("filtering");
    axios.get(API_URL).then((res) => {
      if (res.data.length == 0) {
        axios
          .post(URL, { ancestry: this.state.ancestry })
          .then(function (response) {
            console.log(response);
          });
      } else {
        this.editFilter(event);
      }
    });
  };

  render() {
    return (
      <div>
        <Autocomplete
          value={this.state.sex}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ sex: "" });
            } else {
              this.setState({ sex: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.sexinputvalue}
          onInputChange={(event, newInputValue) => {
            console.log(newInputValue);
            this.setState({ sexinputvalue: newInputValue });
          }}
          id="sex-choices"
          openOnFocus={true}
          options={Sexes}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Sex" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.ancestry}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ ancestry: "" });
            } else {
              this.setState({ ancestry: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.ancestryinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ ancestryinputValue: newInputValue });
          }}
          id="ancestry-choice"
          options={Ancestries}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Ancestry" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.xray}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ xray: "" });
            } else {
              this.setState({ xray: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.xrayinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ xrayinputValue: newInputValue });
          }}
          id="xray-choice"
          openOnFocus={true}
          options={YesNo}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="X-Ray Taken" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.cpr}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ cpr: "" });
            } else {
              this.setState({ cpr: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.cprinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ cprinputValue: newInputValue });
          }}
          id="cpr-choice"
          openOnFocus={true}
          options={YesNo}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="CPR Performed" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.belted}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ belted: "" });
            } else {
              this.setState({ belted: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.beltedinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ beltedinputValue: newInputValue });
          }}
          id="belted-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Belted" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.obese}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ obese: "" });
            } else {
              this.setState({ obese: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.obeseinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ obeseinputValue: newInputValue });
          }}
          id="obese-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Obese" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.cardio}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ cardio: "" });
            } else {
              this.setState({ cardio: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.cardioinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ cardioinputValue: newInputValue });
          }}
          id="cardio-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Cardio" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.patho}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ patho: "" });
            } else {
              this.setState({ patho: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.pathoinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ pathoinputValue: newInputValue });
          }}
          id="patho-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Pathology Taken" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.tobacco}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ tobacco: "" });
            } else {
              this.setState({ tobacco: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.tobaccoinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ tobaccoinputValue: newInputValue });
          }}
          id="tobacco-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Tobacco Usage" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.marijuana}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ marijuana: "" });
            } else {
              this.setState({ marijuana: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.marijuanainputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ marijuanainputValue: newInputValue });
          }}
          id="marijuana-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Marijuana Usage" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.alcohol}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ alcohol: "" });
            } else {
              this.setState({ alcohol: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.alcoholinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ alcoholinputValue: newInputValue });
          }}
          id="alcohol-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Alcohol Usage" variant="outlined" />
          )}
        />

        <Autocomplete
          value={this.state.prescription}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ prescription: "" });
            } else {
              this.setState({ prescription: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.prescriptioninputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ prescriptioninputValue: newInputValue });
          }}
          id="prescription-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Prescription Medicine Usage"
              variant="outlined"
            />
          )}
        />

        <Autocomplete
          value={this.state.druguse}
          onChange={(event, newValue, reason) => {
            if (reason == "clear") {
              this.setState({ druguse: "" });
            } else {
              this.setState({ druguse: newValue });
            }
            // this.props.onSelectValue();
          }}
          inputValue={this.state.druguseinputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ druguseinputValue: newInputValue });
          }}
          id="druguse-choice"
          options={YesNo}
          openOnFocus={true}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Drug(s) Usage" variant="outlined" />
          )}
        />

        <Button variant="contained" onClick={this.filter}>
          Filter
        </Button>
        {console.log(this.state)}
      </div>
    );
  }
}

export default SearchBar;
