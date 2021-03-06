import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import axios from "axios";

const URL = "http://localhost:8000/api/filter/";

const Ancestries = [
  "asian",
  "white",
  "black",
  "hispanic",
  "filipino",
  "american indian",
  "pacific islander",
  "west asian",
  "black hispanic",
  "asian indian",
];

const Sexes = ["Female", "Male"];

const YesNo = ["Y", "N"];

const RibSections = [
  "sternum",
  "lprib1",
  "lplrib1",
  "lalrib1",
  "lprib2",
  "lplrib2",
  "lalrib2",
  "larib2",
  "lprib3",
  "lplrib3",
  "lalrib3",
  "larib3",
  "lprib4",
  "lplrib4",
  "lalrib4",
  "larib4",
  "lprib5",
  "lplrib5",
  "lalrib5",
  "larib5",
  "lprib6",
  "lplrib6",
  "lalrib6",
  "larib6",
  "lprib7",
  "lplrib7",
  "lalrib7",
  "larib7",
  "lprib8",
  "lplrib8",
  "lalrib8",
  "larib8",
  "lprib9",
  "lplrib9",
  "lalrib9",
  "larib9",
  "lprib10",
  "lplrib10",
  "lalrib10",
  "larib10",
  "lprib11",
  "lplrib11",
  "lalrib11",
  "lprib12",
  "lplrib12",
  "lalrib12",
  "rprib1",
  "rplrib1",
  "ralrib1",
  "rprib2",
  "rplrib2",
  "ralrib2",
  "rarib2",
  "rprib3",
  "rplrib3",
  "ralrib3",
  "rarib3",
  "rprib4",
  "rplrib4",
  "ralrib4",
  "rarib4",
  "rprib5",
  "rplrib5",
  "ralrib5",
  "rarib5",
  "rprib6",
  "rplrib6",
  "ralrib6",
  "rarib6",
  "rprib7",
  "rplrib7",
  "ralrib7",
  "rarib7",
  "rprib8",
  "rplrib8",
  "ralrib8",
  "rarib8",
  "rprib9",
  "rplrib9",
  "ralrib9",
  "rarib9",
  "rprib10",
  "rplrib10",
  "ralrib10",
  "rarib10",
  "rprib11",
  "rplrib11",
  "ralrib11",
  "rprib12",
  "rplrib12",
  "ralrib12",
];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age_start: null,
      age_end: null,
      weight_start: null,
      weight_end: null,
      height_start: null,
      height_end: null,
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
      drug_use: "",
      rib_section: [],
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
      ribsectioninputvalue: [],
      filter: [],
      sternum: null,
      lprib1: null,
      lplrib1: null,
      lalrib1: null,
      lprib2: null,
      lplrib2: null,
      lalrib2: null,
      larib2: null,
      lprib3: null,
      lplrib3: null,
      lalrib3: null,
      larib3: null,
      lprib4: null,
      lplrib4: null,
      lalrib4: null,
      larib4: null,
      lprib5: null,
      lplrib5: null,
      lalrib5: null,
      larib5: null,
      lprib6: null,
      lplrib6: null,
      lalrib6: null,
      larib6: null,
      lprib7: null,
      lplrib7: null,
      lalrib7: null,
      larib7: null,
      lprib8: null,
      lplrib8: null,
      lalrib8: null,
      larib8: null,
      lprib9: null,
      lplrib9: null,
      lalrib9: null,
      larib9: null,
      lprib10: null,
      lplrib10: null,
      lalrib10: null,
      larib10: null,
      lprib11: null,
      lplrib11: null,
      lalrib11: null,
      lprib12: null,
      lplrib12: null,
      lalrib12: null,
      rprib1: null,
      rplrib1: null,
      ralrib1: null,
      rprib2: null,
      rplrib2: null,
      ralrib2: null,
      rarib2: null,
      rprib3: null,
      rplrib3: null,
      ralrib3: null,
      rarib3: null,
      rprib4: null,
      rplrib4: null,
      ralrib4: null,
      rarib4: null,
      rprib5: null,
      rplrib5: null,
      ralrib5: null,
      rarib5: null,
      rprib6: null,
      rplrib6: null,
      ralrib6: null,
      rarib6: null,
      rprib7: null,
      rplrib7: null,
      ralrib7: null,
      rarib7: null,
      rprib8: null,
      rplrib8: null,
      ralrib8: null,
      rarib8: null,
      rprib9: null,
      rplrib9: null,
      ralrib9: null,
      rarib9: null,
      rprib10: null,
      rplrib10: null,
      ralrib10: null,
      rarib10: null,
      rprib11: null,
      rplrib11: null,
      ralrib11: null,
      rprib12: null,
      rplrib12: null,
      ralrib12: null,
      dataset: ""
    };
  }

  deleteFilter = (pk) => {
    axios.delete(URL + pk).then(() => {});
  };

  clearFilter = () => {
    this.setState({
      age_start: null,
      age_end: null,
      weight_start: null,
      weight_end: null,
      height_start: null,
      height_end: null,
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
      drug_use: "",
      rib_section: [],
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
      ribsectioninputvalue: [],
      filter: [],
      sternum: null,
      lprib1: null,
      lplrib1: null,
      lalrib1: null,
      lprib2: null,
      lplrib2: null,
      lalrib2: null,
      larib2: null,
      lprib3: null,
      lplrib3: null,
      lalrib3: null,
      larib3: null,
      lprib4: null,
      lplrib4: null,
      lalrib4: null,
      larib4: null,
      lprib5: null,
      lplrib5: null,
      lalrib5: null,
      larib5: null,
      lprib6: null,
      lplrib6: null,
      lalrib6: null,
      larib6: null,
      lprib7: null,
      lplrib7: null,
      lalrib7: null,
      larib7: null,
      lprib8: null,
      lplrib8: null,
      lalrib8: null,
      larib8: null,
      lprib9: null,
      lplrib9: null,
      lalrib9: null,
      larib9: null,
      lprib10: null,
      lplrib10: null,
      lalrib10: null,
      larib10: null,
      lprib11: null,
      lplrib11: null,
      lalrib11: null,
      lprib12: null,
      lplrib12: null,
      lalrib12: null,
      rprib1: null,
      rplrib1: null,
      ralrib1: null,
      rprib2: null,
      rplrib2: null,
      ralrib2: null,
      rarib2: null,
      rprib3: null,
      rplrib3: null,
      ralrib3: null,
      rarib3: null,
      rprib4: null,
      rplrib4: null,
      ralrib4: null,
      rarib4: null,
      rprib5: null,
      rplrib5: null,
      ralrib5: null,
      rarib5: null,
      rprib6: null,
      rplrib6: null,
      ralrib6: null,
      rarib6: null,
      rprib7: null,
      rplrib7: null,
      ralrib7: null,
      rarib7: null,
      rprib8: null,
      rplrib8: null,
      ralrib8: null,
      rarib8: null,
      rprib9: null,
      rplrib9: null,
      ralrib9: null,
      rarib9: null,
      rprib10: null,
      rplrib10: null,
      ralrib10: null,
      rarib10: null,
      rprib11: null,
      rplrib11: null,
      ralrib11: null,
      rprib12: null,
      rplrib12: null,
      ralrib12: null,
      dataset: ""
    });
    this.props.onClear();
  };

  editFilter = (e) => {
    // e.preventDefault();
    axios
      .put(URL + localStorage.getItem("current_dataset"), {
        dataset: localStorage.getItem("current_dataset"),
        age_start: this.state.age_start,
        age_end: this.state.age_end,
        weight_start: this.state.weight_start,
        weight_end: this.state.weight_end,
        height_start: this.state.weight_start,
        height_end: this.state.height_end,
        sex: this.state.sex,
        ancestry: this.state.ancestry,
        xray: this.state.xray,
        cpr: this.state.cpr,
        belted: this.state.belted,
        obese: this.state.obese,
        cardio: this.state.cardio,
        patho: this.state.patho,
        tobacco: this.state.tobacco,
        marijuana: this.state.marijuana,
        alcohol: this.state.alcohol,
        prescripiton: this.state.prescripiton,
        drug_use: this.state.drug_use,
        sternum: this.state.sternum,
        lprib1: this.state.lprib1,
        lplrib1: this.state.lplrib1,
        lalrib1: this.state.lalrib1,
        lprib2: this.state.lprib2,
        lplrib2: this.state.lplrib2,
        lalrib2: this.state.lalrib2,
        larib2: this.state.larib2,
        lprib3: this.state.lprib3,
        lplrib3: this.state.lplrib3,
        lalrib3: this.state.lalrib3,
        larib3: this.state.larib3,
        lprib4: this.state.lprib4,
        lplrib4: this.state.lplrib4,
        lalrib4: this.state.lalrib4,
        larib4: this.state.larib4,
        lprib5: this.state.lprib5,
        lplrib5: this.state.lplrib5,
        lalrib5: this.state.lalrib5,
        larib5: this.state.larib5,
        lprib6: this.state.lprib6,
        lplrib6: this.state.lplrib6,
        lalrib6: this.state.lalrib6,
        larib6: this.state.larib6,
        lprib7: this.state.lprib7,
        lplrib7: this.state.lplrib7,
        lalrib7: this.state.lalrib7,
        larib7: this.state.larib7,
        lprib8: this.state.lprib8,
        lplrib8: this.state.lplrib8,
        lalrib8: this.state.lalrib8,
        larib8: this.state.larib8,
        lprib9: this.state.lprib9,
        lplrib9: this.state.lplrib9,
        lalrib9: this.state.lalrib9,
        larib9: this.state.larib9,
        lprib10: this.state.lprib10,
        lplrib10: this.state.lplrib10,
        lalrib10: this.state.lalrib10,
        larib10: this.state.larib10,
        lprib11: this.state.lprib11,
        lplrib11: this.state.lplrib11,
        lalrib11: this.state.lalrib11,
        lprib12: this.state.lprib12,
        lplrib12: this.state.lplrib12,
        lalrib12: this.state.lalrib12,
        rprib1: this.state.rprib1,
        rplrib1: this.state.rplrib1,
        ralrib1: this.state.ralrib1,
        rprib2: this.state.rprib2,
        rplrib2: this.state.rplrib2,
        ralrib2: this.state.ralrib2,
        rarib2: this.state.rarib2,
        rprib3: this.state.rprib3,
        rplrib3: this.state.rplrib3,
        ralrib3: this.state.ralrib3,
        rarib3: this.state.rarib3,
        rprib4: this.state.rprib4,
        rplrib4: this.state.rplrib4,
        ralrib4: this.state.ralrib4,
        rarib4: this.state.rarib4,
        rprib5: this.state.rprib5,
        rplrib5: this.state.rplrib5,
        ralrib5: this.state.ralrib5,
        rarib5: this.state.rarib5,
        rprib6: this.state.rprib6,
        rplrib6: this.state.rplrib6,
        ralrib6: this.state.ralrib6,
        rarib6: this.state.rarib6,
        rprib7: this.state.rprib7,
        rplrib7: this.state.rplrib7,
        ralrib7: this.state.ralrib7,
        rarib7: this.state.rarib7,
        rprib8: this.state.rprib8,
        rplrib8: this.state.rplrib8,
        ralrib8: this.state.ralrib8,
        rarib8: this.state.rarib8,
        rprib9: this.state.rprib9,
        rplrib9: this.state.rplrib9,
        ralrib9: this.state.ralrib9,
        rarib9: this.state.rarib9,
        rprib10: this.state.rprib10,
        rplrib10: this.state.rplrib10,
        ralrib10: this.state.ralrib10,
        rarib10: this.state.rarib10,
        rprib11: this.state.rprib11,
        rplrib11: this.state.rplrib11,
        ralrib11: this.state.ralrib11,
        rprib12: this.state.rprib12,
        rplrib12: this.state.rplrib12,
        ralrib12: this.state.ralrib12,
        dataset: localStorage.getItem("current_dataset")
      }, 
      {headers: {Authorization: `JWT ${localStorage.getItem('token')}`}}
      ).then(function (response) {
        // console.log("EDITING", response);
      });
  };

  filter = (event) => {
    // console.log("filtering");
    var i;
    for (i = 0; i < this.state.rib_section.length; i++) {
      this.setState({ [this.state.rib_section[i]]: 1 });
    }
    axios.get(URL, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      } ,
         params:{
            dataset: localStorage.getItem("current_dataset")}
    }).then((res) => {
      console.log(res.data);
      console.log("data length:", res.data.length);

      if (res.data.length == 0) {
        axios
          .post(URL, {
            dataset: localStorage.getItem("current_dataset"),
            age_start: this.state.age_start,
            age_end: this.state.age_end,
            weight_start: this.state.weight_start,
            weight_end: this.state.weight_end,
            height_start: this.state.height_start,
            height_end: this.state.height_end,
            sex: this.state.sex,
            ancestry: this.state.ancestry,
            xray: this.state.xray,
            cpr: this.state.cpr,
            belted: this.state.belted,
            obese: this.state.obese,
            cardio: this.state.cardio,
            patho: this.state.patho,
            tobacco: this.state.tobacco,
            marijuana: this.state.marijuana,
            alcohol: this.state.alcohol,
            prescripiton: this.state.prescripiton,
            drug_use: this.state.drug_use,
            rib_section: this.state.rib_section,
            sternum: this.state.sternum,
            lprib1: this.state.lprib1,
            lplrib1: this.state.lplrib1,
            lalrib1: this.state.lalrib1,
            lprib2: this.state.lprib2,
            lplrib2: this.state.lplrib2,
            lalrib2: this.state.lalrib2,
            larib2: this.state.larib2,
            lprib3: this.state.lprib3,
            lplrib3: this.state.lplrib3,
            lalrib3: this.state.lalrib3,
            larib3: this.state.larib3,
            lprib4: this.state.lprib4,
            lplrib4: this.state.lplrib4,
            lalrib4: this.state.lalrib4,
            larib4: this.state.larib4,
            lprib5: this.state.lprib5,
            lplrib5: this.state.lplrib5,
            lalrib5: this.state.lalrib5,
            larib5: this.state.larib5,
            lprib6: this.state.lprib6,
            lplrib6: this.state.lplrib6,
            lalrib6: this.state.lalrib6,
            larib6: this.state.larib6,
            lprib7: this.state.lprib7,
            lplrib7: this.state.lplrib7,
            lalrib7: this.state.lalrib7,
            larib7: this.state.larib7,
            lprib8: this.state.lprib8,
            lplrib8: this.state.lplrib8,
            lalrib8: this.state.lalrib8,
            larib8: this.state.larib8,
            lprib9: this.state.lprib9,
            lplrib9: this.state.lplrib9,
            lalrib9: this.state.lalrib9,
            larib9: this.state.larib9,
            lprib10: this.state.lprib10,
            lplrib10: this.state.lplrib10,
            lalrib10: this.state.lalrib10,
            larib10: this.state.larib10,
            lprib11: this.state.lprib11,
            lplrib11: this.state.lplrib11,
            lalrib11: this.state.lalrib11,
            lprib12: this.state.lprib12,
            lplrib12: this.state.lplrib12,
            lalrib12: this.state.lalrib12,
            rprib1: this.state.rprib1,
            rplrib1: this.state.rplrib1,
            ralrib1: this.state.ralrib1,
            rprib2: this.state.rprib2,
            rplrib2: this.state.rplrib2,
            ralrib2: this.state.ralrib2,
            rarib2: this.state.rarib2,
            rprib3: this.state.rprib3,
            rplrib3: this.state.rplrib3,
            ralrib3: this.state.ralrib3,
            rarib3: this.state.rarib3,
            rprib4: this.state.rprib4,
            rplrib4: this.state.rplrib4,
            ralrib4: this.state.ralrib4,
            rarib4: this.state.rarib4,
            rprib5: this.state.rprib5,
            rplrib5: this.state.rplrib5,
            ralrib5: this.state.ralrib5,
            rarib5: this.state.rarib5,
            rprib6: this.state.rprib6,
            rplrib6: this.state.rplrib6,
            ralrib6: this.state.ralrib6,
            rarib6: this.state.rarib6,
            rprib7: this.state.rprib7,
            rplrib7: this.state.rplrib7,
            ralrib7: this.state.ralrib7,
            rarib7: this.state.rarib7,
            rprib8: this.state.rprib8,
            rplrib8: this.state.rplrib8,
            ralrib8: this.state.ralrib8,
            rarib8: this.state.rarib8,
            rprib9: this.state.rprib9,
            rplrib9: this.state.rplrib9,
            ralrib9: this.state.ralrib9,
            rarib9: this.state.rarib9,
            rprib10: this.state.rprib10,
            rplrib10: this.state.rplrib10,
            ralrib10: this.state.ralrib10,
            rarib10: this.state.rarib10,
            rprib11: this.state.rprib11,
            rplrib11: this.state.rplrib11,
            ralrib11: this.state.ralrib11,
            rprib12: this.state.rprib12,
            rplrib12: this.state.rplrib12,
            ralrib12: this.state.ralrib12,
            dataset: localStorage.getItem("current_dataset")
          }, {headers: {Authorization: `JWT ${localStorage.getItem('token')}`}} 
          ).then(function (response) {
            // console.log(response);
          });
      } else {
        this.editFilter(event);
      }
      this.props.onSelectValue();
    });
  };

  render() {
    return (
      <div>
        <Toolbar>
          <TextField
            label="Age Start"
            variant="outlined"
            style={{ width: 150, marginRight: 4 }}
            value={this.state.age_start}
            onChange={(event) => {
              this.setState({ age_start: event.target.value });
            }}
          />
          <TextField
            label="Age End"
            variant="outlined"
            style={{ width: 150, marginRight: 4 }}
            value={this.state.age_end}
            onChange={(event) => {
              this.setState({ age_end: event.target.value });
            }}
          />
          <TextField
            label="Weight Start"
            variant="outlined"
            style={{ width: 150, marginRight: 4 }}
            value={this.state.weight_start}
            onChange={(event) => {
              this.setState({ weight_start: event.target.value });
            }}
          />
          <TextField
            label="Weight End"
            variant="outlined"
            style={{ width: 150, marginRight: 4 }}
            value={this.state.weight_end}
            onChange={(event) => {
              this.setState({ weight_end: event.target.value });
            }}
          />
          <TextField
            label="Height Start"
            variant="outlined"
            style={{ width: 150, marginRight: 4 }}
            value={this.state.height_start}
            onChange={(event) => {
              this.setState({ height_start: event.target.value });
            }}
          />
          <TextField
            label="Height End"
            variant="outlined"
            style={{ width: 150, marginRight: 4 }}
            value={this.state.height_end}
            onChange={(event) => {
              this.setState({ height_end: event.target.value });
            }}
          />
        </Toolbar>
        <Toolbar>
          <Autocomplete
            value={this.state.sex}
            onChange={(event, newValue, reason) => {
              if (reason == "clear") {
                this.setState({ sex: "" });
              } else {
                if (newValue === "Female") {
                  this.setState({ sex: "F" });
                } else {
                  this.setState({ sex: "M" });
                }
              }
              // this.props.onSelectValue();
            }}
            inputValue={this.state.sexinputvalue}
            onInputChange={(event, newInputValue) => {
              // console.log(newInputValue);
              this.setState({ sexinputvalue: newInputValue });
            }}
            id="sex-choices"
            openOnFocus={true}
            options={Sexes}
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField {...params} label="X-Ray" variant="outlined" />
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
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField {...params} label="CPR" variant="outlined" />
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
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField {...params} label="Pathology" variant="outlined" />
            )}
          />
        </Toolbar>
        <Toolbar>
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
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Marijuana Usage"
                variant="outlined"
              />
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
            style={{ width: 500, marginRight: 4 }}
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
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField {...params} label="Rx Usage" variant="outlined" />
            )}
          />
          <Autocomplete
            value={this.state.drug_use}
            onChange={(event, newValue, reason) => {
              if (reason == "clear") {
                this.setState({ drug_use: "" });
              } else {
                this.setState({ drug_use: newValue });
              }
              // this.props.onSelectValue();
            }}
            inputValue={this.state.druguseinputValue}
            onInputChange={(event, newInputValue) => {
              this.setState({ druguseinputValue: newInputValue });
            }}
            id="drug_use-choice"
            options={YesNo}
            openOnFocus={true}
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField {...params} label="Drug Usage" variant="outlined" />
            )}
          />
        </Toolbar>

        <Toolbar>
          <Autocomplete
            multiple
            value={this.state.rib_section}
            onChange={(event, newValue, reason) => {
              var i;
              if (reason == "clear") {
                for (i = 0; i < this.state.rib_section.length; i++) {
                  this.setState({ [this.state.rib_section[i]]: null });
                }
                this.setState({ rib_section: "" });
              } else {
                this.setState({ rib_section: newValue });
              }
            }}
            // inputValue={this.state.ribsectioninputvalue}
            // onInputChange={(event, newInputValue) => {
            //   this.setState({ ribsectioninputvalue: newInputValue });
            // }}
            id="rib_section-choice"
            options={RibSections}
            openOnFocus={true}
            filterSelectedOptions
            style={{ width: 500, marginRight: 4 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Rib Section(s)"
                placeholder="Rib Section"
              />
            )}
          />
        </Toolbar>
        <Toolbar>
          <Button
            style={{ marginRight: 8 }}
            variant="contained"
            onClick={this.filter}
          >
            Filter
          </Button>
          <Button
            style={{ marginRight: 14 }}
            variant="contained"
            onClick={this.clearFilter}
          >
            Clear
          </Button>
        </Toolbar>
        {console.log(this.state)}
      </div>
    );
  }
}

export default SearchBar;
