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
        sternum,
        cpr_sternum,
        lprib1,
        com_lprib1,
        type_lprib1,
        cpr_lprib1,
        lplrib1,
        com_lplrib1,
        type_lplrib1,
        cpr_lplrib1,
        lalrib1,
        com_lalrib1,
        type_lalrib1,
        cpr_lalrib1,
        lprib2,
        com_lprib2,
        type_lprib2,
        cpr_lprib2,
        lplrib2,
        com_lplrib2,
        type_lplrib2,
        cpr_lplrib2,
        lalrib2,
        com_lalrib2,
        type_lalrib2,
        cpr_lalrib2,
        larib2,
        com_larib2,
        type_larib2,
        cpr_larib2,
        lprib3,
        com_lprib3,
        type_lprib3,
        cpr_lprib3,
        lplrib3,
        com_lplrib3,
        type_lplrib3,
        cpr_lplrib3,
        lalrib3,
        com_lalrib3,
        type_lalrib3,
        cpr_lalrib3,
        larib3,
        com_larib3,
        type_larib3,
        cpr_larib3,
        lprib4,
        com_lprib4,
        type_lprib4,
        cpr_lprib4,
        lplrib4,
        com_lplrib4,
        type_lplrib4,
        cpr_lplrib4,
        lalrib4,
        com_lalrib4,
        type_lalrib4,
        cpr_lalrib4,
        larib4,
        com_larib4,
        type_larib4,
        cpr_larib4,
        lprib5,
        com_lprib5,
        type_lprib5,
        cpr_lprib5,
        lplrib5,
        com_lplrib5,
        type_lplrib5,
        cpr_lplrib5,
        lalrib5,
        com_lalrib5,
        type_lalrib5,
        cpr_lalrib5,
        larib5,
        com_larib5,
        type_larib5,
        cpr_larib5,
        lprib6,
        com_lprib6,
        type_lprib6,
        cpr_lprib6,
        lplrib6,
        com_lplrib6,
        type_lplrib6,
        cpr_lplrib6,
        lalrib6,
        com_lalrib6,
        type_lalrib6,
        cpr_lalrib6,
        larib6,
        com_larib6,
        type_larib6,
        cpr_larib6,
        lprib7,
        com_lprib7,
        type_lprib7,
        cpr_lprib7,
        lplrib7,
        com_lplrib7,
        type_lplrib7,
        cpr_lplrib7,
        lalrib7,
        com_lalrib7,
        type_lalrib7,
        cpr_lalrib7,
        larib7,
        com_larib7,
        type_larib7,
        cpr_larib7,
        lprib8,
        com_lprib8,
        type_lprib8,
        cpr_lprib8,
        lplrib8,
        com_lplrib8,
        type_lplrib8,
        cpr_lplrib8,
        lalrib8,
        com_lalrib8,
        type_lalrib8,
        cpr_lalrib8,
        larib8,
        com_larib8,
        type_larib8,
        cpr_larib8,
        lprib9,
        com_lprib9,
        type_lprib9,
        cpr_lprib9,
        lplrib9,
        com_lplrib9,
        type_lplrib9,
        cpr_lplrib9,
        lalrib9,
        com_lalrib9,
        type_lalrib9,
        cpr_lalrib9,
        larib9,
        com_larib9,
        type_larib9,
        cpr_larib9,
        lprib10,
        com_lprib10,
        type_lprib10,
        cpr_lprib10,
        lplrib10,
        com_lplrib10,
        type_lplrib10,
        cpr_lplrib10,
        lalrib10,
        com_lalrib10,
        type_lalrib10,
        cpr_lalrib10,
        larib10,
        com_larib10,
        type_larib10,
        cpr_larib10,
        lprib11,
        com_lprib11,
        type_lprib11,
        cpr_lprib11,
        lplrib11,
        com_lplrib11,
        type_lplrib11,
        cpr_lplrib11,
        lalrib11,
        com_lalrib11,
        type_lalrib11,
        cpr_lalrib11,
        lprib12,
        com_lprib12,
        type_lprib12,
        cpr_lprib12,
        lplrib12,
        com_lplrib12,
        type_lplrib12,
        cpr_lplrib12,
        lalrib12,
        com_lalrib12,
        type_lalrib12,
        cpr_lalrib12,
        rprib1,
        com_rprib1,
        type_rprib1,
        cpr_rprib1,
        rplrib1,
        com_rplrib1,
        type_rplrib1,
        cpr_rplrib1,
        ralrib1,
        com_ralrib1,
        type_ralrib1,
        cpr_ralrib1,
        rprib2,
        com_rprib2,
        type_rprib2,
        cpr_rprib2,
        rplrib2,
        com_rplrib2,
        type_rplrib2,
        cpr_rplrib2,
        ralrib2,
        com_ralrib2,
        type_ralrib2,
        cpr_ralrib2,
        rarib2,
        com_rarib2,
        type_rarib2,
        cpr_rarib2,
        rprib3,
        com_rprib3,
        type_rprib3,
        cpr_rprib3,
        rplrib3,
        com_rplrib3,
        type_rplrib3,
        cpr_rplrib3,
        ralrib3,
        com_ralrib3,
        type_ralrib3,
        cpr_ralrib3,
        rarib3,
        com_rarib3,
        type_rarib3,
        cpr_rarib3,
        rprib4,
        com_rprib4,
        type_rprib4,
        cpr_rprib4,
        rplrib4,
        com_rplrib4,
        type_rplrib4,
        cpr_rplrib4,
        ralrib4,
        com_ralrib4,
        type_ralrib4,
        cpr_ralrib4,
        rarib4,
        com_rarib4,
        type_rarib4,
        cpr_rarib4,
        rprib5,
        com_rprib5,
        type_rprib5,
        cpr_rprib5,
        rplrib5,
        com_rplrib5,
        type_rplrib5,
        cpr_rplrib5,
        ralrib5,
        com_ralrib5,
        type_ralrib5,
        cpr_ralrib5,
        rarib5,
        com_rarib5,
        type_rarib5,
        cpr_rarib5,
        rprib6,
        com_rprib6,
        type_rprib6,
        cpr_rprib6,
        rplrib6,
        com_rplrib6,
        type_rplrib6,
        cpr_rplrib6,
        ralrib6,
        com_ralrib6,
        type_ralrib6,
        cpr_ralrib6,
        rarib6,
        com_rarib6,
        type_rarib6,
        cpr_rarib6,
        rprib7,
        com_rprib7,
        type_rprib7,
        cpr_rprib7,
        rplrib7,
        com_rplrib7,
        type_rplrib7,
        cpr_rplrib7,
        ralrib7,
        com_ralrib7,
        type_ralrib7,
        cpr_ralrib7,
        rarib7,
        com_rarib7,
        type_rarib7,
        cpr_rarib7,
        rprib8,
        com_rprib8,
        type_rprib8,
        cpr_rprib8,
        rplrib8,
        com_rplrib8,
        type_rplrib8,
        cpr_rplrib8,
        ralrib8,
        com_ralrib8,
        type_ralrib8,
        cpr_ralrib8,
        rarib8,
        com_rarib8,
        type_rarib8,
        cpr_rarib8,
        rprib9,
        com_rprib9,
        type_rprib9,
        cpr_rprib9,
        rplrib9,
        com_rplrib9,
        type_rplrib9,
        cpr_rplrib9,
        ralrib9,
        com_ralrib9,
        type_ralrib9,
        cpr_ralrib9,
        rarib9,
        com_rarib9,
        type_rarib9,
        cpr_rarib9,
        rprib10,
        com_rprib10,
        type_rprib10,
        cpr_rprib10,
        rplrib10,
        com_rplrib10,
        type_rplrib10,
        cpr_rplrib10,
        ralrib10,
        com_ralrib10,
        type_ralrib10,
        cpr_ralrib10,
        rarib10,
        com_rarib10,
        type_rarib10,
        cpr_rarib10,
        rprib11,
        com_rprib11,
        type_rprib11,
        cpr_rprib11,
        rplrib11,
        com_rplrib11,
        type_rplrib11,
        cpr_rplrib11,
        ralrib11,
        com_ralrib11,
        type_ralrib11,
        cpr_ralrib11,
        rprib12,
        com_rprib12,
        type_rprib12,
        cpr_rprib12,
        rplrib12,
        com_rplrib12,
        type_rplrib12,
        cpr_rplrib12,
        ralrib12,
        com_ralrib12,
        type_ralrib12,
        cpr_ralrib12,
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
        sternum,
        cpr_sternum,
        lprib1,
        com_lprib1,
        type_lprib1,
        cpr_lprib1,
        lplrib1,
        com_lplrib1,
        type_lplrib1,
        cpr_lplrib1,
        lalrib1,
        com_lalrib1,
        type_lalrib1,
        cpr_lalrib1,
        lprib2,
        com_lprib2,
        type_lprib2,
        cpr_lprib2,
        lplrib2,
        com_lplrib2,
        type_lplrib2,
        cpr_lplrib2,
        lalrib2,
        com_lalrib2,
        type_lalrib2,
        cpr_lalrib2,
        larib2,
        com_larib2,
        type_larib2,
        cpr_larib2,
        lprib3,
        com_lprib3,
        type_lprib3,
        cpr_lprib3,
        lplrib3,
        com_lplrib3,
        type_lplrib3,
        cpr_lplrib3,
        lalrib3,
        com_lalrib3,
        type_lalrib3,
        cpr_lalrib3,
        larib3,
        com_larib3,
        type_larib3,
        cpr_larib3,
        lprib4,
        com_lprib4,
        type_lprib4,
        cpr_lprib4,
        lplrib4,
        com_lplrib4,
        type_lplrib4,
        cpr_lplrib4,
        lalrib4,
        com_lalrib4,
        type_lalrib4,
        cpr_lalrib4,
        larib4,
        com_larib4,
        type_larib4,
        cpr_larib4,
        lprib5,
        com_lprib5,
        type_lprib5,
        cpr_lprib5,
        lplrib5,
        com_lplrib5,
        type_lplrib5,
        cpr_lplrib5,
        lalrib5,
        com_lalrib5,
        type_lalrib5,
        cpr_lalrib5,
        larib5,
        com_larib5,
        type_larib5,
        cpr_larib5,
        lprib6,
        com_lprib6,
        type_lprib6,
        cpr_lprib6,
        lplrib6,
        com_lplrib6,
        type_lplrib6,
        cpr_lplrib6,
        lalrib6,
        com_lalrib6,
        type_lalrib6,
        cpr_lalrib6,
        larib6,
        com_larib6,
        type_larib6,
        cpr_larib6,
        lprib7,
        com_lprib7,
        type_lprib7,
        cpr_lprib7,
        lplrib7,
        com_lplrib7,
        type_lplrib7,
        cpr_lplrib7,
        lalrib7,
        com_lalrib7,
        type_lalrib7,
        cpr_lalrib7,
        larib7,
        com_larib7,
        type_larib7,
        cpr_larib7,
        lprib8,
        com_lprib8,
        type_lprib8,
        cpr_lprib8,
        lplrib8,
        com_lplrib8,
        type_lplrib8,
        cpr_lplrib8,
        lalrib8,
        com_lalrib8,
        type_lalrib8,
        cpr_lalrib8,
        larib8,
        com_larib8,
        type_larib8,
        cpr_larib8,
        lprib9,
        com_lprib9,
        type_lprib9,
        cpr_lprib9,
        lplrib9,
        com_lplrib9,
        type_lplrib9,
        cpr_lplrib9,
        lalrib9,
        com_lalrib9,
        type_lalrib9,
        cpr_lalrib9,
        larib9,
        com_larib9,
        type_larib9,
        cpr_larib9,
        lprib10,
        com_lprib10,
        type_lprib10,
        cpr_lprib10,
        lplrib10,
        com_lplrib10,
        type_lplrib10,
        cpr_lplrib10,
        lalrib10,
        com_lalrib10,
        type_lalrib10,
        cpr_lalrib10,
        larib10,
        com_larib10,
        type_larib10,
        cpr_larib10,
        lprib11,
        com_lprib11,
        type_lprib11,
        cpr_lprib11,
        lplrib11,
        com_lplrib11,
        type_lplrib11,
        cpr_lplrib11,
        lalrib11,
        com_lalrib11,
        type_lalrib11,
        cpr_lalrib11,
        lprib12,
        com_lprib12,
        type_lprib12,
        cpr_lprib12,
        lplrib12,
        com_lplrib12,
        type_lplrib12,
        cpr_lplrib12,
        lalrib12,
        com_lalrib12,
        type_lalrib12,
        cpr_lalrib12,
        rprib1,
        com_rprib1,
        type_rprib1,
        cpr_rprib1,
        rplrib1,
        com_rplrib1,
        type_rplrib1,
        cpr_rplrib1,
        ralrib1,
        com_ralrib1,
        type_ralrib1,
        cpr_ralrib1,
        rprib2,
        com_rprib2,
        type_rprib2,
        cpr_rprib2,
        rplrib2,
        com_rplrib2,
        type_rplrib2,
        cpr_rplrib2,
        ralrib2,
        com_ralrib2,
        type_ralrib2,
        cpr_ralrib2,
        rarib2,
        com_rarib2,
        type_rarib2,
        cpr_rarib2,
        rprib3,
        com_rprib3,
        type_rprib3,
        cpr_rprib3,
        rplrib3,
        com_rplrib3,
        type_rplrib3,
        cpr_rplrib3,
        ralrib3,
        com_ralrib3,
        type_ralrib3,
        cpr_ralrib3,
        rarib3,
        com_rarib3,
        type_rarib3,
        cpr_rarib3,
        rprib4,
        com_rprib4,
        type_rprib4,
        cpr_rprib4,
        rplrib4,
        com_rplrib4,
        type_rplrib4,
        cpr_rplrib4,
        ralrib4,
        com_ralrib4,
        type_ralrib4,
        cpr_ralrib4,
        rarib4,
        com_rarib4,
        type_rarib4,
        cpr_rarib4,
        rprib5,
        com_rprib5,
        type_rprib5,
        cpr_rprib5,
        rplrib5,
        com_rplrib5,
        type_rplrib5,
        cpr_rplrib5,
        ralrib5,
        com_ralrib5,
        type_ralrib5,
        cpr_ralrib5,
        rarib5,
        com_rarib5,
        type_rarib5,
        cpr_rarib5,
        rprib6,
        com_rprib6,
        type_rprib6,
        cpr_rprib6,
        rplrib6,
        com_rplrib6,
        type_rplrib6,
        cpr_rplrib6,
        ralrib6,
        com_ralrib6,
        type_ralrib6,
        cpr_ralrib6,
        rarib6,
        com_rarib6,
        type_rarib6,
        cpr_rarib6,
        rprib7,
        com_rprib7,
        type_rprib7,
        cpr_rprib7,
        rplrib7,
        com_rplrib7,
        type_rplrib7,
        cpr_rplrib7,
        ralrib7,
        com_ralrib7,
        type_ralrib7,
        cpr_ralrib7,
        rarib7,
        com_rarib7,
        type_rarib7,
        cpr_rarib7,
        rprib8,
        com_rprib8,
        type_rprib8,
        cpr_rprib8,
        rplrib8,
        com_rplrib8,
        type_rplrib8,
        cpr_rplrib8,
        ralrib8,
        com_ralrib8,
        type_ralrib8,
        cpr_ralrib8,
        rarib8,
        com_rarib8,
        type_rarib8,
        cpr_rarib8,
        rprib9,
        com_rprib9,
        type_rprib9,
        cpr_rprib9,
        rplrib9,
        com_rplrib9,
        type_rplrib9,
        cpr_rplrib9,
        ralrib9,
        com_ralrib9,
        type_ralrib9,
        cpr_ralrib9,
        rarib9,
        com_rarib9,
        type_rarib9,
        cpr_rarib9,
        rprib10,
        com_rprib10,
        type_rprib10,
        cpr_rprib10,
        rplrib10,
        com_rplrib10,
        type_rplrib10,
        cpr_rplrib10,
        ralrib10,
        com_ralrib10,
        type_ralrib10,
        cpr_ralrib10,
        rarib10,
        com_rarib10,
        type_rarib10,
        cpr_rarib10,
        rprib11,
        com_rprib11,
        type_rprib11,
        cpr_rprib11,
        rplrib11,
        com_rplrib11,
        type_rplrib11,
        cpr_rplrib11,
        ralrib11,
        com_ralrib11,
        type_ralrib11,
        cpr_ralrib11,
        rprib12,
        com_rprib12,
        type_rprib12,
        cpr_rprib12,
        rplrib12,
        com_rplrib12,
        type_rplrib12,
        cpr_rplrib12,
        ralrib12,
        com_ralrib12,
        type_ralrib12,
        cpr_ralrib12,
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
