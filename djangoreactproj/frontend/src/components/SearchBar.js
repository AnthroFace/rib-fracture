import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import axios from "axios";

const URL = "http://localhost:8000/api/filter/";

const ancestries = [
  { ancestry: "Asian" },
  { ancestry: "White" },
  { ancestry: "Black" },
  { ancestry: "Hispanic" },
  { ancestry: "Filipino" },
  { ancestry: "American Indian" },
  { ancestry: "Pacific Islander" },
  { ancestry: "West Asian" },
  { ancestry: "Black Hispanic" },
  { ancestry: "Asian Indian" },
];

const Ancestries = [
  "",
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

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fil: "",
      value: "",
      inputValue: "",
    };
  }

  //   load = () => {
  //     this.setState({ msg: "Click on Fractured Ribs" });
  //   };

  //handleChange = (f, v) => {
  //  this.setState({
  //    filter: f,
  //    value: v,
  //  });
  //  this.props.onSelectValue(f, v);
  //};

  render() {
    return (
      <div>
        <div>{`filter: ${
          this.state.fil !== "" ? `'${this.state.fil}'` : ""
        }`}</div>
        <div>{`value: ${
          this.state.value !== "" ? `'${this.state.value}'` : ""
        }`}</div>
        <div>{`inputValue: '${this.state.inputValue}'`}</div>
        <br />

        <Autocomplete
          value={this.state.value}
          onChange = {(event, newValue) => {
            //setValue(newValue);
            this.setState({ fil: "ancestry", value: newValue });
            axios.post(URL, {
              fil: "ancestry",
              value: newValue
            }).then(function (response) {
              console.log(response);
            });
                // this.props.toggle();
            // this.props.onSelectValue(this.state.filter, this.state.value);
          }}
          inputValue={this.state.inputValue}
          onInputChange={(event, newInputValue) => {
            this.setState({ inputValue: newInputValue });
          }}
          id="controllable-states-demo"
          options={Ancestries}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Ancestry" variant="outlined" />
          )}
        />
      </div>
    );
  }
}

export default SearchBar;
