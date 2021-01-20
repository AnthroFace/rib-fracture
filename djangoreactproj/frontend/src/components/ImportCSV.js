import React, { Component } from 'react'
import axios from 'axios'
//import Papa from '.\node_modules\PapaParse\papaparse';
import * as Papa from 'papaparse'; 

import { API_URL } from "../constants";

//const endpoint = 'http://localhost:8000/api/upload'
const FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i
const ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;


//fixes the rib location since they're only denoted with a 1 in the .csv
function rib_position(value, columnNumber) {
  if (columnNumber > 22 && columnNumber < 406 && columnNumber % 4 === 3 && value === "1") 
  {
    //is the rib on the left or right
    if (columnNumber < 215) 
    {
      value = "l";
    }
    else
    {
      value = "r";
    }

    //which of the 4 sections of the rib is it
    if (columnNumber % 16 === 7) 
    {
      value = value.concat(".p");
    }
    else if (columnNumber % 16 === 11) 
    {
      value = value.concat(".pl");
    }
    else if (columnNumber % 16 === 15) 
    {
      value = value.concat(".al");
    }
    else
    {
      value = value.concat(".a");
    }

    //what is the rib number?
    if ((columnNumber > 22 && columnNumber < 38) || (columnNumber > 214 && columnNumber < 230)) 
    {
      value = value.concat(".rib.1");
    }
    else if ((columnNumber > 38 && columnNumber < 54) || (columnNumber > 230 && columnNumber < 246)) 
    {
      value = value.concat(".rib.2");
    }
    else if ((columnNumber > 54 && columnNumber < 70) || (columnNumber > 246 && columnNumber < 262)) 
    {
      value = value.concat(".rib.3");
    }
    else if ((columnNumber > 70 && columnNumber) < 86 || (columnNumber > 262 && columnNumber < 278)) 
    {
      value = value.concat(".rib.4");
    }
    else if ((columnNumber > 86 && columnNumber < 102) || (columnNumber > 278 && columnNumber < 294)) 
    {
      value = value.concat(".rib.5");
    }
    else if ((columnNumber > 102 && columnNumber < 118) || (columnNumber > 294 && columnNumber < 310)) 
    {
      value = value.concat(".rib.6");
    }
    else if ((columnNumber > 118 && columnNumber < 134) || (columnNumber > 310 && columnNumber < 326)) 
    {
      value = value.concat(".rib.7");
    }
    else if ((columnNumber > 134 && columnNumber) < 150 || (columnNumber > 326 && columnNumber < 342)) 
    {
      value = value.concat(".rib.8");
    }
    else if ((columnNumber > 150 && columnNumber) < 166 || (columnNumber > 342 && columnNumber < 358)) 
    {
      value = value.concat(".rib.9");
    }
    else if ((columnNumber > 166 && columnNumber) < 182 || (columnNumber > 358 && columnNumber < 374)) 
    {
      value = value.concat(".rib.10");
    }
    else if ((columnNumber > 182 && columnNumber) < 198 || (columnNumber > 374 && columnNumber < 390)) 
    {
      value = value.concat(".rib.11");
    }
    else if ((columnNumber > 198 && columnNumber) < 214 || (columnNumber > 390 && columnNumber < 406)) 
    {
      value = value.concat(".rib.12");
    }
  }
  return value;
}


//ensures that null values are returned as empty strings
function customDynamicTyping(value, columnNumber) {
  if (value === 'true' || value === 'TRUE') {
    return true
  } else if (value === 'false' || value === 'FALSE') {
    return false
  } else if (FLOAT.test(value)) {
    return parseFloat(value)
  } else if (ISO_DATE.test(value)) {
    return new Date(value)
  } else return value === '' ? undefined : value
}


class ImportCSV extends Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null,
      errorMessage: '',
      //loaded: 0,
    }
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      errorMessage: '',
      //loaded: 0,
    })
  }
  handleUpload = () => {
    if (this.state.selectedFile == null)
    {
      alert('You must select a file to upload.'); 
      return false; 
    }
    if (!this.state.selectedFile.name.endsWith('.csv')) 
    {
      alert('You can only upload .csv flies.');
      return false;
    }

    Papa.parse(this.state.selectedFile, {
      //header: true,
      transform: rib_position, customDynamicTyping,
      //transform: customDynamicTyping,
      dynamicTyping: false,
      skipEmptyLines: true,
      step: function(row){
        //axios.post(API_URL, row.data);
        //console.log("Row:", row.data);
  
        //ignore the header row
        if (row.data[1] === "age" || row.data[1] === "Age") {}
        //take each parsed row and submit as a new patient
        else
        {
          var rib_fractures = [];
          for (var i = 23; i < 406; i += 4) 
          {
            if (row.data[i] == null) {}
            else
            {
              var fracture = { location: row.data[i], completeness: row.data[i+1], fracture_type: row.data[i+2], cpr: row.data[i+3] };
              rib_fractures.push(fracture);
              //console.log("Current rib_fractures:", rib_fractures);
            }
          }
          
          var new_entry = {
            pk: 0,
            case_id: row.data[0],
            age: row.data[1],
            sex: row.data[2],
            weight: row.data[3],
            height: row.data[4],
            ancestry: row.data[5],
            mod: row.data[6],
            cod: row.data[7],
            cod_type: row.data[8],
            xray: row.data[9],
            cpr: row.data[10],
            belted: row.data[11],
            obese: row.data[12],
            cardio: row.data[13],
            patho: row.data[14],
            tobacco: row.data[15],
            marijuana: row.data[16],
            alcohol: row.data[17],
            prescription: row.data[18],
            drug_use: row.data[19],
            health_notes: row.data[20],
            notes: row.data[407],
            rib_fracture: rib_fractures,
          };
          axios.post(API_URL, new_entry).then(res => {
            //put success message here
            console.log("this means it worked i think");
          })
          .catch(err => {
            if (err.response) {
              //error messages for if the database didnt like the data (ie data alread exists) (400 or 500 errors)
              console.log("oop error", err.response.data);
              this.setState({errorMessage: err.response.data});
            }
          })
        }

      },
      complete: function() {
       console.log("Finished parsing");
      }
    });

   /* const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post("http://localhost:8000/api/patients", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })*/
  }
  render() {
    return (
      <div className="ImportCSV">
        <input type="file" accept='.csv' name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <h1>{JSON.stringify(this.errorMessage)}</h1>
      </div>
    )
  }
}

export default ImportCSV