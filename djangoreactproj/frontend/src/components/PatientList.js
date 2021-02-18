import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PatientList extends Component {
  render() {
    const patients = this.props.patients;
    return (
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>Case Number</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Ancestry</th>
            <th>MOD</th>
            <th>COD</th>
            <th>COD Type</th>
            <th>XRAY</th>
            <th>CPR</th>
            <th>Belted</th>
            <th>Obese</th>
            <th>Cardio</th>
            <th>Pathology</th>
            <th>Tobacco</th>
            <th>Marijuana</th>
            <th>Alcohol</th>
            <th>Prescription</th>
            <th>Drug Use</th>
            <th>Health-Notes</th>
            <th>Notes</th>
            <th>Sternum</th>
            <th>CPR Sternum</th>

            <th>l.p.rib.1</th>
            <th>Completeness</th>
            <th> Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.1</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.1</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.a.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.11</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.11</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.11</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.p.rib.12</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.pl.rib.12</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>l.al.rib.12</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.1</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.1</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.1</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.2</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.3</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.4</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.5</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.6</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.7</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.8</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.9</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.a.rib.10</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.11</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.11</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.11</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.p.rib.12</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.pl.rib.12</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>

            <th>r.al.rib.12</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>
          </tr>
        </thead>
        <tbody>
          {!patients || patients.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no one here yet</b>
              </td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.pk}>
                <td>{patient.case_id}</td>
                <td style={{ backgroundColor: patient.age ? "" : "red" }}>
                  {patient.age}
                </td>
                <td style={{ backgroundColor: patient.sex ? "" : "red" }}>
                  {patient.sex}
                </td>
                <td style={{ backgroundColor: patient.weight ? "" : "red" }}>
                  {patient.weight}
                </td>
                <td style={{ backgroundColor: patient.height ? "" : "red" }}>
                  {patient.height}
                </td>
                <td style={{ backgroundColor: patient.ancestry ? "" : "red" }}>
                  {patient.ancestry}
                </td>
                <td style={{ backgroundColor: patient.mod ? "" : "red" }}>
                  {patient.mod}
                </td>
                <td style={{ backgroundColor: patient.cod ? "" : "red" }}>
                  {patient.cod}
                </td>
                <td style={{ backgroundColor: patient.cod_type ? "" : "red" }}>
                  {patient.cod_type}
                </td>
                <td style={{ backgroundColor: patient.xray ? "" : "red" }}>
                  {patient.xray}
                </td>
                <td style={{ backgroundColor: patient.cpr ? "" : "red" }}>
                  {patient.cpr}
                </td>
                <td style={{ backgroundColor: patient.belted ? "" : "red" }}>
                  {patient.belted}
                </td>
                <td style={{ backgroundColor: patient.obese ? "" : "red" }}>
                  {patient.obese}
                </td>
                <td style={{ backgroundColor: patient.cardio ? "" : "red" }}>
                  {patient.cardio}
                </td>
                <td style={{ backgroundColor: patient.patho ? "" : "red" }}>
                  {patient.patho}
                </td>
                <td style={{ backgroundColor: patient.tobacco ? "" : "red" }}>
                  {patient.tobacco}
                </td>
                <td style={{ backgroundColor: patient.marijuana ? "" : "red" }}>
                  {patient.marijuana}
                </td>
                <td style={{ backgroundColor: patient.alcohol ? "" : "red" }}>
                  {patient.alcohol}
                </td>
                <td
                  style={{ backgroundColor: patient.prescription ? "" : "red" }}
                >
                  {patient.prescription}
                </td>
                <td style={{ backgroundColor: patient.drug_use ? "" : "red" }}>
                  {patient.drug_use}
                </td>
                <td
                  style={{ backgroundColor: patient.health_notes ? "" : "red" }}
                >
                  {patient.health_notes}
                </td>
                <td style={{ backgroundColor: patient.notes ? "" : "red" }}>
                  {patient.notes}
                </td>
                <td>{patient.sternum}</td>
                <td>{patient.cpr_sternum}</td>
                <td>{patient.lprib1}</td>
                <td>{patient.com_lprib1}</td>
                <td>{patient.type_lprib1}</td>
                <td>{patient.cpr_lprib1}</td>
                <td>{patient.lplrib1}</td>
                <td>{patient.com_lplrib1}</td>
                <td>{patient.type_lplrib1}</td>
                <td>{patient.cpr_lplrib1}</td>
                <td>{patient.lalrib1}</td>
                <td>{patient.com_lalrib1}</td>
                <td>{patient.type_lalrib1}</td>
                <td>{patient.cpr_lalrib1}</td>
                <td>{patient.lprib2}</td>
                <td>{patient.com_lprib2}</td>
                <td>{patient.type_lprib2}</td>
                <td>{patient.cpr_lprib2}</td>
                <td>{patient.lplrib2}</td>
                <td>{patient.com_lplrib2}</td>
                <td>{patient.type_lplrib2}</td>
                <td>{patient.cpr_lplrib2}</td>
                <td>{patient.lalrib2}</td>
                <td>{patient.com_lalrib2}</td>
                <td>{patient.type_lalrib2}</td>
                <td>{patient.cpr_lalrib2}</td>
                <td>{patient.larib2}</td>
                <td>{patient.com_larib2}</td>
                <td>{patient.type_larib2}</td>
                <td>{patient.cpr_larib2}</td>
                <td>{patient.lprib3}</td>
                <td>{patient.com_lprib3}</td>
                <td>{patient.type_lprib3}</td>
                <td>{patient.cpr_lprib3}</td>
                <td>{patient.lplrib3}</td>
                <td>{patient.com_lplrib3}</td>
                <td>{patient.type_lplrib3}</td>
                <td>{patient.cpr_lplrib3}</td>
                <td>{patient.lalrib3}</td>
                <td>{patient.com_lalrib3}</td>
                <td>{patient.type_lalrib3}</td>
                <td>{patient.cpr_lalrib3}</td>
                <td>{patient.larib3}</td>
                <td>{patient.com_larib3}</td>
                <td>{patient.type_larib3}</td>
                <td>{patient.cpr_larib3}</td>
                <td>{patient.lprib4}</td>
                <td>{patient.com_lprib4}</td>
                <td>{patient.type_lprib4}</td>
                <td>{patient.cpr_lprib4}</td>
                <td>{patient.lplrib4}</td>
                <td>{patient.com_lplrib4}</td>
                <td>{patient.type_lplrib4}</td>
                <td>{patient.cpr_lplrib4}</td>
                <td>{patient.lalrib4}</td>
                <td>{patient.com_lalrib4}</td>
                <td>{patient.type_lalrib4}</td>
                <td>{patient.cpr_lalrib4}</td>
                <td>{patient.larib4}</td>
                <td>{patient.com_larib4}</td>
                <td>{patient.type_larib4}</td>
                <td>{patient.cpr_larib4}</td>
                <td>{patient.lprib5}</td>
                <td>{patient.com_lprib5}</td>
                <td>{patient.type_lprib5}</td>
                <td>{patient.cpr_lprib5}</td>
                <td>{patient.lplrib5}</td>
                <td>{patient.com_lplrib5}</td>
                <td>{patient.type_lplrib5}</td>
                <td>{patient.cpr_lplrib5}</td>
                <td>{patient.lalrib5}</td>
                <td>{patient.com_lalrib5}</td>
                <td>{patient.type_lalrib5}</td>
                <td>{patient.cpr_lalrib5}</td>
                <td>{patient.larib5}</td>
                <td>{patient.com_larib5}</td>
                <td>{patient.type_larib5}</td>
                <td>{patient.cpr_larib5}</td>
                <td>{patient.lprib6}</td>
                <td>{patient.com_lprib6}</td>
                <td>{patient.type_lprib6}</td>
                <td>{patient.cpr_lprib6}</td>
                <td>{patient.lplrib6}</td>
                <td>{patient.com_lplrib6}</td>
                <td>{patient.type_lplrib6}</td>
                <td>{patient.cpr_lplrib6}</td>
                <td>{patient.lalrib6}</td>
                <td>{patient.com_lalrib6}</td>
                <td>{patient.type_lalrib6}</td>
                <td>{patient.cpr_lalrib6}</td>
                <td>{patient.larib6}</td>
                <td>{patient.com_larib6}</td>
                <td>{patient.type_larib6}</td>
                <td>{patient.cpr_larib6}</td>
                <td>{patient.lprib7}</td>
                <td>{patient.com_lprib7}</td>
                <td>{patient.type_lprib7}</td>
                <td>{patient.cpr_lprib7}</td>
                <td>{patient.lplrib7}</td>
                <td>{patient.com_lplrib7}</td>
                <td>{patient.type_lplrib7}</td>
                <td>{patient.cpr_lplrib7}</td>
                <td>{patient.lalrib7}</td>
                <td>{patient.com_lalrib7}</td>
                <td>{patient.type_lalrib7}</td>
                <td>{patient.cpr_lalrib7}</td>
                <td>{patient.larib7}</td>
                <td>{patient.com_larib7}</td>
                <td>{patient.type_larib7}</td>
                <td>{patient.cpr_larib7}</td>
                <td>{patient.lprib8}</td>
                <td>{patient.com_lprib8}</td>
                <td>{patient.type_lprib8}</td>
                <td>{patient.cpr_lprib8}</td>
                <td>{patient.lplrib8}</td>
                <td>{patient.com_lplrib8}</td>
                <td>{patient.type_lplrib8}</td>
                <td>{patient.cpr_lplrib8}</td>
                <td>{patient.lalrib8}</td>
                <td>{patient.com_lalrib8}</td>
                <td>{patient.type_lalrib8}</td>
                <td>{patient.cpr_lalrib8}</td>
                <td>{patient.larib8}</td>
                <td>{patient.com_larib8}</td>
                <td>{patient.type_larib8}</td>
                <td>{patient.cpr_larib8}</td>
                <td>{patient.lprib9}</td>
                <td>{patient.com_lprib9}</td>
                <td>{patient.type_lprib9}</td>
                <td>{patient.cpr_lprib9}</td>
                <td>{patient.lplrib9}</td>
                <td>{patient.com_lplrib9}</td>
                <td>{patient.type_lplrib9}</td>
                <td>{patient.cpr_lplrib9}</td>
                <td>{patient.lalrib9}</td>
                <td>{patient.com_lalrib9}</td>
                <td>{patient.type_lalrib9}</td>
                <td>{patient.cpr_lalrib9}</td>
                <td>{patient.larib9}</td>
                <td>{patient.com_larib9}</td>
                <td>{patient.type_larib9}</td>
                <td>{patient.cpr_larib9}</td>
                <td>{patient.lprib10}</td>
                <td>{patient.com_lprib10}</td>
                <td>{patient.type_lprib10}</td>
                <td>{patient.cpr_lprib10}</td>
                <td>{patient.lplrib10}</td>
                <td>{patient.com_lplrib10}</td>
                <td>{patient.type_lplrib10}</td>
                <td>{patient.cpr_lplrib10}</td>
                <td>{patient.lalrib10}</td>
                <td>{patient.com_lalrib10}</td>
                <td>{patient.type_lalrib10}</td>
                <td>{patient.cpr_lalrib10}</td>
                <td>{patient.larib10}</td>
                <td>{patient.com_larib10}</td>
                <td>{patient.type_larib10}</td>
                <td>{patient.cpr_larib10}</td>
                <td>{patient.lprib11}</td>
                <td>{patient.com_lprib11}</td>
                <td>{patient.type_lprib11}</td>
                <td>{patient.cpr_lprib11}</td>
                <td>{patient.lplrib11}</td>
                <td>{patient.com_lplrib11}</td>
                <td>{patient.type_lplrib11}</td>
                <td>{patient.cpr_lplrib11}</td>
                <td>{patient.lalrib11}</td>
                <td>{patient.com_lalrib11}</td>
                <td>{patient.type_lalrib11}</td>
                <td>{patient.cpr_lalrib11}</td>
                <td>{patient.lprib12}</td>
                <td>{patient.com_lprib12}</td>
                <td>{patient.type_lprib12}</td>
                <td>{patient.cpr_lprib12}</td>
                <td>{patient.lplrib12}</td>
                <td>{patient.com_lplrib12}</td>
                <td>{patient.type_lplrib12}</td>
                <td>{patient.cpr_lplrib12}</td>
                <td>{patient.lalrib12}</td>
                <td>{patient.com_lalrib12}</td>
                <td>{patient.type_lalrib12}</td>
                <td>{patient.cpr_lalrib12}</td>
                <td>{patient.rprib1}</td>
                <td>{patient.com_rprib1}</td>
                <td>{patient.type_rprib1}</td>
                <td>{patient.cpr_rprib1}</td>
                <td>{patient.rplrib1}</td>
                <td>{patient.com_rplrib1}</td>
                <td>{patient.type_rplrib1}</td>
                <td>{patient.cpr_rplrib1}</td>
                <td>{patient.ralrib1}</td>
                <td>{patient.com_ralrib1}</td>
                <td>{patient.type_ralrib1}</td>
                <td>{patient.cpr_ralrib1}</td>
                <td>{patient.rprib2}</td>
                <td>{patient.com_rprib2}</td>
                <td>{patient.type_rprib2}</td>
                <td>{patient.cpr_rprib2}</td>
                <td>{patient.rplrib2}</td>
                <td>{patient.com_rplrib2}</td>
                <td>{patient.type_rplrib2}</td>
                <td>{patient.cpr_rplrib2}</td>
                <td>{patient.ralrib2}</td>
                <td>{patient.com_ralrib2}</td>
                <td>{patient.type_ralrib2}</td>
                <td>{patient.cpr_ralrib2}</td>
                <td>{patient.rarib2}</td>
                <td>{patient.com_rarib2}</td>
                <td>{patient.type_rarib2}</td>
                <td>{patient.cpr_rarib2}</td>
                <td>{patient.rprib3}</td>
                <td>{patient.com_rprib3}</td>
                <td>{patient.type_rprib3}</td>
                <td>{patient.cpr_rprib3}</td>
                <td>{patient.rplrib3}</td>
                <td>{patient.com_rplrib3}</td>
                <td>{patient.type_rplrib3}</td>
                <td>{patient.cpr_rplrib3}</td>
                <td>{patient.ralrib3}</td>
                <td>{patient.com_rplrib3}</td>
                <td>{patient.type_ralrib3}</td>
                <td>{patient.cpr_ralrib3}</td>
                <td>{patient.rarib3}</td>
                <td>{patient.com_rarib3}</td>
                <td>{patient.type_rarib3}</td>
                <td>{patient.cpr_rarib3}</td>
                <td>{patient.rprib4}</td>
                <td>{patient.com_rprib4}</td>
                <td>{patient.type_rarib3}</td>
                <td>{patient.cpr_rprib4}</td>
                <td>{patient.rplrib4}</td>
                <td>{patient.com_rplrib4}</td>
                <td>{patient.type_rplrib4}</td>
                <td>{patient.cpr_rplrib4}</td>
                <td>{patient.ralrib4}</td>
                <td>{patient.com_ralrib4}</td>
                <td>{patient.type_ralrib4}</td>
                <td>{patient.cpr_ralrib4}</td>
                <td>{patient.rarib4}</td>
                <td>{patient.com_rarib4}</td>
                <td>{patient.type_rarib4}</td>
                <td>{patient.cpr_rarib4}</td>
                <td>{patient.rprib5}</td>
                <td>{patient.com_rprib5}</td>
                <td>{patient.type_rprib5}</td>
                <td>{patient.cpr_rprib5}</td>
                <td>{patient.rplrib5}</td>
                <td>{patient.com_rplrib5}</td>
                <td>{patient.type_rplrib5}</td>
                <td>{patient.cpr_rplrib5}</td>
                <td>{patient.ralrib5}</td>
                <td>{patient.com_ralrib5}</td>
                <td>{patient.type_ralrib5}</td>
                <td>{patient.cpr_ralrib5}</td>
                <td>{patient.rarib5}</td>
                <td>{patient.com_rarib5}</td>
                <td>{patient.type_rarib5}</td>
                <td>{patient.cpr_rarib5}</td>
                <td>{patient.rprib6}</td>
                <td>{patient.com_rprib6}</td>
                <td>{patient.type_rprib6}</td>
                <td>{patient.cpr_rprib6}</td>
                <td>{patient.rplrib6}</td>
                <td>{patient.com_rplrib6}</td>
                <td>{patient.type_rplrib6}</td>
                <td>{patient.cpr_rplrib6}</td>
                <td>{patient.ralrib6}</td>
                <td>{patient.com_ralrib6}</td>
                <td>{patient.type_ralrib6}</td>
                <td>{patient.cpr_ralrib6}</td>
                <td>{patient.rarib6}</td>
                <td>{patient.com_rarib6}</td>
                <td>{patient.type_rarib6}</td>
                <td>{patient.cpr_rarib6}</td>
                <td>{patient.rprib7}</td>
                <td>{patient.com_rprib7}</td>
                <td>{patient.type_rprib7}</td>
                <td>{patient.cpr_rprib7}</td>
                <td>{patient.rplrib7}</td>
                <td>{patient.com_rplrib7}</td>
                <td>{patient.type_rplrib7}</td>
                <td>{patient.cpr_rplrib7}</td>
                <td>{patient.ralrib7}</td>
                <td>{patient.com_ralrib7}</td>
                <td>{patient.type_ralrib7}</td>
                <td>{patient.cpr_ralrib7}</td>
                <td>{patient.rarib7}</td>
                <td>{patient.com_rarib7}</td>
                <td>{patient.type_rarib7}</td>
                <td>{patient.cpr_rarib7}</td>
                <td>{patient.rprib8}</td>
                <td>{patient.com_rprib8}</td>
                <td>{patient.type_rprib8}</td>
                <td>{patient.cpr_rprib8}</td>
                <td>{patient.rplrib8}</td>
                <td>{patient.com_rplrib8}</td>
                <td>{patient.type_rplrib8}</td>
                <td>{patient.cpr_rplrib8}</td>
                <td>{patient.ralrib8}</td>
                <td>{patient.com_ralrib8}</td>
                <td>{patient.type_ralrib8}</td>
                <td>{patient.cpr_ralrib8}</td>
                <td>{patient.rarib8}</td>
                <td>{patient.com_rarib8}</td>
                <td>{patient.type_rarib8}</td>
                <td>{patient.cpr_rarib8}</td>
                <td>{patient.rprib9}</td>
                <td>{patient.com_rprib9}</td>
                <td>{patient.type_rprib9}</td>
                <td>{patient.cpr_rprib9}</td>
                <td>{patient.rplrib9}</td>
                <td>{patient.com_rplrib9}</td>
                <td>{patient.type_rplrib9}</td>
                <td>{patient.cpr_rplrib9}</td>
                <td>{patient.ralrib9}</td>
                <td>{patient.com_ralrib9}</td>
                <td>{patient.type_ralrib9}</td>
                <td>{patient.cpr_ralrib9}</td>
                <td>{patient.rarib9}</td>
                <td>{patient.com_rarib9}</td>
                <td>{patient.type_rarib9}</td>
                <td>{patient.cpr_rarib9}</td>
                <td>{patient.rprib10}</td>
                <td>{patient.com_rprib10}</td>
                <td>{patient.type_rprib10}</td>
                <td>{patient.cpr_rprib10}</td>
                <td>{patient.rplrib10}</td>
                <td>{patient.com_rplrib10}</td>
                <td>{patient.type_rplrib10}</td>
                <td>{patient.cpr_rplrib10}</td>
                <td>{patient.ralrib10}</td>
                <td>{patient.com_ralrib10}</td>
                <td>{patient.type_ralrib10}</td>
                <td>{patient.cpr_ralrib10}</td>
                <td>{patient.rarib10}</td>
                <td>{patient.com_rarib10}</td>
                <td>{patient.type_rarib10}</td>
                <td>{patient.cpr_rarib10}</td>
                <td>{patient.rprib11}</td>
                <td>{patient.com_rprib11}</td>
                <td>{patient.type_rprib11}</td>
                <td>{patient.cpr_rprib11}</td>
                <td>{patient.rplrib11}</td>
                <td>{patient.com_rplrib11}</td>
                <td>{patient.type_rplrib11}</td>
                <td>{patient.cpr_rplrib11}</td>
                <td>{patient.ralrib11}</td>
                <td>{patient.com_ralrib11}</td>
                <td>{patient.type_ralrib11}</td>
                <td>{patient.cpr_ralrib11}</td>
                <td>{patient.rprib12}</td>
                <td>{patient.com_rprib12}</td>
                <td>{patient.type_rprib12}</td>
                <td>{patient.cpr_rprib12}</td>
                <td>{patient.rplrib12}</td>
                <td>{patient.com_rplrib12}</td>
                <td>{patient.type_rplrib12}</td>
                <td>{patient.cpr_rplrib12}</td>
                <td>{patient.ralrib12}</td>
                <td>{patient.com_ralrib12}</td>
                <td>{patient.type_ralrib12}</td>
                <td>{patient.cpr_ralrib12}</td>
                <td align="center">
                  <NewPatientModal
                    create={false}
                    patient={patient}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={patient.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PatientList;
