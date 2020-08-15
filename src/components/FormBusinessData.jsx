import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";

export class FormBusinessData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Business Data" />
          <TextField
            hintText="Enter Number of Employees"
            floatingLabelText="Total Number of Employees"
            onChange={handleChange("numEmployees")}
            defaultValue={values.numEmployees}
          />
          <br />

          <SelectField
            hintText="Enter Annual Gross Sales"
            floatingLabelText="AnnualGross Sales"
            onChange={handleChange("grossAnnualSales")}
            defaultValue={values.grossAnnualSales}
          />
          <br />

          <SelectField
            hintText="Enter Annual Payroll"
            floatingLabelText="Total Annual Payroll"
            onChange={handleChange("annualPayroll")}
            defaultValue={values.annualPayroll}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Submit"
            primary={false}
            style={styles.button}
            onClick={this.submit}
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

export default FormBusinessData;
