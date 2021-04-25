import React, { Component, Fragment } from "react";
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
    			//console.log(this.state.fullDatasets[i].pk)
    		}
       }
    	console.log(localStorage.getItem("current_dataset"));
    }


  render() {
    return (
      <div>
      <Typography class = "patientpage" variant="h2">Select An Existing Dataset</Typography>
        <select
          value={this.state.selectedSet}
          onChange={e =>
            this.setState({
              selectedSet: e.target.value,
              validationError:
                e.target.value === ""
                  ? "You must select a dataset"
                  : ""
            })   
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
      <something/>
      </div>
      </div>
    );
  }
}

export default Datasets;