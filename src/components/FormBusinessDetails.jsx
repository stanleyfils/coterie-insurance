import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";

export class FormBusinessDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleLocationChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Business Details" />
          <TextField
            hintText="Enter Business Name"
            floatingLabelText="ABC Company"
            onChange={handleChange("businessName")}
            defaultValue={values.businessName}
          />
          <br />
          <TextField
            hintText="Enter Contact Email"
            floatingLabelText="Email"
            onChange={handleChange("contactEmail")}
            defaultValue={values.contactEmail}
          />
          <br />
          <SelectField
            hintText="Enter Industry Type"
            floatingLabelText="Industry Type"
            onChange={handleChange("industryId")}
            defaultValue={values.industryId}
          />
          <br />
          <TextField
            hintText="Enter Zip Code"
            floatingLabelText="Zip Code"
            onChange={handleLocationChange("locations")}
            defaultValue={values.locations}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormBusinessDetails;
