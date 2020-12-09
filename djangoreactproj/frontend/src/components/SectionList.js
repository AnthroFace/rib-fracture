import React, { Component } from "react";
import { Table } from "reactstrap";

class SectionList extends Component {
  render() {
    const sections = this.props.sections;
    return (
      <Table align="left">
        <thead>
          <tr>
            <th>#</th>
            <th>Case Number</th>
            <th>Section</th>
            <th>Completeness</th>
            <th>Fracture Type</th>
            <th>CPR</th>
          </tr>
        </thead>
        <tbody>
          {!sections || sections.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no sections here yet</b>
              </td>
            </tr>
          ) : (
            sections.map((section) => (
              <tr key={section.pk}>
                <td>{section.patient.pk} </td>
                <td>{section.patient.case_id}</td>
                <td>{section.location}</td>
                <td align="center"></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default SectionList;
