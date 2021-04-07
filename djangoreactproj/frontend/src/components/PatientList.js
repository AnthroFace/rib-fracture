import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridExportToolbarButton,
  GridToolbar,
} from "@material-ui/data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      {/* <GridExportToolbarButton /> */}
    </GridToolbarContainer>
  );
}

class PatientList extends Component {
  render() {
    const patients = this.props.patients;
    var rows2 = [];
    var columns = [];
    if (patients && patients.length > 0) {
      rows2 = [];
      for (const [index, patient] of patients.entries()) {
        rows2.push({
          id: patient.pk,
          case_id: patient.case_id,
          age: patient.age,
          sex: patient.age,
          weight: patient.weight,
          height: patient.height,
          ancestry: patient.ancestry,
          mod: patient.mod,
          cod: patient.cod,
          cod_type: patient.cod_type,
          xray: patient.xray,
          cpr: patient.cpr,
          belted: patient.belted,
          obese: patient.obese,
          cardio: patient.cardio,
          patho: patient.patho,
          tobacco: patient.tobacco,
        });
      }
      console.log(rows2);

      columns = [
        { field: "case_id", headerName: "Case ID", width: 110 },
        { field: "age", headerName: "Age", width: 110 },
        { field: "sex", headerName: "Sex", width: 110 },
        { field: "weight", headerName: "Weight", width: 110 },
        { field: "height", headerName: "Height", width: 110 },
        { field: "ancestry", headerName: "Ancestry", width: 110 },
        { field: "mod", headerName: "MOD", width: 110 },
        { field: "cod", headerName: "COD", width: 110 },
        { field: "cod_type", headerName: "COD Type", width: 120 },
        { field: "xray", headerName: "XRay Taken", width: 110 },
        { field: "cpr", headerName: "CPR Given", width: 110 },
        { field: "belted", headerName: "Belted (if ap)", width: 110 },
        { field: "obese", headerName: "Obese", width: 110 },
        { field: "cardio", headerName: "Cardiology", width: 150 },
        { field: "patho", headerName: "Pathology", width: 150 },
        { field: "tobacco", headerName: "Tobacco Usage", width: 170 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
        // { field: "", headerName: "", width: 110 },
      ];
    }

    return (
      // <div style={{ height: 400, width: "100%" }}>
      //   <DataGrid
      //     {...data}
      //     filterModel={riceFilterModel}
      //     components={{
      //       Toolbar: GridToolbar,
      //     }}
      //   />

      <div style={{ height: 1500, width: 1500 }}>
        {!patients || patients.length <= 0 ? (
          <b>Oops, no one here yet</b>
        ) : (
          <DataGrid
            {...patients}
            // style={{ height: 1000, width: "100%" }}
            rows={rows2}
            columns={columns}
            components={{ Toolbar: CustomToolbar }}
            pageSize={10}
            disableColumnFilter
            checkboxSelection
          />

          //         <NewPatientModal
          //           create={false}
          //           patient={patient}
          //           resetState={this.props.resetState}
          //         />
          //         &nbsp;&nbsp;
          //         <ConfirmRemovalModal
          //           pk={patient.pk}
          //           resetState={this.props.resetState}
          //         />
          //       </td>
          //     </tr>
          //   ))
        )}
        {/* </tbody> */}
        {/* </Table> */}
      </div>
    );
  }
}

export default PatientList;
