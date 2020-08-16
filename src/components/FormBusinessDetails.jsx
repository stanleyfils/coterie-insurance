import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { storeBusinessDetails } from "../authStore/actions/businessDetailsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = {
  button: {
    margin: 15,
  },
};

export class FormBusinessDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.storeBusinessDetails(this.props.values);
    this.props.nextStep();
    console.log(this.props);
  };

  jobs = [
    { value: "10537", career: "Plumber" },
    { value: "10391", career: "Software Developer" },
    { value: "10415", career: "Lawyer" },
    { value: "10109", career: "Handyman" },
  ];

  render() {
    const { values, handleChange, handleLocationChange } = this.props;
    return (
      <React.Fragment>
        <AppBar title="Enter Business Details" />
        <TextField
          name="businessName"
          hintText="Enter Business Name"
          floatingLabelText="ABC Company"
          onChange={(e) => handleChange(e)}
          defaultValue={values.businessName}
        />
        <br />
        <TextField
          name="contactEmail"
          hintText="Enter Contact Email"
          floatingLabelText="Email"
          onChange={(e) => handleChange(e)}
          defaultValue={values.contactEmail}
        />
        <br />
        <Select
          name="industryId"
          onChange={(e) => handleChange(e)}
          defaultValue={values.industryId}
        >
          {this.jobs.map((job, i) => (
            <MenuItem key={i} value={job.career || ""}>
              {job.career}
            </MenuItem>
          ))}
        </Select>
        <br />
        <TextField
          name="locations"
          hintText="Enter Zip Code"
          floatingLabelText="Zip Code"
          onChange={(e) => handleLocationChange(e)}
          defaultValue={values.locations[0].zip}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeBusinessDetails: bindActionCreators(storeBusinessDetails, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(FormBusinessDetails);
