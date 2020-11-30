import React, { Component } from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/upload'

class ImportCSV extends Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null,
      loaded: 0,
    }
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  handleUpload = () => {
    if (!this.state.selectedFile.name.endsWith('.csv')) 
    {
      alert('You can only upload .csv flies.');
      return false;
    }

    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })
  }
  render() {
    return (
      <div className="ImportCSV">
        <input type="file" accept='.csv' name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
    )
  }
}

export default ImportCSV