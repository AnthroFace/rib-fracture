import React, { Fragment } from "react";
import {
  Button,
  Form,
  Col,
  Row,
  FormGroup,
  Input,
  Label,
  Container,
} from "reactstrap";
import RibImage from "./RibImage";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./../text.css";
import axios from "axios";

import { API_URL } from "../constants";

class EditPatientForm extends React.Component {
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
    lprib1: null,
    com_lprib1: null,
    type_lprib1: "",
    cpr_lprib1: "",
    lplrib1: null,
    com_lplrib1: null,
    type_lplrib1: "",
    cpr_lplrib1: "",
    lalrib1: null,
    com_lalrib1: null,
    type_lalrib1: "",
    cpr_lalrib1: "",
    lprib2: null,
    com_lprib2: null,
    type_lprib2: "",
    cpr_lprib2: "",
    lplrib2: null,
    com_lplrib2: null,
    type_lplrib2: "",
    cpr_lplrib2: "",
    lalrib2: null,
    com_lalrib2: null,
    type_lalrib2: "",
    cpr_lalrib2: "",
    larib2: null,
    com_larib2: null,
    type_larib2: "",
    cpr_larib2: "",
    lprib3: null,
    com_lprib3: null,
    type_lprib3: "",
    cpr_lprib3: "",
    lplrib3: null,
    com_lplrib3: null,
    type_lplrib3: "",
    cpr_lplrib3: "",
    lalrib3: null,
    com_lalrib3: null,
    type_lalrib3: "",
    cpr_lalrib3: "",
    larib3: null,
    com_larib3: null,
    type_larib3: "",
    cpr_larib3: "",
    lprib4: null,
    com_lprib4: null,
    type_lprib4: "",
    cpr_lprib4: "",
    lplrib4: null,
    com_lplrib4: null,
    type_lplrib4: "",
    cpr_lplrib4: "",
    lalrib4: null,
    com_lalrib4: null,
    type_lalrib4: "",
    cpr_lalrib4: "",
    larib4: null,
    com_larib4: null,
    type_larib4: "",
    cpr_larib4: "",
    lprib5: null,
    com_lprib5: null,
    type_lprib5: "",
    cpr_lprib5: "",
    lplrib5: null,
    com_lplrib5: null,
    type_lplrib5: "",
    cpr_lplrib5: "",
    lalrib5: null,
    com_lalrib5: null,
    type_lalrib5: "",
    cpr_lalrib5: "",
    larib5: null,
    com_larib5: null,
    type_larib5: "",
    cpr_larib5: "",
    lprib6: null,
    com_lprib6: null,
    type_lprib6: "",
    cpr_lprib6: "",
    lplrib6: null,
    com_lplrib6: null,
    type_lplrib6: "",
    cpr_lplrib6: "",
    lalrib6: null,
    com_lalrib6: null,
    type_lalrib6: "",
    cpr_lalrib6: "",
    larib6: null,
    com_larib6: null,
    type_larib6: "",
    cpr_larib6: "",
    lprib7: null,
    com_lprib7: null,
    type_lprib7: "",
    cpr_lprib7: "",
    lplrib7: null,
    com_lplrib7: null,
    type_lplrib7: "",
    cpr_lplrib7: "",
    lalrib7: null,
    cpr_lalrib7: "",
    com_lalrib7: null,
    type_lalrib7: "",
    larib7: null,
    com_larib7: null,
    type_larib7: "",
    cpr_larib7: "",
    lprib8: null,
    com_lprib8: null,
    type_lprib8: "",
    cpr_lprib8: "",
    lplrib8: null,
    com_lplrib8: null,
    type_lplrib8: "",
    cpr_lplrib8: "",
    lalrib8: null,
    com_lalrib8: null,
    type_lalrib8: "",
    cpr_lalrib8: "",
    larib8: null,
    com_larib8: null,
    type_larib8: "",
    cpr_larib8: "",
    lprib9: null,
    com_lprib9: null,
    type_lprib9: "",
    cpr_lprib9: "",
    lplrib9: null,
    com_lplrib9: null,
    type_lplrib9: "",
    cpr_lplrib9: "",
    lalrib9: null,
    com_lalrib9: null,
    type_lalrib9: "",
    cpr_lalrib9: "",
    larib9: null,
    com_larib9: null,
    type_larib9: "",
    cpr_larib9: "",
    lprib10: null,
    com_lprib10: null,
    type_lprib10: "",
    cpr_lprib10: "",
    lplrib10: null,
    com_lplrib10: null,
    type_lplrib10: "",
    cpr_lplrib10: "",
    lalrib10: null,
    com_lalrib10: null,
    type_lalrib10: "",
    cpr_lalrib10: "",
    larib10: null,
    com_larib10: null,
    type_larib10: "",
    cpr_larib10: "",
    lprib11: null,
    com_lprib11: null,
    type_lprib11: "",
    cpr_lprib11: "",
    lplrib11: null,
    com_lplrib11: null,
    type_lplrib11: "",
    cpr_lplrib11: "",
    lalrib11: null,
    com_lalrib11: null,
    type_lalrib11: "",
    cpr_lalrib11: "",
    lprib12: null,
    com_lprib12: null,
    type_lprib12: "",
    cpr_lprib12: "",
    lplrib12: null,
    com_lplrib12: null,
    type_lplrib12: "",
    cpr_lplrib12: "",
    lalrib12: null,
    com_lalrib12: null,
    type_lalrib12: "",
    cpr_lalrib12: "",
    rprib1: null,
    com_rprib1: null,
    type_rprib1: "",
    cpr_rprib1: "",
    rplrib1: null,
    com_rplrib1: null,
    type_rplrib1: "",
    cpr_rplrib1: "",
    ralrib1: null,
    com_ralrib1: null,
    type_ralrib1: "",
    cpr_ralrib1: "",
    rprib2: null,
    com_rprib2: null,
    type_rprib2: "",
    cpr_rprib2: "",
    rplrib2: null,
    com_rplrib2: null,
    type_rplrib2: "",
    cpr_rplrib2: "",
    ralrib2: null,
    com_ralrib2: null,
    type_ralrib2: "",
    cpr_ralrib2: "",
    rarib2: null,
    com_rarib2: null,
    type_rarib2: "",
    cpr_rarib2: "",
    rprib3: null,
    com_rprib3: null,
    type_rprib3: "",
    cpr_rprib3: "",
    rplrib3: null,
    com_rplrib3: null,
    type_rplrib3: "",
    cpr_rplrib3: "",
    ralrib3: null,
    com_ralrib3: null,
    type_ralrib3: "",
    cpr_ralrib3: "",
    rarib3: null,
    com_rarib3: null,
    type_rarib3: "",
    cpr_rarib3: "",
    rprib4: null,
    com_rprib4: null,
    type_rprib4: "",
    cpr_rprib4: "",
    rplrib4: null,
    com_rplrib4: null,
    type_rplrib4: "",
    cpr_rplrib4: "",
    ralrib4: null,
    com_ralrib4: null,
    type_ralrib4: "",
    cpr_ralrib4: "",
    rarib4: null,
    com_rarib4: null,
    type_rarib4: "",
    cpr_rarib4: "",
    rprib5: null,
    com_rprib5: null,
    type_rprib5: "",
    cpr_rprib5: "",
    rplrib5: null,
    com_rplrib5: null,
    type_rplrib5: "",
    cpr_rplrib5: "",
    ralrib5: null,
    com_ralrib5: null,
    type_ralrib5: "",
    cpr_ralrib5: "",
    rarib5: null,
    com_rarib5: null,
    type_rarib5: "",
    cpr_rarib5: "",
    rprib6: null,
    com_rprib6: null,
    type_rprib6: "",
    cpr_rprib6: "",
    rplrib6: null,
    com_rplrib6: null,
    type_rplrib6: "",
    cpr_rplrib6: "",
    ralrib6: null,
    com_ralrib6: null,
    type_ralrib6: "",
    cpr_ralrib6: "",
    rarib6: null,
    com_rarib6: null,
    type_rarib6: "",
    cpr_rarib6: "",
    rprib7: null,
    com_rprib7: null,
    type_rprib7: "",
    cpr_rprib7: "",
    rplrib7: null,
    com_rplrib7: null,
    type_rplrib7: "",
    cpr_rplrib7: "",
    ralrib7: null,
    com_ralrib7: null,
    type_ralrib7: "",
    cpr_ralrib7: "",
    rarib7: null,
    com_rarib7: null,
    type_rarib7: "",
    cpr_rarib7: "",
    rprib8: null,
    com_rprib8: null,
    type_rprib8: "",
    cpr_rprib8: "",
    rplrib8: null,
    com_rplrib8: null,
    type_rplrib8: "",
    cpr_rplrib8: "",
    ralrib8: null,
    com_ralrib8: null,
    type_ralrib8: "",
    cpr_ralrib8: "",
    rarib8: null,
    com_rarib8: null,
    type_rarib8: "",
    cpr_rarib8: "",
    rprib9: null,
    com_rprib9: null,
    type_rprib9: "",
    cpr_rprib9: "",
    rplrib9: null,
    com_rplrib9: null,
    type_rplrib9: "",
    cpr_rplrib9: "",
    ralrib9: null,
    com_ralrib9: null,
    type_ralrib9: "",
    cpr_ralrib9: "",
    rarib9: null,
    com_rarib9: null,
    type_rarib9: "",
    cpr_rarib9: "",
    rprib10: null,
    com_rprib10: null,
    type_rprib10: "",
    cpr_rprib10: "",
    rplrib10: null,
    com_rplrib10: null,
    type_rplrib10: "",
    cpr_rplrib10: "",
    ralrib10: null,
    com_ralrib10: null,
    type_ralrib10: "",
    cpr_ralrib10: "",
    rarib10: null,
    com_rarib10: null,
    type_rarib10: "",
    cpr_rarib10: "",
    rprib11: null,
    com_rprib11: null,
    type_rprib11: "",
    cpr_rprib11: "",
    rplrib11: null,
    com_rplrib11: null,
    type_rplrib11: "",
    cpr_rplrib11: "",
    ralrib11: null,
    com_ralrib11: null,
    type_ralrib11: "",
    cpr_ralrib11: "",
    rprib12: null,
    com_rprib12: null,
    type_rprib12: "",
    cpr_rprib12: "",
    rplrib12: null,
    com_rplrib12: null,
    type_rplrib12: "",
    cpr_rplrib12: "",
    ralrib12: null,
    com_ralrib12: null,
    type_ralrib12: "",
    cpr_ralrib12: "",
  };

  componentDidMount() {
    console.log("edit patient id props", this.props.patient.id);
    this.setState({
      pk: this.props.patient.id,
      case_id: this.props.patient.case_id,
      age: this.props.patient.age,
      sex: this.props.patient.sex,
      weight: this.props.patient.weight,
      height: this.props.patient.height,
      ancestry: this.props.patient.ancestry,
      mod: this.props.patient.mod,
      cod: this.props.patient.cod,
      cod_type: this.props.patient.cod_type,
      xray: this.props.patient.xray,
      cpr: this.props.patient.cpr,
      belted: this.props.patient.belted,
      obese: this.props.patient.obese,
      cardio: this.props.patient.cardio,
      patho: this.props.patient.patho,
      tobacco: this.props.patient.tobacco,
      marijuana: this.props.patient.marijuana,
      alcohol: this.props.patient.alcohol,
      prescription: this.props.patient.prescription,
      drug_use: this.props.patient.drug_use,
      health_notes: this.props.patient.health_notes,
      notes: this.props.patient.notes,
      sternum: this.props.patient.sternum,
      cpr_sternum: this.props.patient.cpr_sternum,
      lprib1: this.props.patient.lprib1,
      com_lprib1: this.props.patient.com_lprib1,
      type_lprib1: this.props.patient.type_lprib1,
      cpr_lprib1: this.props.patient.cpr_lprib1,
      lplrib1: this.props.patient.lplribl, // check this one on other form! said 11
      com_lplrib1: this.props.patient.com_lplrib1,
      type_lplrib1: this.props.patient.type_lplrib1,
      cpr_lplrib1: this.props.patient.cpr_lplrib1,
      lalrib1: this.props.patient.lalrib1,
      com_lalrib1: this.props.patient.com_lalrib1,
      type_lalrib1: this.props.patient.type_lalrib1,
      cpr_lalrib1: this.props.patient.cpr_lalrib1,
      lprib2: this.props.patient.lprib2,
      com_lprib2: this.props.patient.com_lprib2,
      type_lprib2: this.props.patient.type_lprib2,
      cpr_lprib2: this.props.patient.cpr_lprib2,
      lplrib2: this.props.patient.lplrib2,
      com_lplrib2: this.props.patient.com_lplrib2,
      type_lplrib2: this.props.patient.type_lplrib2,
      cpr_lplrib2: this.props.patient.cpr_lplrib2,
      lalrib2: this.props.patient.lalrib2,
      com_lalrib2: this.props.patient.com_lalrib2,
      type_lalrib2: this.props.patient.type_lalrib2,
      cpr_lalrib2: this.props.patient.cpr_lalrib2,
      larib2: this.props.patient.larib2,
      com_larib2: this.props.patient.com_larib2,
      type_larib2: this.props.patient.type_larib2,
      cpr_larib2: this.props.patient.cpr_larib2,
      lprib3: this.props.patient.lprib3,
      com_lprib3: this.props.patient.com_lprib3,
      type_lprib3: this.props.patient.type_lprib3,
      cpr_lprib3: this.props.patient.cpr_lprib3,
      lplrib3: this.props.patient.lplrib3,
      com_lplrib3: this.props.patient.com_lplrib3,
      type_lplrib3: this.props.patient.type_lplrib3,
      cpr_lplrib3: this.props.patient.cpr_lplrib3,
      lalrib3: this.props.patient.lalrib3,
      com_lalrib3: this.props.patient.com_lalrib3,
      type_lalrib3: this.props.patient.type_lalrib3,
      cpr_lalrib3: this.props.patient.cpr_lalrib3,
      larib3: this.props.patient.larib3,
      com_larib3: this.props.patient.com_larib3,
      type_larib3: this.props.patient.type_larib3,
      cpr_larib3: this.props.patient.cpr_larib3,
      lprib4: this.props.patient.lprib4,
      com_lprib4: this.props.patient.com_lprib4,
      type_lprib4: this.props.patient.type_lprib4,
      cpr_lprib4: this.props.patient.cpr_lprib4,
      lplrib4: this.props.patient.lplrib4,
      com_lplrib4: this.props.patient.com_lplrib4,
      type_lplrib4: this.props.patient.type_lplrib4,
      cpr_lplrib4: this.props.patient.cpr_lplrib4,
      lalrib4: this.props.patient.lalrib4,
      com_lalrib4: this.props.patient.com_lalrib4,
      type_lalrib4: this.props.patient.type_lalrib4,
      cpr_lalrib4: this.props.patient.cpr_lalrib4,
      larib4: this.props.patient.larib4,
      com_larib4: this.props.patient.com_larib4,
      type_larib4: this.props.patient.type_larib4,
      cpr_larib4: this.props.patient.cpr_larib4,
      lprib5: this.props.patient.lprib5,
      com_lprib5: this.props.patient.com_lprib5,
      type_lprib5: this.props.patient.type_lprib5,
      cpr_lprib5: this.props.patient.cpr_lprib5,
      lplrib5: this.props.patient.lplrib5,
      com_lplrib5: this.props.patient.com_lplrib5,
      type_lplrib5: this.props.patient.type_lplrib5,
      cpr_lplrib5: this.props.patient.cpr_lplrib5,
      lalrib5: this.props.patient.lalrib5,
      com_lalrib5: this.props.patient.com_lalrib5,
      type_lalrib5: this.props.patient.type_lalrib5,
      cpr_lalrib5: this.props.patient.cpr_lalrib5,
      larib5: this.props.patient.larib5,
      com_larib5: this.props.patient.com_larib5,
      type_larib5: this.props.patient.type_larib5,
      cpr_larib5: this.props.patient.cpr_larib5,
      lprib6: this.props.patient.lprib6,
      com_lprib6: this.props.patient.com_lprib6,
      type_lprib6: this.props.patient.type_lprib6,
      cpr_lprib6: this.props.patient.cpr_lprib6,
      lplrib6: this.props.patient.lplrib6,
      com_lplrib6: this.props.patient.com_lplrib6,
      type_lplrib6: this.props.patient.type_lplrib6,
      cpr_lplrib6: this.props.patient.cpr_lplrib6,
      lalrib6: this.props.patient.lalrib6,
      com_lalrib6: this.props.patient.com_lalrib6,
      type_lalrib6: this.props.patient.type_lalrib6,
      cpr_lalrib6: this.props.patient.cpr_lalrib6,
      larib6: this.props.patient.larib6,
      com_larib6: this.props.patient.com_larib6,
      type_larib6: this.props.patient.type_larib6,
      cpr_larib6: this.props.patient.cpr_larib6,
      lprib7: this.props.patient.lprib7,
      com_lprib7: this.props.patient.com_lprib7,
      type_lprib7: this.props.patient.type_lprib7,
      cpr_lprib7: this.props.patient.cpr_lprib7,
      lplrib7: this.props.patient.lplrib7,
      com_lplrib7: this.props.patient.com_lplrib7,
      type_lplrib7: this.props.patient.type_lplrib7,
      cpr_lplrib7: this.props.patient.cpr_lplrib7,
      lalrib7: this.props.patient.lalrib7,
      cpr_lalrib7: this.props.patient.cpr_lalrib7,
      com_lalrib7: this.props.patient.com_lalrib7,
      type_lalrib7: this.props.patient.type_lalrib7,
      larib7: this.props.patient.larib7,
      com_larib7: this.props.patient.com_larib7,
      type_larib7: this.props.patient.type_larib7,
      cpr_larib7: this.props.patient.cpr_larib7,
      lprib8: this.props.patient.lprib8,
      com_lprib8: this.props.patient.com_lprib8,
      type_lprib8: this.props.patient.type_lprib8,
      cpr_lprib8: this.props.patient.cpr_lprib8,
      lplrib8: this.props.patient.lplrib8,
      com_lplrib8: this.props.patient.com_lplrib8,
      type_lplrib8: this.props.patient.type_lplrib8,
      cpr_lplrib8: this.props.patient.cpr_lplrib8,
      lalrib8: this.props.patient.lalrib8,
      com_lalrib8: this.props.patient.com_lalrib8,
      type_lalrib8: this.props.patient.type_lalrib8,
      cpr_lalrib8: this.props.patient.cpr_lalrib8,
      larib8: this.props.patient.larib8,
      com_larib8: this.props.patient.com_larib8,
      type_larib8: this.props.patient.type_larib8,
      cpr_larib8: this.props.patient.cpr_larib8,
      lprib9: this.props.patient.lprib9,
      com_lprib9: this.props.patient.com_lprib9,
      type_lprib9: this.props.patient.type_lprib9,
      cpr_lprib9: this.props.patient.cpr_lprib9,
      lplrib9: this.props.patient.lplrib9,
      com_lplrib9: this.props.patient.com_lplrib9,
      type_lplrib9: this.props.patient.type_lplrib9,
      cpr_lplrib9: this.props.patient.cpr_lplrib9,
      lalrib9: this.props.patient.lalrib9,
      com_lalrib9: this.props.patient.com_lalrib9,
      type_lalrib9: this.props.patient.type_lalrib9,
      cpr_lalrib9: this.props.patient.cpr_lalrib9,
      larib9: this.props.patient.larib9,
      com_larib9: this.props.patient.com_larib9,
      type_larib9: this.props.patient.type_larib9,
      cpr_larib9: this.props.patient.cpr_larib9,
      lprib10: this.props.patient.lprib10,
      com_lprib10: this.props.patient.com_lprib10,
      type_lprib10: this.props.patient.type_lprib10,
      cpr_lprib10: this.props.patient.cpr_lprib10,
      lplrib10: this.props.patient.lplrib10,
      com_lplrib10: this.props.patient.com_lplrib10,
      type_lplrib10: this.props.patient.type_lplrib10,
      cpr_lplrib10: this.props.patient.cpr_lplrib10,
      lalrib10: this.props.patient.lalrib10,
      com_lalrib10: this.props.patient.com_lalrib10,
      type_lalrib10: this.props.patient.type_lalrib10,
      cpr_lalrib10: this.props.patient.cpr_lalrib10,
      larib10: this.props.patient.larib10,
      com_larib10: this.props.patient.com_larib10,
      type_larib10: this.props.patient.type_larib10,
      cpr_larib10: this.props.patient.cpr_larib10,
      lprib11: this.props.patient.lprib11,
      com_lprib11: this.props.patient.com_lprib11,
      type_lprib11: this.props.patient.type_lprib11,
      cpr_lprib11: this.props.patient.cpr_lprib11,
      lplrib11: this.props.patient.lplrib11,
      com_lplrib11: this.props.patient.com_lplrib11,
      type_lplrib11: this.props.patient.type_lplrib11,
      cpr_lplrib11: this.props.patient.cpr_lplrib11,
      lalrib11: this.props.patient.lalrib11,
      com_lalrib11: this.props.patient.com_lalrib11,
      type_lalrib11: this.props.patient.type_lalrib11,
      cpr_lalrib11: this.props.patient.cpr_lalrib11,
      lprib12: this.props.patient.lprib12,
      com_lprib12: this.props.patient.com_lprib12,
      type_lprib12: this.props.patient.type_lprib12,
      cpr_lprib12: this.props.patient.cpr_lprib12,
      lplrib12: this.props.patient.lplrib12,
      com_lplrib12: this.props.patient.com_lplrib12,
      type_lplrib12: this.props.patient.type_lplrib12,
      cpr_lplrib12: this.props.patient.cpr_lplrib12,
      lalrib12: this.props.patient.lalrib12,
      com_lalrib12: this.props.patient.com_lalrib12,
      type_lalrib12: this.props.patient.type_lalrib12,
      cpr_lalrib12: this.props.patient.cpr_lalrib12,
      rprib1: this.props.patient.rprib1,
      com_rprib1: this.props.patient.com_rprib1,
      type_rprib1: this.props.patient.type_rprib1,
      cpr_rprib1: this.props.patient.cpr_rprib1,
      rplrib1: this.props.patient.rplrib1,
      com_rplrib1: this.props.patient.com_rplrib1,
      type_rplrib1: this.props.patient.type_rplrib1,
      cpr_rplrib1: this.props.patient.cpr_rplrib1,
      ralrib1: this.props.patient.ralrib1,
      com_ralrib1: this.props.patient.com_ralrib1,
      type_ralrib1: this.props.patient.type_ralrib1,
      cpr_ralrib1: this.props.patient.cpr_ralrib1,
      rprib2: this.props.patient.rprib2,
      com_rprib2: this.props.patient.com_rprib2,
      type_rprib2: this.props.patient.type_rprib2,
      cpr_rprib2: this.props.patient.cpr_rprib2,
      rplrib2: this.props.patient.rplrib2,
      com_rplrib2: this.props.patient.com_rplrib2,
      type_rplrib2: this.props.patient.type_rplrib2,
      cpr_rplrib2: this.props.patient.cpr_rplrib2,
      ralrib2: this.props.patient.ralrib2,
      com_ralrib2: this.props.patient.com_ralrib2,
      type_ralrib2: this.props.patient.type_ralrib2,
      cpr_ralrib2: this.props.patient.cpr_ralrib2,
      rarib2: this.props.patient.rarib2,
      com_rarib2: this.props.patient.com_rarib2,
      type_rarib2: this.props.patient.type_rarib2,
      cpr_rarib2: this.props.patient.cpr_rarib2,
      rprib3: this.props.patient.rprib3,
      com_rprib3: this.props.patient.com_rprib3,
      type_rprib3: this.props.patient.type_rprib3,
      cpr_rprib3: this.props.patient.cpr_rprib3,
      rplrib3: this.props.patient.rplrib3,
      com_rplrib3: this.props.patient.com_rplrib3,
      type_rplrib3: this.props.patient.type_rplrib3,
      cpr_rplrib3: this.props.patient.cpr_rplrib3,
      ralrib3: this.props.patient.ralrib3,
      com_ralrib3: this.props.patient.com_ralrib3,
      type_ralrib3: this.props.patient.type_ralrib3,
      cpr_ralrib3: this.props.patient.cpr_ralrib3,
      rarib3: this.props.patient.rarib3,
      com_rarib3: this.props.patient.com_rarib3,
      type_rarib3: this.props.patient.type_rarib3,
      cpr_rarib3: this.props.patient.cpr_rarib3,
      rprib4: this.props.patient.rprib4,
      com_rprib4: this.props.patient.com_rprib4,
      type_rprib4: this.props.patient.type_rprib4,
      cpr_rprib4: this.props.patient.cpr_rprib4,
      rplrib4: this.props.patient.rplrib4,
      com_rplrib4: this.props.patient.com_rplrib4,
      type_rplrib4: this.props.patient.type_rplrib4,
      cpr_rplrib4: this.props.patient.cpr_rplrib4,
      ralrib4: this.props.patient.ralrib4,
      com_ralrib4: this.props.patient.com_ralrib4,
      type_ralrib4: this.props.patient.type_ralrib4,
      cpr_ralrib4: this.props.patient.cpr_ralrib4,
      rarib4: this.props.patient.rarib4,
      com_rarib4: this.props.patient.com_rarib4,
      type_rarib4: this.props.patient.type_rarib4,
      cpr_rarib4: this.props.patient.cpr_rarib4,
      rprib5: this.props.patient.rprib5,
      com_rprib5: this.props.patient.com_rprib5,
      type_rprib5: this.props.patient.type_rprib5,
      cpr_rprib5: this.props.patient.cpr_rprib5,
      rplrib5: this.props.patient.rplrib5,
      com_rplrib5: this.props.patient.com_rplrib5,
      type_rplrib5: this.props.patient.type_rplrib5,
      cpr_rplrib5: this.props.patient.cpr_rplrib5,
      ralrib5: this.props.patient.ralrib5,
      com_ralrib5: this.props.patient.com_ralrib5,
      type_ralrib5: this.props.patient.type_ralrib5,
      cpr_ralrib5: this.props.patient.cpr_ralrib5,
      rarib5: this.props.patient.rarib5,
      com_rarib5: this.props.patient.com_rarib5,
      type_rarib5: this.props.patient.type_rarib5,
      cpr_rarib5: this.props.patient.cpr_rarib5,
      rprib6: this.props.patient.rprib6,
      com_rprib6: this.props.patient.com_rprib6,
      type_rprib6: this.props.patient.type_rprib6,
      cpr_rprib6: this.props.patient.cpr_rprib6,
      rplrib6: this.props.patient.rplrib6,
      com_rplrib6: this.props.patient.com_rplrib6,
      type_rplrib6: this.props.patient.type_rplrib6,
      cpr_rplrib6: this.props.patient.cpr_rplrib6,
      ralrib6: this.props.patient.ralrib6,
      com_ralrib6: this.props.patient.com_ralrib6,
      type_ralrib6: this.props.patient.type_ralrib6,
      cpr_ralrib6: this.props.patient.cpr_ralrib6,
      rarib6: this.props.patient.rarib6,
      com_rarib6: this.props.patient.com_rarib6,
      type_rarib6: this.props.patient.type_rarib6,
      cpr_rarib6: this.props.patient.cpr_rarib6,
      rprib7: this.props.patient.rprib7,
      com_rprib7: this.props.patient.com_rprib7,
      type_rprib7: this.props.patient.type_rprib7,
      cpr_rprib7: this.props.patient.cpr_rprib7,
      rplrib7: this.props.patient.rplrib7,
      com_rplrib7: this.props.patient.com_rplrib7,
      type_rplrib7: this.props.patient.type_rplrib7,
      cpr_rplrib7: this.props.patient.cpr_rplrib7,
      ralrib7: this.props.patient.ralrib7,
      com_ralrib7: this.props.patient.com_ralrib7,
      type_ralrib7: this.props.patient.type_ralrib7,
      cpr_ralrib7: this.props.patient.cpr_ralrib7,
      rarib7: this.props.patient.rarib7,
      com_rarib7: this.props.patient.com_rarib7,
      type_rarib7: this.props.patient.type_rarib7,
      cpr_rarib7: this.props.patient.cpr_rarib7,
      rprib8: this.props.patient.rprib8,
      com_rprib8: this.props.patient.com_rprib8,
      type_rprib8: this.props.patient.type_rprib8,
      cpr_rprib8: this.props.patient.cpr_rprib8,
      rplrib8: this.props.patient.rplrib8,
      com_rplrib8: this.props.patient.com_rplrib8,
      type_rplrib8: this.props.patient.type_rplrib8,
      cpr_rplrib8: this.props.patient.cpr_rplrib8,
      ralrib8: this.props.patient.ralrib8,
      com_ralrib8: this.props.patient.com_ralrib8,
      type_ralrib8: this.props.patient.type_ralrib8,
      cpr_ralrib8: this.props.patient.cpr_ralrib8,
      rarib8: this.props.patient.rarib8,
      com_rarib8: this.props.patient.com_rarib8,
      type_rarib8: this.props.patient.type_rarib8,
      cpr_rarib8: this.props.patient.cpr_rarib8,
      rprib9: this.props.patient.rprib9,
      com_rprib9: this.props.patient.com_rprib9,
      type_rprib9: this.props.patient.type_rprib9,
      cpr_rprib9: this.props.patient.cpr_rprib9,
      rplrib9: this.props.patient.rplrib9,
      com_rplrib9: this.props.patient.com_rplrib9,
      type_rplrib9: this.props.patient.type_rplrib9,
      cpr_rplrib9: this.props.patient.cpr_rplrib9,
      ralrib9: this.props.patient.ralrib9,
      com_ralrib9: this.props.patient.com_ralrib9,
      type_ralrib9: this.props.patient.type_ralrib9,
      cpr_ralrib9: this.props.patient.cpr_ralrib9,
      rarib9: this.props.patient.rarib9,
      com_rarib9: this.props.patient.com_rarib9,
      type_rarib9: this.props.patient.type_rarib9,
      cpr_rarib9: this.props.patient.cpr_rarib9,
      rprib10: this.props.patient.rprib10,
      com_rprib10: this.props.patient.com_rprib10,
      type_rprib10: this.props.patient.type_rprib10,
      cpr_rprib10: this.props.patient.cpr_rprib10,
      rplrib10: this.props.patient.rplrib10,
      com_rplrib10: this.props.patient.com_rplrib10,
      type_rplrib10: this.props.patient.type_rplrib10,
      cpr_rplrib10: this.props.patient.cpr_rplrib10,
      ralrib10: this.props.patient.ralrib10,
      com_ralrib10: this.props.patient.com_ralrib10,
      type_ralrib10: this.props.patient.type_ralrib10,
      cpr_ralrib10: this.props.patient.cpr_ralrib10,
      rarib10: this.props.patient.rarib10,
      com_rarib10: this.props.patient.com_rarib10,
      type_rarib10: this.props.patient.type_rarib10,
      cpr_rarib10: this.props.patient.cpr_rarib10,
      rprib11: this.props.patient.rprib11,
      com_rprib11: this.props.patient.com_rprib11,
      type_rprib11: this.props.patient.type_rprib11,
      cpr_rprib11: this.props.patient.cpr_rprib11,
      rplrib11: this.props.patient.rplrib11,
      com_rplrib11: this.props.patient.com_rplrib11,
      type_rplrib11: this.props.patient.type_rplrib11,
      cpr_rplrib11: this.props.patient.cpr_rplrib11,
      ralrib11: this.props.patient.ralrib11,
      com_ralrib11: this.props.patient.com_ralrib11,
      type_ralrib11: this.props.patient.type_ralrib11,
      cpr_ralrib11: this.props.patient.cpr_ralrib11,
      rprib12: this.props.patient.rprib12,
      com_rprib12: this.props.patient.com_rprib12,
      type_rprib12: this.props.patient.type_rprib12,
      cpr_rprib12: this.props.patient.cpr_rprib12,
      rplrib12: this.props.patient.rplrib12,
      com_rplrib12: this.props.patient.com_rplrib12,
      type_rplrib12: this.props.patient.type_rplrib12,
      cpr_rplrib12: this.props.patient.cpr_rplrib12,
      ralrib12: this.props.patient.ralrib12,
      com_ralrib12: this.props.patient.com_ralrib12,
      type_ralrib12: this.props.patient.type_ralrib12,
      cpr_ralrib12: this.props.patient.cpr_ralrib12,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  editPatient = (e) => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      console.log(this.state);
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.editPatient}>
        <div class="form1">
          {/* pk print
          {this.state.pk} */}
          <FormGroup>
            <Label for="case_id">Case ID:</Label>
            <Input
              type="text"
              className="w-75"
              name="case_id"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.case_id)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age:</Label>
            <Input
              type="text"
              className="w-75"
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
                checked={this.state.sex == "M"}
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
                checked={this.state.sex == "F"}
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
                checked={this.state.sex == ""}
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
              className="w-75"
              name="weight"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.weight)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="height">Height:</Label>
            <Input
              type="text"
              className="w-75"
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
              className="w-75"
              name="mod"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.mod)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cod">Cause of Death:</Label>
            <Input
              type="text"
              className="w-75"
              name="cod"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.cod)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="cod_type">COD Type:</Label>
            <Input
              type="text"
              className="w-75"
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
                checked={this.state.xray == "Y"}
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
                checked={this.state.xray == "N"}
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
                checked={this.state.cpr == "Y"}
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
                checked={this.state.cpr == "N"}
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
                checked={this.state.belted == "Y"}
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
                checked={this.state.belted == "N"}
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
                checked={this.state.obese == "Y"}
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
                checked={this.state.obese == "N"}
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
                checked={this.state.cardio == "Y"}
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
                checked={this.state.cardio == "N"}
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
                checked={this.state.patho == "Y"}
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
                checked={this.state.patho == "N"}
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
                checked={this.state.tobacco == "Y"}
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
                checked={this.state.tobacco == "N"}
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
                checked={this.state.marijuana == "Y"}
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
                checked={this.state.marijuana == "N"}
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
                checked={this.state.alcohol == "Y"}
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
                checked={this.state.alcohol == "N"}
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
                checked={this.state.prescription == "Y"}
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
                checked={this.state.prescription == "N"}
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
                checked={this.state.drug_use == "Y"}
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
                checked={this.state.drug_use == "N"}
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
              className="w-75"
              name="health_notes"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.health_notes)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="notes">Notes:</Label>
            <Input
              type="text"
              className="w-75"
              name="notes"
              onChange={this.onChange}
              value={this.state.notes || " "}
            />
          </FormGroup>
          <div style={{ marginLeft: "150px", marginBottom: "30px" }}>
            <RibImage />
          </div>
          <Container>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="sternum">Sternum:</Label>

                  <Input
                    type="text"
                    className="w-75"
                    name="sternum"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.sternum)}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="cpr_sternum">CPR Sternum:</Label>

                  <Input
                    type="text"
                    className="w-75"
                    name="cpr_sternum"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.cpr_sternum)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
          {/* START OF RIBS */}
          <Container>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 1
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib1">lprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib1"
                                    onChange={this.onChange}
                                    value={this.state.lprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib1">com_lprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib1"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib1">type_lprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib1"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib1">cpr_lprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib1"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib1">lplrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib1"
                                    onChange={this.onChange}
                                    value={this.state.lplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib1">com_lplrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib1"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib1">
                                    type_lplrib1:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib1"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib1">cpr_lplrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib1"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib1">lalrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib1"
                                    onChange={this.onChange}
                                    value={this.state.lalrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib1">com_lalrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib1"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib1">
                                    type_lalrib1:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib1"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib1">cpr_lalrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib1"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row></Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib1">rprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib1"
                                    onChange={this.onChange}
                                    value={this.state.rprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib1">com_rprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib1"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib1">type_rprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib1"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib1">cpr_rprib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib1"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib1 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib1">rplrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib1"
                                    onChange={this.onChange}
                                    value={this.state.rplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib1">com_rplrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib1"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib1">
                                    type_rplrib1:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib1"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib1">cpr_rplrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib1"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib1">ralrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib1"
                                    onChange={this.onChange}
                                    value={this.state.ralrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib1">com_ralrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib1"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib1">
                                    type_ralrib1:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib1"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib1">cpr_ralrib1:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib1"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib1 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 2
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib2">lprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib2"
                                    onChange={this.onChange}
                                    value={this.state.lprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib2">com_lprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib2"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib2">type_lprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib2"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib2">cpr_lprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib2">lplrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib2"
                                    onChange={this.onChange}
                                    value={this.state.lplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib2">com_lplrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib2"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib2">
                                    type_lplrib2:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib2"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib2">cpr_lplrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib2">lalrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib2"
                                    onChange={this.onChange}
                                    value={this.state.lalrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib2">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib2"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib2">
                                    type_lalrib2:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib2"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib2">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib2">larib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib2"
                                    onChange={this.onChange}
                                    value={this.state.larib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib2">com_larib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib2"
                                    onChange={this.onChange}
                                    value={this.state.com_larib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib2">type_larib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib2"
                                    onChange={this.onChange}
                                    value={this.state.type_larib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib2">cpr_larib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib2">rprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib2"
                                    onChange={this.onChange}
                                    value={this.state.rprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib2">com_rprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib2"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib2">type_rprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib2"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib2">cpr_rprib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib2">rplrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib2"
                                    onChange={this.onChange}
                                    value={this.state.rplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib2">com_rplrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib2"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib2">
                                    type_rplrib2:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib2"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib2">cpr_rplrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib2">ralrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib2"
                                    onChange={this.onChange}
                                    value={this.state.ralrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib2">com_ralrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib2"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib2">
                                    type_ralrib2:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib2"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib2">cpr_ralrib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib2">rarib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib2"
                                    onChange={this.onChange}
                                    value={this.state.rarib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib2">com_rarib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib2"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib2">type_rarib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib2"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib2 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib2">cpr_rarib2:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib2"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib2 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 3
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib3">lprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib3"
                                    onChange={this.onChange}
                                    value={this.state.lprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib3">com_lprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib3"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib3">type_lprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib3"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib3">cpr_lprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib3">lplrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib3"
                                    onChange={this.onChange}
                                    value={this.state.lplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib3">com_lplrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib3"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib3">
                                    type_lplrib3:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib3"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib3">cpr_lplrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib3">lalrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib3"
                                    onChange={this.onChange}
                                    value={this.state.lalrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib3">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib3"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib3">
                                    type_lalrib3:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib3"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib3">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib3">larib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib3"
                                    onChange={this.onChange}
                                    value={this.state.larib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib3">com_larib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib3"
                                    onChange={this.onChange}
                                    value={this.state.com_larib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib3">type_larib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib3"
                                    onChange={this.onChange}
                                    value={this.state.type_larib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib3">cpr_larib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib3">rprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib3"
                                    onChange={this.onChange}
                                    value={this.state.rprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib3">com_rprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib3"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib3">type_rprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib3"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib3">cpr_rprib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib3">rplrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib3"
                                    onChange={this.onChange}
                                    value={this.state.rplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib3">com_rplrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib3"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib3">
                                    type_rplrib3:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib3"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib3">cpr_rplrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib3">ralrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib3"
                                    onChange={this.onChange}
                                    value={this.state.ralrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib3">com_ralrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib3"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib3">
                                    type_ralrib3:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib3"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib3">cpr_ralrib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib3">rarib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib3"
                                    onChange={this.onChange}
                                    value={this.state.rarib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib3">com_rarib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib3"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib3">type_rarib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib3"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib3 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib3">cpr_rarib3:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib3"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib3 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 4
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib4">lprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib4"
                                    onChange={this.onChange}
                                    value={this.state.lprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib4">com_lprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib4"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib4">type_lprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib4"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib4">cpr_lprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib4">lplrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib4"
                                    onChange={this.onChange}
                                    value={this.state.lplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib4">com_lplrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib4"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib4">
                                    type_lplrib4:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib4"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib4">cpr_lplrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib4">lalrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib4"
                                    onChange={this.onChange}
                                    value={this.state.lalrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib4">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib4"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib4">
                                    type_lalrib4:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib4"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib4">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib4">larib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib4"
                                    onChange={this.onChange}
                                    value={this.state.larib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib4">com_larib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib4"
                                    onChange={this.onChange}
                                    value={this.state.com_larib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib4">type_larib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib4"
                                    onChange={this.onChange}
                                    value={this.state.type_larib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib4">cpr_larib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib4">rprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib4"
                                    onChange={this.onChange}
                                    value={this.state.rprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib4">com_rprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib4"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib4">type_rprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib4"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib4">cpr_rprib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib4">rplrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib4"
                                    onChange={this.onChange}
                                    value={this.state.rplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib4">com_rplrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib4"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib4">
                                    type_rplrib4:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib4"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib4">cpr_rplrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib4">ralrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib4"
                                    onChange={this.onChange}
                                    value={this.state.ralrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib4">com_ralrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib4"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib4">
                                    type_ralrib4:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib4"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib4">cpr_ralrib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib4">rarib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib4"
                                    onChange={this.onChange}
                                    value={this.state.rarib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib4">com_rarib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib4"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib4">type_rarib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib4"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib4 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib4">cpr_rarib4:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib4"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib4 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 5
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib5">lprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib5"
                                    onChange={this.onChange}
                                    value={this.state.lprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib5">com_lprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib5"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib5">type_lprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib5"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib5">cpr_lprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib5">lplrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib5"
                                    onChange={this.onChange}
                                    value={this.state.lplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib5">com_lplrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib5"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib5">
                                    type_lplrib5:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib5"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib5">cpr_lplrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib5">lalrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib5"
                                    onChange={this.onChange}
                                    value={this.state.lalrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib5">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib5"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib5">
                                    type_lalrib5:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib5"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib5">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib5">larib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib5"
                                    onChange={this.onChange}
                                    value={this.state.larib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib5">com_larib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib5"
                                    onChange={this.onChange}
                                    value={this.state.com_larib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib5">type_larib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib5"
                                    onChange={this.onChange}
                                    value={this.state.type_larib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib5">cpr_larib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib5">rprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib5"
                                    onChange={this.onChange}
                                    value={this.state.rprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib5">com_rprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib5"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib5">type_rprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib5"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib5">cpr_rprib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib5">rplrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib5"
                                    onChange={this.onChange}
                                    value={this.state.rplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib5">com_rplrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib5"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib5">
                                    type_rplrib5:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib5"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib5">cpr_rplrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib5">ralrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib5"
                                    onChange={this.onChange}
                                    value={this.state.ralrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib5">com_ralrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib5"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib5">
                                    type_ralrib5:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib5"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib5">cpr_ralrib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib5">rarib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib5"
                                    onChange={this.onChange}
                                    value={this.state.rarib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib5">com_rarib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib5"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib5">type_rarib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib5"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib5 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib5">cpr_rarib5:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib5"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib5 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 6
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib6">lprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib6"
                                    onChange={this.onChange}
                                    value={this.state.lprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib6">com_lprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib6"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib6">type_lprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib6"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib6">cpr_lprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib6">lplrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib6"
                                    onChange={this.onChange}
                                    value={this.state.lplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib6">com_lplrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib6"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib6">
                                    type_lplrib6:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib6"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib6">cpr_lplrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib6">lalrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib6"
                                    onChange={this.onChange}
                                    value={this.state.lalrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib6">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib6"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib6">
                                    type_lalrib6:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib6"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib6">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib6">larib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib6"
                                    onChange={this.onChange}
                                    value={this.state.larib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib6">com_larib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib6"
                                    onChange={this.onChange}
                                    value={this.state.com_larib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib6">type_larib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib6"
                                    onChange={this.onChange}
                                    value={this.state.type_larib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib6">cpr_larib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib6">rprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib6"
                                    onChange={this.onChange}
                                    value={this.state.rprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib6">com_rprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib6"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib6">type_rprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib6"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib6">cpr_rprib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib6">rplrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib6"
                                    onChange={this.onChange}
                                    value={this.state.rplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib6">com_rplrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib6"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib6">
                                    type_rplrib6:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib6"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib6">cpr_rplrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib6">ralrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib6"
                                    onChange={this.onChange}
                                    value={this.state.ralrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib6">com_ralrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib6"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib6">
                                    type_ralrib6:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib6"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib6">cpr_ralrib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib6">rarib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib6"
                                    onChange={this.onChange}
                                    value={this.state.rarib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib6">com_rarib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib6"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib6">type_rarib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib6"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib6 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib6">cpr_rarib6:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib6"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib6 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 7
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib7">lprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib7"
                                    onChange={this.onChange}
                                    value={this.state.lprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib7">com_lprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib7"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib7">type_lprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib7"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib7">cpr_lprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib7">lplrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib7"
                                    onChange={this.onChange}
                                    value={this.state.lplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib7">com_lplrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib7"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib7">
                                    type_lplrib7:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib7"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib7">cpr_lplrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib7">lalrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib7"
                                    onChange={this.onChange}
                                    value={this.state.lalrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib7">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib7"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib7">
                                    type_lalrib7:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib7"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib7">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib7">larib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib7"
                                    onChange={this.onChange}
                                    value={this.state.larib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib7">com_larib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib7"
                                    onChange={this.onChange}
                                    value={this.state.com_larib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib7">type_larib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib7"
                                    onChange={this.onChange}
                                    value={this.state.type_larib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib7">cpr_larib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib7">rprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib7"
                                    onChange={this.onChange}
                                    value={this.state.rprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib7">com_rprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib7"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib7">type_rprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib7"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib7">cpr_rprib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib7">rplrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib7"
                                    onChange={this.onChange}
                                    value={this.state.rplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib7">com_rplrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib7"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib7">
                                    type_rplrib7:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib7"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib7">cpr_rplrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib7">ralrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib7"
                                    onChange={this.onChange}
                                    value={this.state.ralrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib7">com_ralrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib7"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib7">
                                    type_ralrib7:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib7"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib7">cpr_ralrib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib7">rarib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib7"
                                    onChange={this.onChange}
                                    value={this.state.rarib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib7">com_rarib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib7"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib7">type_rarib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib7"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib7 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib7">cpr_rarib7:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib7"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib7 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 8
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib8">lprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib8"
                                    onChange={this.onChange}
                                    value={this.state.lprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib8">com_lprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib8"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib8">type_lprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib8"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib8">cpr_lprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib8">lplrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib8"
                                    onChange={this.onChange}
                                    value={this.state.lplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib8">com_lplrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib8"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib8">
                                    type_lplrib8:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib8"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib8">cpr_lplrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib8">lalrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib8"
                                    onChange={this.onChange}
                                    value={this.state.lalrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib8">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib8"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib8">
                                    type_lalrib8:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib8"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib8">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib8">larib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib8"
                                    onChange={this.onChange}
                                    value={this.state.larib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib8">com_larib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib8"
                                    onChange={this.onChange}
                                    value={this.state.com_larib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib8">type_larib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib8"
                                    onChange={this.onChange}
                                    value={this.state.type_larib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib8">cpr_larib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib8">rprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib8"
                                    onChange={this.onChange}
                                    value={this.state.rprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib8">com_rprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib8"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib8">type_rprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib8"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib8">cpr_rprib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib8">rplrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib8"
                                    onChange={this.onChange}
                                    value={this.state.rplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib8">com_rplrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib8"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib8">
                                    type_rplrib8:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib8"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib8">cpr_rplrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib8">ralrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib8"
                                    onChange={this.onChange}
                                    value={this.state.ralrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib8">com_ralrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib8"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib8">
                                    type_ralrib8:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib8"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib8">cpr_ralrib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib8">rarib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib8"
                                    onChange={this.onChange}
                                    value={this.state.rarib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib8">com_rarib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib8"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib8">type_rarib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib8"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib8 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib8">cpr_rarib8:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib8"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib8 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 9
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib9">lprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib9"
                                    onChange={this.onChange}
                                    value={this.state.lprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib9">com_lprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib9"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib9">type_lprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib9"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib9">cpr_lprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib9">lplrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib9"
                                    onChange={this.onChange}
                                    value={this.state.lplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib9">com_lplrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib9"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib9">
                                    type_lplrib9:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib9"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib9">cpr_lplrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib9">lalrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib9"
                                    onChange={this.onChange}
                                    value={this.state.lalrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib9">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib9"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib9">
                                    type_lalrib9:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib9"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib9">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib9">larib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib9"
                                    onChange={this.onChange}
                                    value={this.state.larib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib9">com_larib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib9"
                                    onChange={this.onChange}
                                    value={this.state.com_larib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib9">type_larib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib9"
                                    onChange={this.onChange}
                                    value={this.state.type_larib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib9">cpr_larib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib9">rprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib9"
                                    onChange={this.onChange}
                                    value={this.state.rprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib9">com_rprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib9"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib9">type_rprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib9"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib9">cpr_rprib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib9">rplrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib9"
                                    onChange={this.onChange}
                                    value={this.state.rplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib9">com_rplrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib9"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib9">
                                    type_rplrib9:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib9"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib9">cpr_rplrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib9">ralrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib9"
                                    onChange={this.onChange}
                                    value={this.state.ralrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib9">com_ralrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib9"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib9">
                                    type_ralrib9:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib9"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib9">cpr_ralrib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib9">rarib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib9"
                                    onChange={this.onChange}
                                    value={this.state.rarib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib9">com_rarib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib9"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib9">type_rarib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib9"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib9 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib9">cpr_rarib9:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib9"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib9 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 10
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib10">lprib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib10"
                                    onChange={this.onChange}
                                    value={this.state.lprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib10">com_lprib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib10"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib10">
                                    type_lprib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib10"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib10">cpr_lprib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib10">lplrib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib10"
                                    onChange={this.onChange}
                                    value={this.state.lplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib10">
                                    com_lplrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib10"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib10">
                                    type_lplrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib10"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib10">
                                    cpr_lplrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib10">lalrib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib10"
                                    onChange={this.onChange}
                                    value={this.state.lalrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib10">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib10"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib10">
                                    type_lalrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib10"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib10">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib10">larib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib10"
                                    onChange={this.onChange}
                                    value={this.state.larib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib10">com_larib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib10"
                                    onChange={this.onChange}
                                    value={this.state.com_larib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib10">
                                    type_larib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib10"
                                    onChange={this.onChange}
                                    value={this.state.type_larib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib10">cpr_larib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib10">rprib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib10"
                                    onChange={this.onChange}
                                    value={this.state.rprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib10">com_rprib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib10"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib10">
                                    type_rprib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib10"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib10">cpr_rprib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib10">rplrib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib10"
                                    onChange={this.onChange}
                                    value={this.state.rplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib10">
                                    com_rplrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib10"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib10">
                                    type_rplrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib10"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib10">
                                    cpr_rplrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib10">ralrib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib10"
                                    onChange={this.onChange}
                                    value={this.state.ralrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib10">
                                    com_ralrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib10"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib10">
                                    type_ralrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib10"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib10">
                                    cpr_ralrib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib10">rarib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib10"
                                    onChange={this.onChange}
                                    value={this.state.rarib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib10">com_rarib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib10"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib10">
                                    type_rarib10:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib10"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib10 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib10">cpr_rarib10:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib10"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib10 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 11
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib11">lprib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib11"
                                    onChange={this.onChange}
                                    value={this.state.lprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib11">com_lprib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib11"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib11">
                                    type_lprib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib11"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib11">cpr_lprib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib11">lplrib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib11"
                                    onChange={this.onChange}
                                    value={this.state.lplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib11">
                                    com_lplrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib11"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib11">
                                    type_lplrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib11"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib11">
                                    cpr_lplrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib11">lalrib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib11"
                                    onChange={this.onChange}
                                    value={this.state.lalrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib11">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib11"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib11">
                                    type_lalrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib11"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib11">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib11">larib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib11"
                                    onChange={this.onChange}
                                    value={this.state.larib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib11">com_larib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib11"
                                    onChange={this.onChange}
                                    value={this.state.com_larib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib11">
                                    type_larib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib11"
                                    onChange={this.onChange}
                                    value={this.state.type_larib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib11">cpr_larib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib11">rprib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib11"
                                    onChange={this.onChange}
                                    value={this.state.rprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib11">com_rprib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib11"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib11">
                                    type_rprib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib11"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib11">cpr_rprib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib11">rplrib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib11"
                                    onChange={this.onChange}
                                    value={this.state.rplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib11">
                                    com_rplrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib11"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib11">
                                    type_rplrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib11"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib11">
                                    cpr_rplrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib11">ralrib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib11"
                                    onChange={this.onChange}
                                    value={this.state.ralrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib11">
                                    com_ralrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib11"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib11">
                                    type_ralrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib11"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib11">
                                    cpr_ralrib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib11">rarib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib11"
                                    onChange={this.onChange}
                                    value={this.state.rarib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib11">com_rarib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib11"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib11">
                                    type_rarib11:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib11"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib11 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib11">cpr_rarib11:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib11"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib11 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
            <Row>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls="panel1a-content"
                  id="rib1"
                >
                  {/* <Typography>Accordion 1</Typography> */}
                  RIBS 12
                </AccordionSummary>
                <AccordionDetails>
                  <Container>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Left
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lprib12">lprib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lprib12"
                                    onChange={this.onChange}
                                    value={this.state.lprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lprib12">com_lprib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lprib12"
                                    onChange={this.onChange}
                                    value={this.state.com_lprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lprib12">
                                    type_lprib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lprib12"
                                    onChange={this.onChange}
                                    value={this.state.type_lprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lprib12">cpr_lprib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lprib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lplrib12">lplrib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lplrib12"
                                    onChange={this.onChange}
                                    value={this.state.lplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lplrib12">
                                    com_lplrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lplrib12"
                                    onChange={this.onChange}
                                    value={this.state.com_lplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lplrib12">
                                    type_lplrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lplrib12"
                                    onChange={this.onChange}
                                    value={this.state.type_lplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lplrib12">
                                    cpr_lplrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lplrib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="lalrib12">lalrib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="lalrib12"
                                    onChange={this.onChange}
                                    value={this.state.lalrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_lalrib12">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_lalrib12"
                                    onChange={this.onChange}
                                    value={this.state.com_lalrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_lalrib12">
                                    type_lalrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_lalrib12"
                                    onChange={this.onChange}
                                    value={this.state.type_lalrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_lalrib12">:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_lalrib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_lalrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="larib12">larib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="larib12"
                                    onChange={this.onChange}
                                    value={this.state.larib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_larib12">com_larib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_larib12"
                                    onChange={this.onChange}
                                    value={this.state.com_larib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_larib12">
                                    type_larib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_larib12"
                                    onChange={this.onChange}
                                    value={this.state.type_larib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_larib12">cpr_larib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_larib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_larib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                    <Row>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          // aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {/* <Typography className={classes.heading}> */}
                          {/* Accordion 1 */}
                          {/* </Typography> */}
                          Right
                        </AccordionSummary>
                        <AccordionDetails>
                          <Container>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rprib12">rprib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rprib12"
                                    onChange={this.onChange}
                                    value={this.state.rprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rprib12">com_rprib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rprib12"
                                    onChange={this.onChange}
                                    value={this.state.com_rprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rprib12">
                                    type_rprib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rprib12"
                                    onChange={this.onChange}
                                    value={this.state.type_rprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rprib12">cpr_rprib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rprib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rprib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rplrib12">rplrib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rplrib12"
                                    onChange={this.onChange}
                                    value={this.state.rplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rplrib12">
                                    com_rplrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rplrib12"
                                    onChange={this.onChange}
                                    value={this.state.com_rplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rplrib12">
                                    type_rplrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rplrib12"
                                    onChange={this.onChange}
                                    value={this.state.type_rplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rplrib12">
                                    cpr_rplrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rplrib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rplrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="ralrib12">ralrib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="ralrib12"
                                    onChange={this.onChange}
                                    value={this.state.ralrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_ralrib12">
                                    com_ralrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_ralrib12"
                                    onChange={this.onChange}
                                    value={this.state.com_ralrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_ralrib12">
                                    type_ralrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_ralrib12"
                                    onChange={this.onChange}
                                    value={this.state.type_ralrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_ralrib12">
                                    cpr_ralrib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_ralrib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_ralrib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="3">
                                <FormGroup>
                                  <Label for="rarib12">rarib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="rarib12"
                                    onChange={this.onChange}
                                    value={this.state.rarib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="com_rarib12">com_rarib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="com_rarib12"
                                    onChange={this.onChange}
                                    value={this.state.com_rarib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="type_rarib12">
                                    type_rarib12:
                                  </Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="type_rarib12"
                                    onChange={this.onChange}
                                    value={this.state.type_rarib12 || " "}
                                  />
                                </FormGroup>
                              </Col>

                              <Col xs="3">
                                <FormGroup>
                                  <Label for="cpr_rarib12">cpr_rarib12:</Label>
                                  <Input
                                    type="text"
                                    className="w-75"
                                    name="cpr_rarib12"
                                    onChange={this.onChange}
                                    value={this.state.cpr_rarib12 || " "}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Container>
                        </AccordionDetails>
                      </Accordion>
                    </Row>
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Row>
          </Container>
        </div>
        <div class="send">
          <Button>Send</Button>
        </div>
      </Form>
    );
  }
}

export default EditPatientForm;
