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
          patientsService.getPatient(params.pk).then((c)=>{
            this.refs.firstName.value = c.first_name;
            this.refs.lastName.value = c.last_name;
            this.refs.email.value = c.email;
            this.refs.phone.value = c.phone;
            this.refs.address.value = c.address;
            this.refs.description.value = c.description;
          })
        }
      }

      handleCreate(){
        patientsService.createPatient(
          {
            "first_name": this.refs.firstName.value,
            "last_name": this.refs.lastName.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "address": this.refs.address.value,
            "description": this.refs.description.value
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
            "first_name": this.refs.firstName.value,
            "last_name": this.refs.lastName.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "address": this.refs.address.value,
            "description": this.refs.description.value
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
              First Name:</label>
              <input className="form-control" type="text" ref='firstName' />

            <label>
              Last Name:</label>
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