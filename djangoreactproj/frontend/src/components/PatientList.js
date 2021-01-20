import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";
import Box from "@material-ui/core/Box";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PatientList extends Component {
  render() {
    const patients = this.props.patients;
    return (
      <Table striped hover size="sm" >
        <thead>
          <tr>
            <th>#</th>
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
            patients.map(patient => (
              <tr key={patient.pk}>
                <td>{patient.pk}  </td>
                <td>{patient.case_id}</td> 
                <td style={{'backgroundColor': patient.age ? '' : 'red' }}>{patient.age}</td>
                <td style={{'backgroundColor': patient.sex ? '' : 'red' }}>{patient.sex}</td>
                <td style={{'backgroundColor': patient.weight ? '' : 'red' }}>{patient.weight}</td>
                <td style={{'backgroundColor': patient.height ? '' : 'red' }}>{patient.height}</td>
                <td style={{'backgroundColor': patient.ancestry ? '' : 'red' }}>{patient.ancestry}</td>
                <td style={{'backgroundColor': patient.mod ? '' : 'red' }}>{patient.mod}</td>
                <td style={{'backgroundColor': patient.cod ? '' : 'red' }}>{patient.cod}</td>
                <td style={{'backgroundColor': patient.cod_type ? '' : 'red' }}>{patient.cod_type}</td>
                <td style={{'backgroundColor': patient.xray ? '' : 'red' }}>{patient.xray}</td>
                <td style={{'backgroundColor': patient.cpr ? '' : 'red' }}>{patient.cpr}</td>
                <td style={{'backgroundColor': patient.belted ? '' : 'red' }}>{patient.belted}</td>
                <td style={{'backgroundColor': patient.obese ? '' : 'red' }}>{patient.obese}</td>
                <td style={{'backgroundColor': patient.cardio ? '' : 'red' }}>{patient.cardio}</td>
                <td style={{'backgroundColor': patient.patho ? '' : 'red' }}>{patient.patho}</td>
                <td style={{'backgroundColor': patient.tobacco ? '' : 'red' }}>{patient.tobacco}</td>
                <td style={{'backgroundColor': patient.marijuana ? '' : 'red' }}>{patient.marijuana}</td>
                <td style={{'backgroundColor': patient.alcohol ? '' : 'red' }}>{patient.alcohol}</td>
                <td style={{'backgroundColor': patient.prescription ? '' : 'red' }}>{patient.prescription}</td>
                <td style={{'backgroundColor': patient.drug_use ? '' : 'red' }}>{patient.drug_use}</td>
                <td style={{'backgroundColor': patient.health_notes ? '' : 'red' }}>{patient.health_notes}</td>
                <td style={{'backgroundColor': patient.notes ? '' : 'red' }}>{patient.notes}</td>
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
