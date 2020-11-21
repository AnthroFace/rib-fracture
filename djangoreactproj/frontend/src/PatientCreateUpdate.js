import React, { Component } from 'react';
import Select from 'react-select'
import PatientsService from './PatientsService';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './style.css';

const patientsService = new PatientsService();

const categories = [
  {value: 'HYP', label: 'hypertension'},
  {value: 'CYST', label: 'cyst'},
  {value: 'DERM', label: 'dermititis'},
  {value: 'HEP', label: 'hepatomegaly'},
  {value: 'DEM', label: 'dementia'},
  {value: 'CYS', label: 'cyst'},
  {value: 'PRO', label: 'prostate enlargement'},
  {value: 'MEDS', label: 'cholestoral meds'},
  {value: 'OBS', label: 'obsese'},
  {value: 'DRG', label: 'drug use'},
  {value: 'LIV', label: 'fatty liver'},
  {value: 'HRT', label: 'heart anomaly'},
  {value: 'HEA', label: 'healthy'},
  {value: 'SMO', label: 'smoker'},
  {value: 'SUR', label: 'past surgeries'},
  {value: 'SUB', label: 'substance abuse'}
]

const sex = [
    {value: 'F', label: 'Female'},
    {value: 'M', label: 'Male'},
]

const ancestry = [
    {value: 'WHT', label: 'White'},
    {value: 'HIS', label: 'Hispanic'},
    {value: 'BLK', label: 'Black'},
    {value: 'AMI', label: 'American Indian'},
    {value: 'ASN', label: 'Asian'},
    {value: 'PCI', label: 'Pacific Islander'},
    {value: 'FIL', label: 'Filipino'},
    {value: 'WAS', label: 'West Asian'},
    {value: 'ASI', label: 'Asian Indian'}
]

const mod = [
    {value: 'ACC', label: 'accident'},
    {value: 'SUI', label: 'suicide'},
    {value: 'HOM', label: 'homicide'},
    {value: 'UND', label: 'undeterminded'}
]

const cod = [
    {value: 'MVC', label: 'Motor Vehicle Crash'},
    {value: 'FLL', label: 'Fall'},
    {value: 'BFT', label: 'Blunt Force Trauma'}, //if blunt bft, add an option to say where, option to say multiple?
    {value: 'CRS', label: 'Crush'},
    // ('MBF', 'Multiple Blunt Force Trauma'] needed?
    {value: 'MAS', label: 'Mechanical Asphyxia'}
]

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
          <div className='form-group'>
            <div class = "row">
              <div class="flex-column">
                <label>
                  Case ID:</label>
                  <input className="form-control" type="text" ref='case_id' />

                <label>
                  Age:</label>
                  <input className="form-control" type="text" ref='age'/>

                <label>
                  Sex:</label>
                  <Select options={sex}/>

                <label>
                  Weight:</label>
                  <input className="form-control" type="text" ref='weight' />

                <label>
                  Height:</label>
                  <input className="form-control" type="text" ref='height' />
                           

              
                <label>
                    Ancestry:</label>
                    <Select options={ancestry}/>

                <label>
                  Mode of Death:</label>
                  <Select options={mod}/>

                <label>
                  Cause of Death:</label>
                  <Select options={cod}/>

                <label>
                  Cause of Death Type:</label>
                  <input className="form-control" type="text" ref='cod_type' />
              
              
              
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="xray"
                      control={<Checkbox color="default" />}
                      label="X-Ray"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                {/* CPR HERE */}

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="belted"
                      control={<Checkbox color="default" />}
                      label="Belted"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="obese"
                      control={<Checkbox color="default" />}
                      label="Obese"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="patho"
                      control={<Checkbox color="default" />}
                      label="Pathology"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="tobacco"
                      control={<Checkbox color="default" />}
                      label="Tobacco Use"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="marijuana"
                      control={<Checkbox color="default" />}
                      label="Marijuana Use"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="alcohol"
                      control={<Checkbox color="default" />}
                      label="Alcohol"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="prescription"
                      control={<Checkbox color="default" />}
                      label="Prescription"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>

                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="drug_use"
                      control={<Checkbox color="default" />}
                      label="Drug Use"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>
              

              
                <label>
                  Health Notes:</label>
                  <Select options={categories}/>
                
                <label>
                  Additional Notes:</label>
                  <input className="form-control" type="text" ref='add_notes' />
                  
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>

              </div>
          </div>
          </form>
        );
      }
}

export default PatientCreateUpdate;