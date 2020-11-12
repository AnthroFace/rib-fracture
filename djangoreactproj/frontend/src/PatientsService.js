import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class PatientssService{

    constructor(){}


    getPatients() {
        const url = `${API_URL}/api/patients/`;
        return axios.get(url).then(response => response.data);
    }
    getPatientsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getPatient(pk) {
        const url = `${API_URL}/api/patients/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deletePatient(patient){
        const url = `${API_URL}/api/patients/${patients.pk}`;
        return axios.delete(url);
    }
    createPatient(patient){
        const url = `${API_URL}/api/patients/`;
        return axios.post(url,patients);
    }
    updatePatient(patient){
        const url = `${API_URL}/api/patients/${patient.pk}`;
        return axios.put(url,patient);
    }
}