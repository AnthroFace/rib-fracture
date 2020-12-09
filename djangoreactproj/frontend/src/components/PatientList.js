import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";

import FractureList from "./FractureList";
import SectionList from "./SectionList";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

getFractures = () => {
  axios.get(API_URL).then((res) => this.setState({ fractures: res.data }));
};

resetState = () => {
  this.getFractures();
};

class PatientList extends Component {
  render() {
    const patients = this.props.patients;
    return (
      <Table align="left">
        <thead>
          <tr>
            <th>#</th>
            <th>Case Number</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Weight</th>
            <th>Ancestry</th>
            <th>MOD</th>
            <th>COD</th>
            <th>COD Type</th>
            <th>XRAY</th>
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
                <td>{patient.pk} </td>
                <td>{patient.case_id}</td>
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.weight}</td>
                <td>{patient.ancestry}</td>
                <td>{patient.mod}</td>
                <td>{patient.cod}</td>
                <td>{patient.cod_type}</td>
                <td>{patient.xray}</td>
                <td>{patient.belted}</td>
                <td>{patient.obese}</td>
                <td>{patient.cardio}</td>
                <td>{patient.patho}</td>
                <td>{patient.tobacco}</td>
                <td>{patient.marijuana}</td>
                <td>{patient.alcohol}</td>
                <td>{patient.prescription}</td>
                <td>{patient.drug_use}</td>
                <td>{patient.health_notes}</td>
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
