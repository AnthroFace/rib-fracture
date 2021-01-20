import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ancestries = [
  { ancestry: 'Asian'},
  { ancestry: 'White' },
  { ancestry: 'Black' },
  { ancestry: 'Hispanic' },
  { ancestry: 'Filipino' },
  { ancestry: 'American Indian' },
  { ancestry: 'Pacific Islander' },
  { ancestry: 'West Asian' },
  { ancestry: 'Black Hispanic' },
  { ancestry: 'Asian Indian' },
];

const url = 

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      val: null,
    };
  }
//   load = () => {
//     this.setState({ msg: "Click on Fractured Ribs" });
//   };
  handleChange = (f,v) => {
    this.setState({
      filter: f,
      val: v,
    });
    this.props.onSelectValue(f,v);
  };

  render() {
    return (
      <table>
        <tr>
          <Autocomplete
            value={value}
            onChange={this.handleChange("ancestry",value)}
            id="combo-box-demo"
            options={ancestries}
            getOptionLabel={(option) => option.ancestry}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Ancestries" variant="outlined" />}
          />
        </tr>
      </table>
    );
  }
}

export default SearchBar;
