import React, { Component, Fragment } from "react";
import NewPatientForm from "./NewPatientForm";
import { Typography } from "@material-ui/core";

class NewPatientPage extends Component {
  state = {};

  toggle = () => {
    alert("Database changed");
    window.scrollTo(0, 0);
  };

  resetState = () => {
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
      sternum: "",
      cpr_sternum: "",
      lprib1: "",
      com_lprib1: "",
      type_lprib1: "",
      cpr_lprib1: "",
      lplrib1: "",
      com_lplrib1: "",
      type_lplrib1: "",
      cpr_lplrib1: "",
      lalrib1: "",
      com_lalrib1: "",
      type_lalrib1: "",
      cpr_lalrib1: "",
      lprib2: "",
      com_lprib2: "",
      type_lprib2: "",
      cpr_lprib2: "",
      lplrib2: "",
      com_lplrib2: "",
      type_lplrib2: "",
      cpr_lplrib2: "",
      lalrib2: "",
      com_lalrib2: "",
      type_lalrib2: "",
      cpr_lalrib2: "",
      larib2: "",
      com_larib2: "",
      type_larib2: "",
      cpr_larib2: "",
      lprib3: "",
      com_lprib3: "",
      type_lprib3: "",
      cpr_lprib3: "",
      lplrib3: "",
      com_lplrib3: "",
      type_lplrib3: "",
      cpr_lplrib3: "",
      lalrib3: "",
      com_lalrib3: "",
      type_lalrib3: "",
      cpr_lalrib3: "",
      larib3: "",
      com_larib3: "",
      type_larib3: "",
      cpr_larib3: "",
      lprib4: "",
      com_lprib4: "",
      type_lprib4: "",
      cpr_lprib4: "",
      lplrib4: "",
      com_lplrib4: "",
      type_lplrib4: "",
      cpr_lplrib4: "",
      lalrib4: "",
      com_lalrib4: "",
      type_lalrib4: "",
      cpr_lalrib4: "",
      larib4: "",
      com_larib4: "",
      type_larib4: "",
      cpr_larib4: "",
      lprib5: "",
      com_lprib5: "",
      type_lprib5: "",
      cpr_lprib5: "",
      lplrib5: "",
      com_lplrib5: "",
      type_lplrib5: "",
      cpr_lplrib5: "",
      lalrib5: "",
      com_lalrib5: "",
      type_lalrib5: "",
      cpr_lalrib5: "",
      larib5: "",
      com_larib5: "",
      type_larib5: "",
      cpr_larib5: "",
      lprib6: "",
      com_lprib6: "",
      type_lprib6: "",
      cpr_lprib6: "",
      lplrib6: "",
      com_lplrib6: "",
      type_lplrib6: "",
      cpr_lplrib6: "",
      lalrib6: "",
      com_lalrib6: "",
      type_lalrib6: "",
      cpr_lalrib6: "",
      larib6: "",
      com_larib6: "",
      type_larib6: "",
      cpr_larib6: "",
      lprib7: "",
      com_lprib7: "",
      type_lprib7: "",
      cpr_lprib7: "",
      lplrib7: "",
      com_lplrib7: "",
      type_lplrib7: "",
      cpr_lplrib7: "",
      lalrib7: "",
      com_lalrib7: "",
      type_lalrib7: "",
      cpr_lalrib7: "",
      larib7: "",
      com_larib7: "",
      type_larib7: "",
      cpr_larib7: "",
      lprib8: "",
      com_lprib8: "",
      type_lprib8: "",
      cpr_lprib8: "",
      lplrib8: "",
      com_lplrib8: "",
      type_lplrib8: "",
      cpr_lplrib8: "",
      lalrib8: "",
      com_lalrib8: "",
      type_lalrib8: "",
      cpr_lalrib8: "",
      larib8: "",
      com_larib8: "",
      type_larib8: "",
      cpr_larib8: "",
      lprib9: "",
      com_lprib9: "",
      type_lprib9: "",
      cpr_lprib9: "",
      lplrib9: "",
      com_lplrib9: "",
      type_lplrib9: "",
      cpr_lplrib9: "",
      lalrib9: "",
      com_lalrib9: "",
      type_lalrib9: "",
      cpr_lalrib9: "",
      larib9: "",
      com_larib9: "",
      type_larib9: "",
      cpr_larib9: "",
      lprib10: "",
      com_lprib10: "",
      type_lprib10: "",
      cpr_lprib10: "",
      lplrib10: "",
      com_lplrib10: "",
      type_lplrib10: "",
      cpr_lplrib10: "",
      lalrib10: "",
      com_lalrib10: "",
      type_lalrib10: "",
      cpr_lalrib10: "",
      larib10: "",
      com_larib10: "",
      type_larib10: "",
      cpr_larib10: "",
      lprib11: "",
      com_lprib11: "",
      type_lprib11: "",
      cpr_lprib11: "",
      lplrib11: "",
      com_lplrib11: "",
      type_lplrib11: "",
      cpr_lplrib11: "",
      lalrib11: "",
      com_lalrib11: "",
      type_lalrib11: "",
      cpr_lalrib11: "",
      lprib12: "",
      com_lprib12: "",
      type_lprib12: "",
      cpr_lprib12: "",
      lplrib12: "",
      com_lplrib12: "",
      type_lplrib12: "",
      cpr_lplrib12: "",
      lalrib12: "",
      com_lalrib12: "",
      type_lalrib12: "",
      cpr_lalrib12: "",
      rprib1: "",
      com_rprib1: "",
      type_rprib1: "",
      cpr_rprib1: "",
      rplrib1: "",
      com_rplrib1: "",
      type_rplrib1: "",
      cpr_rplrib1: "",
      ralrib1: "",
      com_ralrib1: "",
      type_ralrib1: "",
      cpr_ralrib1: "",
      rprib2: "",
      com_rprib2: "",
      type_rprib2: "",
      cpr_rprib2: "",
      rplrib2: "",
      com_rplrib2: "",
      type_rplrib2: "",
      cpr_rplrib2: "",
      ralrib2: "",
      com_ralrib2: "",
      type_ralrib2: "",
      cpr_ralrib2: "",
      rarib2: "",
      com_rarib2: "",
      type_rarib2: "",
      cpr_rarib2: "",
      rprib3: "",
      com_rprib3: "",
      type_rprib3: "",
      cpr_rprib3: "",
      rplrib3: "",
      com_rplrib3: "",
      type_rplrib3: "",
      cpr_rplrib3: "",
      ralrib3: "",
      com_ralrib3: "",
      type_ralrib3: "",
      cpr_ralrib3: "",
      rarib3: "",
      com_rarib3: "",
      type_rarib3: "",
      cpr_rarib3: "",
      rprib4: "",
      com_rprib4: "",
      type_rprib4: "",
      cpr_rprib4: "",
      rplrib4: "",
      com_rplrib4: "",
      type_rplrib4: "",
      cpr_rplrib4: "",
      ralrib4: "",
      com_ralrib4: "",
      type_ralrib4: "",
      cpr_ralrib4: "",
      rarib4: "",
      com_rarib4: "",
      type_rarib4: "",
      cpr_rarib4: "",
      rprib5: "",
      com_rprib5: "",
      type_rprib5: "",
      cpr_rprib5: "",
      rplrib5: "",
      com_rplrib5: "",
      type_rplrib5: "",
      cpr_rplrib5: "",
      ralrib5: "",
      com_ralrib5: "",
      type_ralrib5: "",
      cpr_ralrib5: "",
      rarib5: "",
      com_rarib5: "",
      type_rarib5: "",
      cpr_rarib5: "",
      rprib6: "",
      com_rprib6: "",
      type_rprib6: "",
      cpr_rprib6: "",
      rplrib6: "",
      com_rplrib6: "",
      type_rplrib6: "",
      cpr_rplrib6: "",
      ralrib6: "",
      com_ralrib6: "",
      type_ralrib6: "",
      cpr_ralrib6: "",
      rarib6: "",
      com_rarib6: "",
      type_rarib6: "",
      cpr_rarib6: "",
      rprib7: "",
      com_rprib7: "",
      type_rprib7: "",
      cpr_rprib7: "",
      rplrib7: "",
      com_rplrib7: "",
      type_rplrib7: "",
      cpr_rplrib7: "",
      ralrib7: "",
      com_ralrib7: "",
      type_ralrib7: "",
      cpr_ralrib7: "",
      rarib7: "",
      com_rarib7: "",
      type_rarib7: "",
      cpr_rarib7: "",
      rprib8: "",
      com_rprib8: "",
      type_rprib8: "",
      cpr_rprib8: "",
      rplrib8: "",
      com_rplrib8: "",
      type_rplrib8: "",
      cpr_rplrib8: "",
      ralrib8: "",
      com_ralrib8: "",
      type_ralrib8: "",
      cpr_ralrib8: "",
      rarib8: "",
      com_rarib8: "",
      type_rarib8: "",
      cpr_rarib8: "",
      rprib9: "",
      com_rprib9: "",
      type_rprib9: "",
      cpr_rprib9: "",
      rplrib9: "",
      com_rplrib9: "",
      type_rplrib9: "",
      cpr_rplrib9: "",
      ralrib9: "",
      com_ralrib9: "",
      type_ralrib9: "",
      cpr_ralrib9: "",
      rarib9: "",
      com_rarib9: "",
      type_rarib9: "",
      cpr_rarib9: "",
      rprib10: "",
      com_rprib10: "",
      type_rprib10: "",
      cpr_rprib10: "",
      rplrib10: "",
      com_rplrib10: "",
      type_rplrib10: "",
      cpr_rplrib10: "",
      ralrib10: "",
      com_ralrib10: "",
      type_ralrib10: "",
      cpr_ralrib10: "",
      rarib10: "",
      com_rarib10: "",
      type_rarib10: "",
      cpr_rarib10: "",
      rprib11: "",
      com_rprib11: "",
      type_rprib11: "",
      cpr_rprib11: "",
      rplrib11: "",
      com_rplrib11: "",
      type_rplrib11: "",
      cpr_rplrib11: "",
      ralrib11: "",
      com_ralrib11: "",
      type_ralrib11: "",
      cpr_ralrib11: "",
      rprib12: "",
      com_rprib12: "",
      type_rprib12: "",
      cpr_rprib12: "",
      rplrib12: "",
      com_rplrib12: "",
      type_rplrib12: "",
      cpr_rplrib12: "",
      ralrib12: "",
      com_ralrib12: "",
      type_ralrib12: "",
      cpr_ralrib12: "",
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
