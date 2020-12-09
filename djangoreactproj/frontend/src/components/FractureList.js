import React, { Component } from "react";
import { Table } from "reactstrap";

class FractureList extends Component {
  render() {
    const fractures = this.props.fractures;
    return (
      <Table align="left">
        <thead>
          <tr>
            <th>#</th>
            <th>Case Number</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {!fractures || fractures.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no fractures here yet</b>
              </td>
            </tr>
          ) : (
            fractures.map((fracture) => (
              <tr key={fracture.pk}>
                <td>{fracture.patient.pk} </td>
                <td>{fracture.patient.case_id}</td>
                <td>{fracture.location}</td>
                <td align="center"></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default FractureList;
