import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PatientList extends Component {
  render() {
    const patients = this.props.patients;
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Case Number</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Weight</th>
            <th>MOD</th>
            <th>COD</th>
            <th>Add_Notes</th>
          </tr>
        </thead>
        <tbody>
          {!patients || patients.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            patients.map(patient => (
              <tr key={patient.pk}>
                <td>{patient.pk}  </td>
                <td>{patient.case_id}</td>
                <td>{patient.age}</td>
                <td>{patient.weight}</td>
                <td>{patient.mod}</td>
                <td>{patient.cod}</td>
                <td>{patient.add_notes}</td>
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
