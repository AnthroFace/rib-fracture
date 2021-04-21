import React, { Component } from "react";

import axios from "axios";

const URL = "http://localhost:8000/api/datasets/";

class Datasets extends Component {
  state = {
    sets: [],
    selectedSet: "",
    validationError: ""
  };

  componentDidMount() {
    axios.get(
      "http://localhost:8000/api/datasets/"
    )
      .then(res => {
        console.log(res.data);

        //let datasetsFromApi = res.data.map(set_name => {
        //	return {value: set_name, display: set_name}
       // });


        this.setState({
          sets: [
            {
              value: "",
              display:
                "(Select dataset)"
            }
          ].concat(res.data)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <select
          value={this.state.selectedSets}
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
          {this.state.sets.map(dataset => (
            <option
              key={dataset.value}
              value={dataset.value}
            >
              {dataset.display}
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
      </div>
    );
  }
}

export default Datasets;