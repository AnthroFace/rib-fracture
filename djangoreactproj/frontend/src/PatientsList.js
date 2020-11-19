import  React, { Component } from  'react';
import  PatientsService  from  './PatientsService';

const  patientsService  =  new  PatientsService();

class  PatientsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        patients: [],
        nextPageURL:  ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    patientsService.getPatients().then(function (result) {
        console.log(result);
        self.setState({ patients:  result.data, nextPageURL:  result.nextlink})
    });
}
handleDelete(e,pk){
    var  self  =  this;
    patientsService.deletePatient({pk :  pk}).then(()=>{
        var  newArr  =  self.state.patients.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({patients:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    console.log(this.state.nextPageURL);
    patientsService.getPatientsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ patients:  result.data, nextPageURL:  result.nextlink})
    });
}
render() {

    return (
        <div  className="patients--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Case Number</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Weight</th>
                <th>Ancestry</th>
                <th>MOD</th>
                <th>COD</th>
                <th>XRAY</th>
                <th>Belted</th>
                <th>Obese</th>
                <th>Cardio</th>
                <th>Pathology</th>
                <th>Marijuana</th>
                <th>Alcohol</th>
                <th>Prescription</th>
                <th>Drug-Use</th>
                <th>Health-Notes</th>
                <th>Add-Notes</th>
            </tr>
            </thead>
            <tbody>
            {this.state.patients.map( p  =>
                <tr  key={p.pk}>
                <td>{p.pk}  </td>
                <td>{p.case_id}</td>
                <td>{p.age}</td>
                <td>{p.sex}</td>
                <td>{p.weight}</td>
                <td>{p.ancestry}</td>
                <td>{p.cod}</td>
                <td>{p.cod_type}</td>
                <td>{p.xray}</td>
                <td>{p.belted}</td>
                <td>{p.obese}</td>
                <td>{p.cardio}</td>
                <td>{p.patho}</td>
                <td>{p.tobacco}</td>
                <td>{p.marijuana}</td>
                <td>{p.alcohol}</td>
                <td>{p.prescription}</td>
                <td>{p.drug_use}</td>
                <td>{p.health_notes}</td>
                <td>{p.add_notes}</td>
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,p.pk) }> Delete</button>
                <a  href={"/patient/" + p.pk}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
  }
}
export  default  PatientsList;