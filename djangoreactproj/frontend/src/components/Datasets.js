import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import NewDatasetForm from "./NewDatasetForm";
import { Typography } from "@material-ui/core";
import "./../text.css";
import axios from "axios";

const URL = "http://localhost:8000/api/datasets/";

class Datasets extends Component {
  state = {
    sets: [],
    selectedSet: "",
    validationError: "",
    fullDatasets: [],
    myDatasets: []
  };

  onSelect = e => {
    this.setState({
              selectedSet: e.target.value,
              validationError:
                e.target.value === ""
                  ? "You must select a dataset"
                  : ""
            });
            window.location.reload();
  }

  componentDidMount() {
    axios.get(URL, {
    	headers: {
    		Authorization: `JWT ${localStorage.getItem('token')}`
    	}
    })

      .then(res => {
        console.log(res.data.datasets);


       for (var i = 0; i < res.data.datasets.length; i++) {
       	this.state.myDatasets.push(res.data.datasets[i].set_name);
       	this.state.fullDatasets.push(res.data.datasets[i]);
       }

       let datasetsFromApi = this.state.myDatasets.map(set_name => {
        	return {value: set_name, display: set_name}
        });

        this.setState({
          sets: [
            {
              value: "",
              display:
                "(Select dataset)"
            }
          ].concat(datasetsFromApi)
        });
      })
      .catch(error => {
        console.log(error);
      });
      
    }

    componentDidUpdate() {
    	for (var i = 0; i < this.state.fullDatasets.length; i++) {
    		if (this.state.selectedSet === this.state.fullDatasets[i].set_name) {
    			localStorage.setItem("current_dataset", this.state.fullDatasets[i].pk)
    			localStorage.setItem("current_dataset_name", this.state.selectedSet)
    			//console.log(this.state.fullDatasets[i].pk)
    		}
       }
    	console.log(localStorage.getItem("current_dataset_name"));
    	//window.location.reload();
    	//console.log("update!")
    }

    deleteDataset() {
    	/*for (var i = 0; i < this.state.fullDatasets.length; i++) {
    		if (this.state.selectedSet === this.state.fullDatasets[i].set_name) {
    			var dataset_to_delete = this.state.fullDatasets[i]
    			axios.delete(URL + localStorage.getItem("current_dataset"), {
        			headers: {
        				Authorization: `JWT ${localStorage.getItem('token')}`
      				},
      				//data: dataset_to_delete //localStorage.getItem("current_dataset")    				
  				});
  				console.log("actually tried to delete this " + JSON.stringify(this.state.fullDatasets[i]))
    		}
    	}*/
    	axios.delete(URL + localStorage.getItem("current_dataset"), {
        			headers: {
        				Authorization: `JWT ${localStorage.getItem('token')}`
      				}   				
  				}).finally(() => {
  					this.toggle();
  					localStorage.removeItem("current_dataset");
    				window.location.reload();
  				});
    	//this.sleep(3000);
    	//this.toggle();
    	//this.setState({ to_delete: [] });
    	//this.props.resetState();
    	//localStorage.removeItem("current_dataset");
    	//window.location.reload();
  };

  toggle() {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };


  render() {
    return (
      <div style ={{padding: "10px 0px 0px 50px"}}>
      <Typography class = "patientpage" variant="h2">Select An Existing Dataset</Typography>
        <select
          value={this.state.selectedSet}
          onChange={
            this.onSelect   
          }
        >

          {this.state.sets.map(set_name => (
            <option
              key={set_name.value}
              value={set_name.value}
            >
              {set_name.display}
            </option>
          ))}
        </select>
        <div
          style={{
            color: "red",
            marginTop: "5px"
          }}
        >
          {this.state.validationError}
        </div>
        <div>
        <Typography class = "patientpage" variant="h2">Create A New Dataset</Typography>
        <NewDatasetForm resetState={this.resetState} toggle={this.toggle} />
      </div>
      <div>
      <Typography class = "patientpage" variant="h2">Delete Selected Dataset</Typography>
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
                  Delete selected dataset? This cannot be undone.
                </ModalHeader>

                <ModalFooter>
                  <Button type="button" onClick={() => this.toggle()}>
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => this.deleteDataset()}
                  >
                  Confirm
                  </Button>
                  </ModalFooter>
                  </Modal>
                  </Fragment>
      </div>
      </div>
    );
  }
}

export default Datasets;