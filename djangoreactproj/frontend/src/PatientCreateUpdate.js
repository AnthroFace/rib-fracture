import React, { Component } from 'react';
import PatientsService from './PatientsService';

const patientsService = new PatientsService();

class PatientCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          patientsService.getPatient(params.pk).then((p)=>{
            this.case_id.value = p.case_id;
            this.age.value = p.age;
            this.sex.value = p.sex;
            this.weight.value = p.weight;
            this.ancestry.value = p.ancestry;
            this.mod.value = p.mod;
            this.cod.value = p.cod;
            this.cod_type.value = p.cod_type;
            this.xray.value = p.xray;
            this.belted.value = p.belted;
            this.obese.value = p.obese;
            this.cardio.value = p.cardio;
            this.patho.value = p.patho;
            this.tobacco.value = p.tobacco;
            this.marijuana.value = p.marijuana;
            this.alcohol.value = p.alcohol;
            this.prescription.value = p.prescription;
            this.drug_use.value = p.drug_use;
            this.health_notes.value = p.health_notes;
            this.add_notes.value = p.add_notes;
          })
        }
      }

      handleCreate(){
        patientsService.createPatient(
          {
            "case_id": this.case_id.value,
            "age": this.age.value,
            "sex": this.sex.value,
            "weight": this.weight.value,
            "ancestry": this.ancestry.value,
            "mod": this.mod.value,
            "cod": this.cod.value,
            "cod_type": this.cod_type.value,
            "xray": this.xray.value,
            "belted": this.belted.value,
            "obese": this.obese.value,
            "cardio": this.cardio.value,
            "patho": this.patho.value,
            "tobacco": this.tobacco.value,
            "marijuana": this.marijuana.value,
            "alcohol": this.alcohol.value,
            "prescription": this.prescription.value,
            "drug_use": this.drug_use.value,
            "health_notes": this.health_notes.value,
            "add_notes": this.add_notes.value
        }
        ).then((result)=>{
          alert("Patient created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        patientsService.updatePatient(
          {
            "pk": pk,
            "case_id": this.case_id.value,
            "age": this.age.value,
            "sex": this.sex.value,
            "weight": this.weight.value,
            "ancestry": this.ancestry.value,
            "mod": this.mod.value,
            "cod": this.cod.value,
            "cod_type": this.cod_type.value,
            "xray": this.xray.value,
            "belted": this.belted.value,
            "obese": this.obese.value,
            "cardio": this.cardio.value,
            "patho": this.patho.value,
            "tobacco": this.tobacco.value,
            "marijuana": this.marijuana.value,
            "alcohol": this.alcohol.value,
            "prescription": this.prescription.value,
            "drug_use": this.drug_use.value,
            "health_notes": this.health_notes.value,
            "add_notes": this.add_notes.value
        }
        ).then((result)=>{
          console.log(result);
          alert("Patient updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Case ID:</label>
              <input className="form-control" type="text" ref='case_id' />

            <label>
              Age:</label>
              <input className="form-control" type="text" ref='lastName'/>

            <label>
              Phone:</label>
              <input className="form-control" type="text" ref='phone' />

            <label>
              Email:</label>
              <input className="form-control" type="text" ref='email' />

            <label>
              Address:</label>
              <input className="form-control" type="text" ref='address' />

            <label>
              Description:</label>
              <textarea className="form-control" ref='description' ></textarea>


            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
}

export default PatientCreateUpdate;