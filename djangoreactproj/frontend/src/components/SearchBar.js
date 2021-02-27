import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import axios from "axios";
import { API_URL } from "../constants";

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
      // fil: "",
      // value: "",
      ancestry: "",
      inputValue: "",
      filter: [],
    };
  }

  //   load = () => {
  //     this.setState({ msg: "Click on Fractured Ribs" });
  //   };
  deleteFilter = (pk) => {
    axios.delete(URL + pk).then(() => {});
  };

  editFilter = (e) => {
    e.preventDefault();
    axios.put(URL + "1", this.state).then(() => {});
  };

  filter = (event) => {
    console.log("filtering");
    axios.get(API_URL).then((res) => this.setState({ filter: res.data }));
    console.log(this.state.filter.length);
    if (this.state.filter.length == 0) {
      axios
        .post(URL, {
          // fil: "ancestry",
          // value: newValue,
          ancestry: this.state.an,
        })
        .then(function (response) {
          console.log(response);
        });
    } else {
      this.editFilter(event);
    }
    // try {
    //   this.editFilter(event);
    //   // axios.post(URL, {
    //   //   // fil: "ancestry",
    //   //   // value: newValue,
    //   //   ancestry: newValue
    //   // }).then(function (response) {
    //   //   console.log(response);
    //   // });
    // } catch {
    //   axios
    //     .post(URL, {
    //       // fil: "ancestry",
    //       // value: newValue,
    //       ancestry: this.state.an,
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     });
    // }
  };

  render() {
    return (
      <div>
        {/* <div>{`filter: ${
          this.state.fil !== "" ? `'${this.state.fil}'` : ""
        }`}</div>
        <div>{`value: ${
          this.state.value !== "" ? `'${this.state.value}'` : ""
        }`}</div> */}
        <div>{`ancestry: ${
          this.state.ancestry !== "" ? `'${this.state.ancestry}'` : ""
        }`}</div>
        <div>{`inputValue: '${this.state.inputValue}'`}</div>
        <br />

        <Autocomplete
          value={this.state.ancestry}
          onChange={(event, newValue) => {
            //setValue(newValue);
            this.setState({ ancestry: newValue });
            //this.handleChange(event, newValue);
            // this.props.toggle();
            // this.props.onSelectValue(this.state.filter, this.state.value);
            this.props.onSelectValue();
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
        <Button variant="contained" onClick={this.filter}>
          Filter
        </Button>
      </div>
    );
  }
}

export default SearchBar;
