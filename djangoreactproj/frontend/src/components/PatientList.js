import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PatientList extends Component {
  state = {
    lprib1: [
      { location: "lprib1", completeness: "", fracture_type: "", cpr: "" },
    ],
    lplrib1: [
      { location: "lplrib1", completeness: "", fracture_type: "", cpr: "" },
    ],
    // s: "not working",
  };

  // resetState = () => {
  //   this.setState({
  //     lprib1: "",
  //     lplrib1: "",
  //   });
  // };

  fillState = (patient) => {
    // console.log(patients.length);
    // for (var i = 0; i < patients.length; i++) {
    //   var fracture = patients[i].rib_fracture
    // }
    console.log("fillState");
    var fractures = patient.rib_fracture;
    for (var i = 0; i < fractures.length; i++) {
      // var str = toString(fractures[i].location);
      var s = fractures[i].location.replace(/\./g, "");
      // if (s === "lprib1")
      // this.setState({lprib1.location: });

      console.log(s);
      console.log(fractures[i].location);
      console.log(typeof fractures[i].location);
    }
  };

  // setString = (str) => {
  //   // String new_s = str.replace(".", "");
  //   var new_s = str.replace(".", "");
  //   console.log(str);
  //   console.log("trying to set string");
  //   console.log(new_s);
  //   this.setState({ s: new_s });
  // };

  render() {
    const patients = this.props.patients;
    return (
      <Table striped hover size="sm" align="left">
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
            {/* <th>sternum</th> */}
            <th>l.p.rib.1</th>
            <th>l.pl.rib.1</th>
            <th>l.al.rib.1</th>
            <th>l.p.rib.2</th>
            <th>l.pl.rib.2</th>
            <th>l.al.rib.2</th>
            <th>l.a.rib.2</th>
            <th>l.p.rib.3</th>
            <th>l.pl.rib.3</th>
            <th>l.al.rib.3</th>
            <th>l.a.rib.3</th>
            <th>l.p.rib.4</th>
            <th>l.pl.rib.4</th>
            <th>l.al.rib.4</th>
            <th>l.a.rib.4</th>
            <th>l.p.rib.5</th>
            <th>l.pl.rib.5</th>
            <th>l.al.rib.5</th>
            <th>l.a.rib.5</th>
            <th>l.p.rib.6</th>
            <th>l.pl.rib.6</th>
            <th>l.al.rib.6</th>
            <th>l.a.rib.6</th>
            <th>l.p.rib.7</th>
            <th>l.pl.rib.7</th>
            <th>l.al.rib.7</th>
            <th>l.a.rib.7</th>
            <th>l.p.rib.8</th>
            <th>l.pl.rib.8</th>
            <th>l.al.rib.8</th>
            <th>l.a.rib.8</th>
            <th>l.p.rib.9</th>
            <th>l.pl.rib.9</th>
            <th>l.al.rib.9</th>
            <th>l.a.rib.9</th>
            <th>l.p.rib.10</th>
            <th>l.pl.rib.10</th>
            <th>l.al.rib.10</th>
            <th>l.a.rib.10</th>
            <th>l.p.rib.11</th>
            <th>l.pl.rib.11</th>
            <th>l.al.rib.11</th>
            <th>l.p.rib.12</th>
            <th>l.pl.rib.12</th>
            <th>l.al.rib.12</th>
            <th>r.p.rib.1</th>
            <th>r.pl.rib.1</th>
            <th>r.al.rib.1</th>
            <th>r.p.rib.2</th>
            <th>r.pl.rib.2</th>
            <th>r.al.rib.2</th>
            <th>r.a.rib.2</th>
            <th>r.p.rib.3</th>
            <th>r.pl.rib.3</th>
            <th>r.al.rib.3</th>
            <th>r.a.rib.3</th>
            <th>r.p.rib.4</th>
            <th>r.pl.rib.4</th>
            <th>r.al.rib.4</th>
            <th>r.a.rib.4</th>
            <th>r.p.rib.5</th>
            <th>r.pl.rib.5</th>
            <th>r.al.rib.5</th>
            <th>r.a.rib.5</th>
            <th>r.p.rib.6</th>
            <th>r.pl.rib.6</th>
            <th>r.al.rib.6</th>
            <th>r.a.rib.6</th>
            <th>r.p.rib.7</th>
            <th>r.pl.rib.7</th>
            <th>r.al.rib.7</th>
            <th>r.a.rib.7</th>
            <th>r.p.rib.8</th>
            <th>r.pl.rib.8</th>
            <th>r.al.rib.8</th>
            <th>r.a.rib.8</th>
            <th>r.p.rib.9</th>
            <th>r.pl.rib.9</th>
            <th>r.al.rib.9</th>
            <th>r.a.rib.9</th>
            <th>r.p.rib.10</th>
            <th>r.pl.rib.10</th>
            <th>r.al.rib.10</th>
            <th>r.a.rib.10</th>
            <th>r.p.rib.11</th>
            <th>r.pl.rib.11</th>
            <th>r.al.rib.11</th>
            <th>r.p.rib.12</th>
            <th>r.pl.rib.12</th>
            <th>r.al.rib.12</th>
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
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.weight}</td>
                <td>{patient.height}</td>
                <td>{patient.ancestry}</td>
                <td>{patient.mod}</td>
                <td>{patient.cod}</td>
                <td>{patient.cod_type}</td>
                <td>{patient.xray}</td>
                <td>{patient.cpr}</td>
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
                <td>{patient.notes}</td>
                <td>{this.state.lprib1[0].location}</td>
                <td>{this.state.lplrib1[0].location}</td>
                {this.fillState(patient)}
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
