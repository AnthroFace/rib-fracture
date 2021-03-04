
import React , {Component} from 'react'; 
import {CSVLink} from 'react-csv';

import Box from "@material-ui/core/Box";

import axios from 'axios'
import { API_URL } from "../constants";

const tempData =[
  ['Case ID', 'Age', 'Sex', 'Weight', 'Ancestry', 
  'MOD', 'COD', 'COD Type', 'X-Ray', 'Belted', 'Obese', 
  'Cardiovascular Issues', 'Pathology', 'Tobacco', 'Marijuana', 
  'Alcohol', 'Prescription', 'Drug Use', 'Health Notes']
];

/*
const patientData =[
  ['Case ID', 'Age', 'Sex', 'Weight', 'Ancestry', 
  'MOD', 'COD', 'COD Type', 'X-Ray', 'Belted', 'Obese', 
  'Cardiovascular Issues', 'Pathology', 'Tobacco', 'Marijuana', 
  'Alcohol', 'Prescription', 'Drug Use', 'Health Notes'], 
  ['this.state.patients']
]; 
*/

const link1Style  = {
  backgroundColor: '#fff',
  fontSize: 25,
  fontWeight: 500,
  height: 52,
  padding: '0 63px',
  borderRadius: 5,
  color: '#96382f'
};

const link2Style  = {
  backgroundColor: '#fff',
  fontSize: 25,
  fontWeight: 500,
  height: 52,
  padding: '0 18px',
  borderRadius: 5,
  color: '#96382f'
};

class ExportCSV extends Component {
  state = {
      patients: [], 
  }; 

componentDidMount() {
    this.resetState();
  }

getPatients = () => {
    axios.get(API_URL).then((res) => this.setState({ patients: res.data }));
  };

resetState = () => {
    this.getPatients();
  }; 


  render() {
    return (
      
      <div className="ExportCSV" >

      <Box >
        <CSVLink data={this.state.patients} style={link1Style} filename="ExportData.csv">Export Data</CSVLink>
      </Box>
      <Box>
        <CSVLink data={tempData} style={link2Style} filename="Template.csv">Download Template</CSVLink>
      </Box>
      </div>
    )
  }
}

export default ExportCSV



      