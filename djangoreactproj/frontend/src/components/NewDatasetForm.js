import React, { Fragment } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./../text.css";
import axios from "axios";

//import { API_URL } from "../constants";
const URL = "http://localhost:8000/api/datasets/";

class NewDatasetForm extends React.Component {
  state = {
    pk: 0,
    set_name: "",
    //user: ,
  };

  componentDidMount() {
    if (this.props.dataset) {
      const {
        pk,
        set_name,
        user,
      } = this.props.dataset;
      this.setState({
        pk,
        set_name,
        user,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  createDataset = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // console.log(this.state.case_id);
    var data_form = {
      pk: this.state.pk,
      set_name: this.state.set_name,
      user: this.state.user,
    };


    axios.post(URL, data_form, {
        headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    }).then(() => {
      this.setState({
        pk: 0,
        set_name: "",
        //user: ,
      });
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={this.createDataset}
      >
        <div class = "form1">
        <FormGroup >
          <Label for="set_name">Dataset Name:</Label>
          <Input
            type="text"
            name="set_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.set_name)}
          />
        </FormGroup>
        </div>
        <div class = "send">
        <Button>Send</Button>
        </div>
      </Form>
    );
  }
}

export default NewDatasetForm;
