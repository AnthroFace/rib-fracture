import React, { Component, Fragment } from "react";
// import Modal from "@material-ui/core/Modal";
import EditPatientForm from "./EditPatientForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Pagination from "@material-ui/lab/Pagination";

import axios from "axios";

import { API_URL } from "../constants";

import {
  DataGrid,
  GridToolbarContainer,
  GridColumnsToolbarButton,
  GridExportToolbarButton,
  GridToolbar,
  useGridSlotComponentProps,
} from "@material-ui/data-grid";

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

var wid = 3600;

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      {/* <GridExportToolbarButton /> */}
    </GridToolbarContainer>
  );
}

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();

  return (
    <Pagination
      // className={classes.root}
      // color="primary"
      shape="rounded"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

class PatientList extends Component {
  state = {
    all_data: false,
    editing: false,
    confirm: false,
    pk: "",
    patient: "",
    // confirm_pk: "",
    // rows =
    to_delete: [],
    modal: false,
  };

  toggleAll = () => {
    this.setState((previous) => ({
      all_data: !previous.all_data,
    }));
  };

  toggleModal = () => {
    // console.log(this.state.patient_pk);
    this.setState((previous) => ({
      editing: !previous.editing,
      pk: "",
      // confirm_pk: "",
    }));
    console.log("toggleModal", this.state.pk);
    // console.log("toggleModal", this.state.confirm_pk);
  };

  confirmCancel = () => {
    this.setState({ editing: false, confirm: false, pk: "" });
    console.log("confirmCancel", this.state.pk);
    // console.log("confirmCancel", this.state.confirm_pk);
  };

  confirmEdit = () => {
    this.setState({ editing: true, confirm: false });
    console.log("confirmEdit", this.state.pk);
    console.log("patient:", this.state.patient);
    // console.log("confirmEdit confirm", this.state.confirm_pk);
  };

  toggleConfirm = () => {
    this.setState((previous) => ({
      confirm: !previous.confirm,
    }));
    console.log("toggleConfirm", this.state.pk);
    // console.log("toggleConfirm", this.state.confirm_pk);
  };

  handleClose = () => {
    this.setState({ editing: false });
    console.log("handleClose", this.state.pk);
  };

  doubleClick = (GridRowParams) => {
    this.setState({
      confirm: true,
      pk: GridRowParams.row.id,
      patient: GridRowParams.row,
    });
    console.log("doubleClick", this.state.pk);
  };

  rowClick = (GridRowParams) => {
    console.log(GridRowParams);
    console.log("row click");
  };
  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  // deletePatient = (pk) => {
  //   axios.delete(API_URL + pk).then(() => {
  //     this.props.resetState();
  //     this.toggle();
  //   });
  // };

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  deletePatients = (pks) => {
    console.log("DELETE PATIENTS");
    console.log("Pks", pks);
    for (const [index, pk] of pks.entries()) {
      axios
        .delete(API_URL + pk, {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("deleted");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // this.sleep(3000);
    this.toggle();
    this.setState({ to_delete: [] });
    this.props.resetState();
    window.location.reload();
  };

  onSelectionModelChange = (selection) => {
    console.log(selection);
    console.log(typeof selection);
    console.log(selection.selectionModel);
    console.log(typeof selection.selectionModel);
    var model = selection.selectionModel;
    // var del = [...this.state.to_delete];
    var del = [];

    // var arr = Object.values(model);
    // console.log(Object.entries(model));
    // console.log(typeof arr);

    console.log("before for");
    for (const [i, pk] of model.entries()) {
      // console.log("for", parseInt(pk));
      // console.log(typeof parseInt(pk));
      // if (del.includes(parseInt(pk))) {
      //   console.log("exisits");
      //   var index = del.indexOf(parseInt(pk));
      //   if (index > -1) {
      //     del.splice(index, 1);
      //   }
      //   //
      // } else {
      //   console.log("does not exist");
      //   del.push(parseInt(pk));
      //   console.log("adding", del);
      // }
      del.push(parseInt(pk));
    }
    console.log("after for");
    console.log("del", del);
    this.setState({ to_delete: del });
  };

  onSelectionChange = (selection) => {
    console.log("selection change");
    console.log(selection);
    console.log(selection.data);
    console.log(selection.isSelected);
    var del = [...this.state.to_delete];
    // var del = [];
    if (selection.isSelected) {
      del.push(selection.data.id);
      console.log("adding", del);
    } else {
      var index = del.indexOf(selection.data.id);
      if (index > -1) {
        del.splice(index, 1);
      }
    }
    console.log(del);
    //
    this.setState({ to_delete: del });
  };

  render() {
    const patients = this.props.patients;
    var rows2 = [];
    var columns = [];
    // var w = 3000
    if (patients && patients.length > 0) {
      for (const [index, patient] of patients.entries()) {
        rows2.push({
          id: patient.pk,
          case_id: patient.case_id,
          age: patient.age,
          sex: patient.sex,
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
          marijuana: patient.marijuana,
          alcohol: patient.alcohol,
          prescription: patient.prescription,
          drug_use: patient.drug_use,
          health_notes: patient.health_notes,
          notes: patient.notes,
          sternum: patient.sternum,
          cpr_sternum: patient.cpr_sternum,
          lprib1: patient.lprib1,
          com_lprib1: patient.com_lprib1,
          type_lprib1: patient.type_lprib1,
          cpr_lprib1: patient.cpr_lprib1,
          lplrib1: patient.lplrib1,
          com_lplrib1: patient.com_lplrib1,
          type_lplrib1: patient.type_lplrib1,
          cpr_lplrib1: patient.cpr_lplrib1,
          lalrib1: patient.lalrib1,
          com_lalrib1: patient.com_lalrib1,
          type_lalrib1: patient.type_lalrib1,
          cpr_lalrib1: patient.type_lalrib1,
          lprib2: patient.lprib2,
          com_lprib2: patient.com_lprib2,
          type_lprib2: patient.type_lprib2,
          cpr_lprib2: patient.cpr_lprib2,
          lplrib2: patient.lplrib2,
          com_lplrib2: patient.com_lplrib2,
          type_lplrib2: patient.type_lplrib2,
          cpr_lplrib2: patient.cpr_lplrib2,
          lalrib2: patient.lalrib2,
          com_lalrib2: patient.com_lalrib2,
          type_lalrib2: patient.type_lalrib2,
          cpr_lalrib2: patient.cpr_lalrib2,
          larib2: patient.larib2,
          com_larib2: patient.com_larib2,
          type_larib2: patient.type_larib2,
          cpr_larib2: patient.cpr_larib2,
          lprib3: patient.lprib3,
          com_lprib3: patient.com_lprib3,
          type_lprib3: patient.type_lprib3,
          cpr_lprib3: patient.cpr_lprib3,
          lplrib3: patient.lplrib3,
          com_lplrib3: patient.com_lplrib3,
          type_lplrib3: patient.type_lplrib3,
          cpr_lplrib3: patient.cpr_lplrib3,
          lalrib3: patient.lalrib3,
          com_lalrib3: patient.com_lalrib3,
          type_lalrib3: patient.type_lalrib3,
          cpr_lalrib3: patient.cpr_lalrib3,
          larib3: patient.larib3,
          com_larib3: patient.com_larib3,
          type_larib3: patient.type_larib3,
          cpr_larib3: patient.cpr_larib3,
          lprib4: patient.lprib4,
          com_lprib4: patient.com_lprib4,
          type_lprib4: patient.type_lprib4,
          cpr_lprib4: patient.cpr_lprib4,
          lplrib4: patient.lplrib4,
          com_lplrib4: patient.com_lplrib4,
          type_lplrib4: patient.type_lplrib4,
          cpr_lplrib4: patient.cpr_lplrib4,
          lalrib4: patient.lalrib4,
          com_lalrib4: patient.com_lalrib4,
          type_lalrib4: patient.type_lalrib4,
          cpr_lalrib4: patient.cpr_lalrib4,
          larib4: patient.larib4,
          com_larib4: patient.com_larib4,
          type_larib4: patient.type_larib4,
          cpr_larib4: patient.cpr_larib4,
          lprib5: patient.lprib5,
          com_lprib5: patient.com_lprib5,
          type_lprib5: patient.type_lprib5,
          cpr_lprib5: patient.cpr_lprib5,
          lplrib5: patient.lplrib5,
          com_lplrib5: patient.com_lplrib5,
          type_lplrib5: patient.type_lplrib5,
          cpr_lplrib5: patient.cpr_lplrib5,
          lalrib5: patient.lalrib5,
          com_lalrib5: patient.com_lalrib5,
          type_lalrib5: patient.type_lalrib5,
          cpr_lalrib5: patient.cpr_lalrib5,
          larib5: patient.larib5,
          com_larib5: patient.com_larib5,
          type_larib5: patient.type_larib5,
          cpr_larib5: patient.cpr_larib5,
          lprib6: patient.lprib6,
          com_lprib6: patient.com_lprib6,
          type_lprib6: patient.type_lprib6,
          cpr_lprib6: patient.cpr_lprib6,
          lplrib6: patient.lplrib6,
          com_lplrib6: patient.com_lplrib6,
          type_lplrib6: patient.type_lplrib6,
          cpr_lplrib6: patient.cpr_lplrib6,
          lalrib6: patient.lalrib6,
          com_lalrib6: patient.com_lalrib6,
          type_lalrib6: patient.type_lalrib6,
          cpr_lalrib6: patient.cpr_lalrib6,
          larib6: patient.larib6,
          com_larib6: patient.com_larib6,
          type_larib6: patient.type_larib6,
          cpr_larib6: patient.cpr_larib6,
          lprib7: patient.lprib7,
          com_lprib7: patient.com_lprib7,
          type_lprib7: patient.type_lprib7,
          cpr_lprib7: patient.cpr_lprib7,
          lplrib7: patient.lplrib7,
          com_lplrib7: patient.com_lplrib7,
          type_lplrib7: patient.type_lplrib7,
          cpr_lplrib7: patient.cpr_lplrib7,
          lalrib7: patient.lalrib7,
          cpr_lalrib7: patient.cpr_lalrib7,
          com_lalrib7: patient.com_lalrib7,
          type_lalrib7: patient.type_lalrib7,
          larib7: patient.larib7,
          com_larib7: patient.com_larib7,
          type_larib7: patient.type_larib7,
          cpr_larib7: patient.cpr_larib7,
          lprib8: patient.lprib8,
          com_lprib8: patient.com_lprib8,
          type_lprib8: patient.type_lprib8,
          cpr_lprib8: patient.cpr_lprib8,
          lplrib8: patient.lplrib8,
          com_lplrib8: patient.com_lplrib8,
          type_lplrib8: patient.type_lplrib8,
          cpr_lplrib8: patient.cpr_lplrib8,
          lalrib8: patient.lalrib8,
          com_lalrib8: patient.com_lalrib8,
          type_lalrib8: patient.type_lalrib8,
          cpr_lalrib8: patient.cpr_lalrib8,
          larib8: patient.larib8,
          com_larib8: patient.com_larib8,
          type_larib8: patient.type_larib8,
          cpr_larib8: patient.cpr_larib8,
          lprib9: patient.lprib9,
          com_lprib9: patient.com_lprib9,
          type_lprib9: patient.type_lprib9,
          cpr_lprib9: patient.cpr_lprib9,
          lplrib9: patient.lplrib9,
          com_lplrib9: patient.com_lplrib9,
          type_lplrib9: patient.type_lplrib9,
          cpr_lplrib9: patient.cpr_lplrib9,
          lalrib9: patient.lalrib9,
          com_lalrib9: patient.com_lalrib9,
          type_lalrib9: patient.type_lalrib9,
          cpr_lalrib9: patient.cpr_lalrib9,
          larib9: patient.larib9,
          com_larib9: patient.com_larib9,
          type_larib9: patient.type_larib9,
          cpr_larib9: patient.cpr_larib9,
          lprib10: patient.lprib10,
          com_lprib10: patient.com_lprib10,
          type_lprib10: patient.type_lprib10,
          cpr_lprib10: patient.cpr_lprib10,
          lplrib10: patient.lplrib10,
          com_lplrib10: patient.com_lplrib10,
          type_lplrib10: patient.type_lplrib10,
          cpr_lplrib10: patient.cpr_lplrib10,
          lalrib10: patient.lalrib10,
          com_lalrib10: patient.com_lalrib10,
          type_lalrib10: patient.type_lalrib10,
          cpr_lalrib10: patient.cpr_lalrib10,
          larib10: patient.larib10,
          com_larib10: patient.com_larib10,
          type_larib10: patient.type_larib10,
          cpr_larib10: patient.cpr_larib10,
          lprib11: patient.lprib11,
          com_lprib11: patient.com_lprib11,
          type_lprib11: patient.type_lprib11,
          cpr_lprib11: patient.cpr_lprib11,
          lplrib11: patient.lplrib11,
          com_lplrib11: patient.com_lplrib11,
          type_lplrib11: patient.type_lplrib11,
          cpr_lplrib11: patient.cpr_lplrib11,
          lalrib11: patient.lalrib11,
          com_lalrib11: patient.com_lalrib11,
          type_lalrib11: patient.type_lalrib11,
          cpr_lalrib11: patient.cpr_lalrib11,
          lprib12: patient.lprib12,
          com_lprib12: patient.com_lprib12,
          type_lprib12: patient.type_lprib12,
          cpr_lprib12: patient.cpr_lprib12,
          lplrib12: patient.lplrib12,
          com_lplrib12: patient.com_lplrib12,
          type_lplrib12: patient.type_lplrib12,
          cpr_lplrib12: patient.cpr_lplrib12,
          lalrib12: patient.lalrib12,
          com_lalrib12: patient.com_lalrib12,
          type_lalrib12: patient.type_lalrib12,
          cpr_lalrib12: patient.cpr_lalrib12,
          rprib1: patient.rprib1,
          com_rprib1: patient.com_rprib1,
          type_rprib1: patient.type_rprib1,
          cpr_rprib1: patient.cpr_rprib1,
          rplrib1: patient.rplrib1,
          com_rplrib1: patient.com_rplrib1,
          type_rplrib1: patient.type_rplrib1,
          cpr_rplrib1: patient.cpr_rplrib1,
          ralrib1: patient.ralrib1,
          com_ralrib1: patient.com_ralrib1,
          type_ralrib1: patient.type_ralrib1,
          cpr_ralrib1: patient.cpr_ralrib1,
          rprib2: patient.rprib2,
          com_rprib2: patient.com_rprib2,
          type_rprib2: patient.type_rprib2,
          cpr_rprib2: patient.cpr_rprib2,
          rplrib2: patient.rplrib2,
          com_rplrib2: patient.com_rplrib2,
          type_rplrib2: patient.type_rplrib2,
          cpr_rplrib2: patient.cpr_rplrib2,
          ralrib2: patient.ralrib2,
          com_ralrib2: patient.com_ralrib2,
          type_ralrib2: patient.type_ralrib2,
          cpr_ralrib2: patient.cpr_ralrib2,
          rarib2: patient.rarib2,
          com_rarib2: patient.com_rarib2,
          type_rarib2: patient.type_rarib2,
          cpr_rarib2: patient.cpr_rarib2,
          rprib3: patient.rprib3,
          com_rprib3: patient.com_rprib3,
          type_rprib3: patient.type_rprib3,
          cpr_rprib3: patient.cpr_rprib3,
          rplrib3: patient.rplrib3,
          com_rplrib3: patient.com_rplrib3,
          type_rplrib3: patient.type_rplrib3,
          cpr_rplrib3: patient.cpr_rplrib3,
          ralrib3: patient.ralrib3,
          com_ralrib3: patient.com_ralrib3,
          type_ralrib3: patient.type_ralrib3,
          cpr_ralrib3: patient.cpr_ralrib3,
          rarib3: patient.rarib3,
          com_rarib3: patient.com_rarib3,
          type_rarib3: patient.type_rarib3,
          cpr_rarib3: patient.cpr_rarib3,
          rprib4: patient.rprib4,
          com_rprib4: patient.com_rprib4,
          type_rprib4: patient.type_rprib4,
          cpr_rprib4: patient.cpr_rprib4,
          rplrib4: patient.rplrib4,
          com_rplrib4: patient.com_rplrib4,
          type_rplrib4: patient.type_rplrib4,
          cpr_rplrib4: patient.cpr_rplrib4,
          ralrib4: patient.ralrib4,
          com_ralrib4: patient.com_ralrib4,
          type_ralrib4: patient.type_ralrib4,
          cpr_ralrib4: patient.cpr_ralrib4,
          rarib4: patient.rarib4,
          com_rarib4: patient.com_rarib4,
          type_rarib4: patient.type_rarib4,
          cpr_rarib4: patient.cpr_rarib4,
          rprib5: patient.rprib5,
          com_rprib5: patient.com_rprib5,
          type_rprib5: patient.type_rprib5,
          cpr_rprib5: patient.cpr_rprib5,
          rplrib5: patient.rplrib5,
          com_rplrib5: patient.com_rplrib5,
          type_rplrib5: patient.type_rplrib5,
          cpr_rplrib5: patient.cpr_rplrib5,
          ralrib5: patient.ralrib5,
          com_ralrib5: patient.com_ralrib5,
          type_ralrib5: patient.type_ralrib5,
          cpr_ralrib5: patient.cpr_ralrib5,
          rarib5: patient.rarib5,
          com_rarib5: patient.com_rarib5,
          type_rarib5: patient.type_rarib5,
          cpr_rarib5: patient.cpr_rarib5,
          rprib6: patient.rprib6,
          com_rprib6: patient.com_rprib6,
          type_rprib6: patient.type_rprib6,
          cpr_rprib6: patient.cpr_rprib6,
          rplrib6: patient.rplrib6,
          com_rplrib6: patient.com_rplrib6,
          type_rplrib6: patient.type_rplrib6,
          cpr_rplrib6: patient.cpr_rplrib6,
          ralrib6: patient.ralrib6,
          com_ralrib6: patient.com_ralrib6,
          type_ralrib6: patient.type_ralrib6,
          cpr_ralrib6: patient.cpr_ralrib6,
          rarib6: patient.rarib6,
          com_rarib6: patient.com_rarib6,
          type_rarib6: patient.type_rarib6,
          cpr_rarib6: patient.cpr_rarib6,
          rprib7: patient.rprib7,
          com_rprib7: patient.com_rprib7,
          type_rprib7: patient.type_rprib7,
          cpr_rprib7: patient.cpr_rprib7,
          rplrib7: patient.rplrib7,
          com_rplrib7: patient.com_rplrib7,
          type_rplrib7: patient.type_rplrib7,
          cpr_rplrib7: patient.cpr_rplrib7,
          ralrib7: patient.ralrib7,
          com_ralrib7: patient.com_ralrib7,
          type_ralrib7: patient.type_ralrib7,
          cpr_ralrib7: patient.cpr_ralrib7,
          rarib7: patient.rarib7,
          com_rarib7: patient.com_rarib7,
          type_rarib7: patient.type_rarib7,
          cpr_rarib7: patient.cpr_rarib7,
          rprib8: patient.rprib8,
          com_rprib8: patient.com_rprib8,
          type_rprib8: patient.type_rprib8,
          cpr_rprib8: patient.cpr_rprib8,
          rplrib8: patient.rplrib8,
          com_rplrib8: patient.com_rplrib8,
          type_rplrib8: patient.type_rplrib8,
          cpr_rplrib8: patient.cpr_rplrib8,
          ralrib8: patient.ralrib8,
          com_ralrib8: patient.com_ralrib8,
          type_ralrib8: patient.type_ralrib8,
          cpr_ralrib8: patient.cpr_ralrib8,
          rarib8: patient.rarib8,
          com_rarib8: patient.com_rarib8,
          type_rarib8: patient.type_rarib8,
          cpr_rarib8: patient.cpr_rarib8,
          rprib9: patient.rprib9,
          com_rprib9: patient.com_rprib9,
          type_rprib9: patient.type_rprib9,
          cpr_rprib9: patient.cpr_rprib9,
          rplrib9: patient.rplrib9,
          com_rplrib9: patient.com_rplrib9,
          type_rplrib9: patient.type_rplrib9,
          cpr_rplrib9: patient.cpr_rplrib9,
          ralrib9: patient.ralrib9,
          com_ralrib9: patient.com_ralrib9,
          type_ralrib9: patient.type_ralrib9,
          cpr_ralrib9: patient.cpr_ralrib9,
          rarib9: patient.rarib9,
          com_rarib9: patient.com_rarib9,
          type_rarib9: patient.type_rarib9,
          cpr_rarib9: patient.cpr_rarib9,
          rprib10: patient.rprib10,
          com_rprib10: patient.com_rprib10,
          type_rprib10: patient.type_rprib10,
          cpr_rprib10: patient.cpr_rprib10,
          rplrib10: patient.rplrib10,
          com_rplrib10: patient.com_rplrib10,
          type_rplrib10: patient.type_rplrib10,
          cpr_rplrib10: patient.cpr_rplrib10,
          ralrib10: patient.ralrib10,
          com_ralrib10: patient.com_ralrib10,
          type_ralrib10: patient.type_ralrib10,
          cpr_ralrib10: patient.cpr_ralrib10,
          rarib10: patient.rarib10,
          com_rarib10: patient.com_rarib10,
          type_rarib10: patient.type_rarib10,
          cpr_rarib10: patient.cpr_rarib10,
          rprib11: patient.rprib11,
          com_rprib11: patient.com_rprib11,
          type_rprib11: patient.type_rprib11,
          cpr_rprib11: patient.cpr_rprib11,
          rplrib11: patient.rplrib11,
          com_rplrib11: patient.com_rplrib11,
          type_rplrib11: patient.type_rplrib11,
          cpr_rplrib11: patient.cpr_rplrib11,
          ralrib11: patient.ralrib11,
          com_ralrib11: patient.com_ralrib11,
          type_ralrib11: patient.type_ralrib11,
          cpr_ralrib11: patient.cpr_ralrib11,
          rprib12: patient.rprib12,
          com_rprib12: patient.com_rprib12,
          type_rprib12: patient.type_rprib12,
          cpr_rprib12: patient.cpr_rprib12,
          rplrib12: patient.rplrib12,
          com_rplrib12: patient.com_rplrib12,
          type_rplrib12: patient.type_rplrib12,
          cpr_rplrib12: patient.cpr_rplrib12,
          ralrib12: patient.ralrib12,
          com_ralrib12: patient.com_ralrib12,
          type_ralrib12: patient.type_ralrib12,
          cpr_ralrib12: patient.cpr_ralrib12,
        });
      }
      if (this.state.all_data) {
        wid = 34340;

        // console.log(rows2);

        columns = [
          { field: "case_id", headerName: "Case ID", width: 110 },
          { field: "age", headerName: "Age", width: 110, filterable: false },
          { field: "sex", headerName: "Sex", width: 110, filterable: false },
          {
            field: "weight",
            headerName: "Weight",
            width: 110,
            filterable: false,
          },
          {
            field: "height",
            headerName: "Height",
            width: 110,
            filterable: false,
          },
          {
            field: "ancestry",
            headerName: "Ancestry",
            width: 110,
            filterable: false,
          },
          { field: "mod", headerName: "MOD", width: 110, filterable: false },
          { field: "cod", headerName: "COD", width: 110, filterable: false },
          {
            field: "cod_type",
            headerName: "COD Type",
            width: 120,
            filterable: false,
          },
          {
            field: "xray",
            headerName: "XRay Taken",
            width: 110,
            filterable: false,
          },
          {
            field: "cpr",
            headerName: "CPR Given",
            width: 110,
            filterable: false,
          },
          {
            field: "belted",
            headerName: "Belted (if ap)",
            width: 110,
            filterable: false,
          },
          {
            field: "obese",
            headerName: "Obese",
            width: 110,
            filterable: false,
          },
          {
            field: "cardio",
            headerName: "Cardiology",
            width: 150,
            filterable: false,
          },
          {
            field: "patho",
            headerName: "Pathology",
            width: 150,
            filterable: false,
          },
          {
            field: "tobacco",
            headerName: "Tobacco Usage",
            width: 170,
            filterable: false,
          },
          {
            field: "marijuana",
            headerName: "Marijuana Usage",
            width: 170,
            filterable: false,
          },
          {
            field: "alcohol",
            headerName: "Alochol Usage",
            width: 170,
            filterable: false,
          },
          {
            field: "prescription",
            headerName: "Prescription",
            width: 170,
            filterable: false,
          },
          {
            field: "drug_use",
            headerName: "Drug Use",
            width: 150,
            filterable: false,
          },
          {
            field: "health_notes",
            headerName: "Health Notes",
            width: 400,
            filterable: false,
          },
          {
            field: "notes",
            headerName: "Additional Notes",
            width: 400,
            filterable: false,
          },
          {
            field: "sternum",
            headerName: "Sternum",
            width: 150,
            filterable: false,
          },
          {
            field: "cpr_sternum",
            headerName: "CPR Sternum",
            width: 150,
            filterable: false,
          },
          {
            field: "lprib1",
            headerName: "lprib1",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lprib1",
            headerName: "Completeness lprib1",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib1",
            headerName: "Fracture Type lprib1",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib1",
            headerName: "CPR lprib1",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib1",
            headerName: "lprib1",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lplrib1",
            headerName: "Completeness lplrib1",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib1",
            headerName: "Fracture Type lplrib1",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib1",
            headerName: "CPR lplrib1",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib1",
            headerName: "lalrib1",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lalrib1",
            headerName: "Completeness lalrib1",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib1",
            headerName: "Fracture Type lalrib1",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib1",
            headerName: "CPR lalrib1",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib2",
            headerName: "lprib2",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lprib2",
            headerName: "Completeness lprib2",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib2",
            headerName: "Fracture Type lprib2",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib2",
            headerName: "CPR lprib2",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib2",
            headerName: "lprib2",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lplrib2",
            headerName: "Completeness lplrib2",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib2",
            headerName: "Fracture Type lplrib2",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib2",
            headerName: "CPR lplrib2",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib2",
            headerName: "lalrib2",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lalrib2",
            headerName: "Completeness lalrib2",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib2",
            headerName: "Fracture Type lalrib2",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib2",
            headerName: "CPR lalrib2",
            width: 170,
            filterable: false,
          },
          {
            field: "larib2",
            headerName: "larib2",
            width: 110,
            filterable: false,
          },
          {
            field: "com_larib2",
            headerName: "Completeness larib2",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib2",
            headerName: "Fracture Type larib2",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib2",
            headerName: "CPR larib2",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib3",
            headerName: "lprib3",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lprib3",
            headerName: "Completeness lprib3",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib3",
            headerName: "Fracture Type lprib3",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib3",
            headerName: "CPR lprib3",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib3",
            headerName: "lprib3",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lplrib3",
            headerName: "Completeness lplrib3",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib3",
            headerName: "Fracture Type lplrib3",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib3",
            headerName: "CPR lplrib3",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib3",
            headerName: "lalrib3",
            width: 110,
            filterable: false,
          },
          {
            field: "com_lalrib3",
            headerName: "Completeness lalrib3",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib3",
            headerName: "Fracture Type lalrib3",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib3",
            headerName: "CPR lalrib3",
            width: 170,
            filterable: false,
          },
          {
            field: "larib3",
            headerName: "larib3",
            width: 110,
            filterable: false,
          },
          {
            field: "com_larib3",
            headerName: "Completeness larib3",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib3",
            headerName: "Fracture Type larib3",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib3",
            headerName: "CPR larib3",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib4",
            headerName: "lprib4",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib4",
            headerName: "Completeness lprib4",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib4",
            headerName: "Fracture Type lprib4",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib4",
            headerName: "CPR lprib4",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib4",
            headerName: "lplrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib4",
            headerName: "Completeness lplrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib4",
            headerName: "Fracture Type lplrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib4",
            headerName: "CPR lplrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib4",
            headerName: "lalrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib4",
            headerName: "Completeness lalrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib4",
            headerName: "Fracture Type lalrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib4",
            headerName: "CPR lalrib4",
            width: 170,
            filterable: false,
          },
          {
            field: "larib4",
            headerName: "larib4",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib4",
            headerName: "Completeness larib4",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib4",
            headerName: "Fracture Type larib4",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib4",
            headerName: "CPR larib4",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib5",
            headerName: "lprib5",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib5",
            headerName: "Completeness lprib5",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib5",
            headerName: "Fracture Type lprib5",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib5",
            headerName: "CPR lprib5",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib5",
            headerName: "lplrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib5",
            headerName: "Completeness lplrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib5",
            headerName: "Fracture Type lplrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib5",
            headerName: "CPR lplrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib5",
            headerName: "lalrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib5",
            headerName: "Completeness lalrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib5",
            headerName: "Fracture Type lalrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib5",
            headerName: "CPR lalrib5",
            width: 170,
            filterable: false,
          },
          {
            field: "larib5",
            headerName: "larib5",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib5",
            headerName: "Completeness larib5",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib5",
            headerName: "Fracture Type larib5",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib5",
            headerName: "CPR larib5",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib6",
            headerName: "lprib6",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib6",
            headerName: "Completeness lprib6",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib6",
            headerName: "Fracture Type lprib6",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib6",
            headerName: "CPR lprib6",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib6",
            headerName: "lplrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib6",
            headerName: "Completeness lplrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib6",
            headerName: "Fracture Type lplrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib6",
            headerName: "CPR lplrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib6",
            headerName: "lalrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib6",
            headerName: "Completeness lalrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib6",
            headerName: "Fracture Type lalrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib6",
            headerName: "CPR lalrib6",
            width: 170,
            filterable: false,
          },
          {
            field: "larib6",
            headerName: "larib6",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib6",
            headerName: "Completeness larib6",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib6",
            headerName: "Fracture Type larib6",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib6",
            headerName: "CPR larib6",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib7",
            headerName: "lprib7",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib7",
            headerName: "Completeness lprib7",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib7",
            headerName: "Fracture Type lprib7",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib7",
            headerName: "CPR lprib7",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib7",
            headerName: "lplrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib7",
            headerName: "Completeness lplrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib7",
            headerName: "Fracture Type lplrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib7",
            headerName: "CPR lplrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib7",
            headerName: "lalrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib7",
            headerName: "Completeness lalrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib7",
            headerName: "Fracture Type lalrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib7",
            headerName: "CPR lalrib7",
            width: 170,
            filterable: false,
          },
          {
            field: "larib7",
            headerName: "larib7",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib7",
            headerName: "Completeness larib7",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib7",
            headerName: "Fracture Type larib7",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib7",
            headerName: "CPR larib7",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib8",
            headerName: "lprib8",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib8",
            headerName: "Completeness lprib8",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib8",
            headerName: "Fracture Type lprib8",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib8",
            headerName: "CPR lprib8",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib8",
            headerName: "lplrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib8",
            headerName: "Completeness lplrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib8",
            headerName: "Fracture Type lplrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib8",
            headerName: "CPR lplrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib8",
            headerName: "lalrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib8",
            headerName: "Completeness lalrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib8",
            headerName: "Fracture Type lalrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib8",
            headerName: "CPR lalrib8",
            width: 170,
            filterable: false,
          },
          {
            field: "larib8",
            headerName: "larib8",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib8",
            headerName: "Completeness larib8",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib8",
            headerName: "Fracture Type larib8",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib8",
            headerName: "CPR larib8",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib9",
            headerName: "lprib9",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib9",
            headerName: "Completeness lprib9",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib9",
            headerName: "Fracture Type lprib9",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib9",
            headerName: "CPR lprib9",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib9",
            headerName: "lplrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib9",
            headerName: "Completeness lplrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib9",
            headerName: "Fracture Type lplrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib9",
            headerName: "CPR lplrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib9",
            headerName: "lalrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib9",
            headerName: "Completeness lalrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib9",
            headerName: "Fracture Type lalrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib9",
            headerName: "CPR lalrib9",
            width: 170,
            filterable: false,
          },
          {
            field: "larib9",
            headerName: "larib9",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib9",
            headerName: "Completeness larib9",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib9",
            headerName: "Fracture Type larib9",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib9",
            headerName: "CPR larib9",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib10",
            headerName: "lprib10",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib10",
            headerName: "Completeness lprib10",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib10",
            headerName: "type_lprib10",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib10",
            headerName: "CPR lprib10",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib10",
            headerName: "lplrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib10",
            headerName: "Completeness lplrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib10",
            headerName: "type_lplrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib10",
            headerName: "CPR lplrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib10",
            headerName: "lalrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib10",
            headerName: "Completeness lalrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib10",
            headerName: "Fracture Type lalrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib10",
            headerName: "CPR lalrib10",
            width: 170,
            filterable: false,
          },
          {
            field: "larib10",
            headerName: "larib10",
            width: 170,
            filterable: false,
          },
          {
            field: "com_larib10",
            headerName: "Completeness larib10",
            width: 170,
            filterable: false,
          },
          {
            field: "type_larib10",
            headerName: "Fracture Type larib10",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_larib10",
            headerName: "CPR larib10",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib11",
            headerName: "lprib11",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib11",
            headerName: "Completeness lprib11",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib11",
            headerName: "Fracture Type lprib11",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib11",
            headerName: "CPR lprib11",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib11",
            headerName: "lplrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib11",
            headerName: "Completeness lplrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib11",
            headerName: "Fracture Type lplrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib11",
            headerName: "CPR lplrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib11",
            headerName: "lalrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib11",
            headerName: "Completeness lalrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib11",
            headerName: "Fracture Type lalrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib11",
            headerName: "CPR lalrib11",
            width: 170,
            filterable: false,
          },
          {
            field: "lprib12",
            headerName: "lprib12",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lprib12",
            headerName: "Completeness lprib12",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lprib12",
            headerName: "Fracture Type lprib12",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lprib12",
            headerName: "CPR lprib12",
            width: 170,
            filterable: false,
          },
          {
            field: "lplrib12",
            headerName: "lplrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lplrib12",
            headerName: "Completeness lplrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lplrib12",
            headerName: "Fracture Type lplrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lplrib12",
            headerName: "CPR lplrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "lalrib12",
            headerName: "lalrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "com_lalrib12",
            headerName: "Completeness lalrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "type_lalrib12",
            headerName: "Fracture Type lalrib12",
            width: 170,
            filterable: false,
          },
          {
            field: "cpr_lalrib12",
            headerName: "CPR lalrib12",
            width: 170,
            filterable: false,
          },
          // {
          //   field: "delete",
          //   headerName: "Delete",
          //   width: 150,
          //   filterable: false,
          //   renderCell: () => (
          //     <strong>
          //       <Button
          //         variant="contained"
          //         color="danger"
          //         size="small"
          //         style={{ marginLeft: 19 }}
          //       >
          //         Delete
          //       </Button>
          //     </strong>
          //   ),
          // },
        ];
      } else {
        wid = 3600;

        columns = [
          { field: "case_id", headerName: "Case ID", width: 110 },
          { field: "age", headerName: "Age", width: 110, filterable: false },
          { field: "sex", headerName: "Sex", width: 110, filterable: false },
          {
            field: "weight",
            headerName: "Weight",
            width: 110,
            filterable: false,
          },
          {
            field: "height",
            headerName: "Height",
            width: 110,
            filterable: false,
          },
          {
            field: "ancestry",
            headerName: "Ancestry",
            width: 110,
            filterable: false,
          },
          { field: "mod", headerName: "MOD", width: 110, filterable: false },
          { field: "cod", headerName: "COD", width: 110, filterable: false },
          {
            field: "cod_type",
            headerName: "COD Type",
            width: 120,
            filterable: false,
          },
          {
            field: "xray",
            headerName: "XRay Taken",
            width: 110,
            filterable: false,
          },
          {
            field: "cpr",
            headerName: "CPR Given",
            width: 110,
            filterable: false,
          },
          {
            field: "belted",
            headerName: "Belted (if ap)",
            width: 110,
            filterable: false,
          },
          {
            field: "obese",
            headerName: "Obese",
            width: 110,
            filterable: false,
          },
          {
            field: "cardio",
            headerName: "Cardiology",
            width: 150,
            filterable: false,
          },
          {
            field: "patho",
            headerName: "Pathology",
            width: 150,
            filterable: false,
          },
          {
            field: "tobacco",
            headerName: "Tobacco Usage",
            width: 170,
            filterable: false,
          },
          {
            field: "marijuana",
            headerName: "Marijuana Usage",
            width: 170,
            filterable: false,
          },
          {
            field: "alcohol",
            headerName: "Alochol Usage",
            width: 170,
            filterable: false,
          },
          {
            field: "prescription",
            headerName: "Prescription",
            width: 170,
            filterable: false,
          },
          {
            field: "drug_use",
            headerName: "Drug Use",
            width: 150,
            filterable: false,
          },
          {
            field: "health_notes",
            headerName: "Health Notes",
            width: 400,
            filterable: false,
          },
          {
            field: "notes",
            headerName: "Additional Notes",
            width: 400,
            filterable: false,
          },
        ];
      }
    }

    return (
      <div>
        {!patients || patients.length <= 0 ? (
          <b>Oops, no one here yet</b>
        ) : (
          // <div></div>
          <div style={{ width: wid }}>
            Double click a patient row to edit it.
            <DataGrid
              // {...patients}
              // style={{ height: 1000, width: "100%" }}
              rows={rows2}
              columns={columns}
              components={{
                Toolbar: CustomToolbar,
                Pagination: CustomPagination,
              }}
              pageSize={10}
              autoHeight={true}
              // disableColumnFilter
              checkboxSelection
              disableColumnMenu
              disableSelectionOnClick
              onRowDoubleClick={this.doubleClick}
              // onRowSelected={this.onSelectionChange}
              onSelectionModelChange={this.onSelectionModelChange}
            />
            <Button
              style={{ marginRight: 4 }}
              onClick={() => this.toggleAll(this.state.all_data)}
            >
              Toggle Rib View
            </Button>
            <Fragment>
              <Button
                style={{ marginRight: 4 }}
                color="danger"
                onClick={() => this.toggle()}
              >
                Remove Selected
              </Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                  Delete all selected patients?
                </ModalHeader>

                <ModalFooter>
                  <Button type="button" onClick={() => this.toggle()}>
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => this.deletePatients(this.state.to_delete)}
                  >
                    Yes
                  </Button>
                </ModalFooter>
              </Modal>
            </Fragment>
          </div>
        )}
        <div>
          {/* <br /> */}
          <Modal
            isOpen={this.state.editing}
            toggle={this.toggleModal}
            // contentClassName=""
            size="lg"
          >
            <ModalHeader toggle={this.toggleModal}>Editing Patient</ModalHeader>

            <ModalBody>
              <EditPatientForm
                resetState={this.props.resetState}
                toggle={this.toggleModal}
                patient={this.state.patient}
              />
            </ModalBody>
          </Modal>

          <Modal isOpen={this.state.confirm} toggle={this.toggleConfirm}>
            <ModalHeader toggle={this.toggleConfirm}>
              Edit this patient?
            </ModalHeader>

            <ModalFooter>
              <Button type="button" onClick={() => this.confirmCancel()}>
                Cancel
              </Button>
              <Button
                type="button"
                color="primary"
                // onClick={() => this.deletePatient(this.props.pk)}
                onClick={() => this.confirmEdit()}
              >
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
          {/* <Button onClick={() => this.toggleAll(this.state.all_data)}>
            Toggle Rib View
          </Button> */}
          <br />
        </div>
      </div>
    );
  }
}

export default PatientList;
