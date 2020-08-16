import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import { connect } from "react-redux";
import { storeBusinessData } from "../authStore/actions/businessDataActions";
import { bindActionCreators } from "redux";

export class FormBusinessData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.storeBusinessData(this.props.values);
    this.props.nextStep();
    console.log(this.props);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  sales = [
    { value: "5e4", profit: "$50k" },
    { value: "5e4", profit: "$75k" },
    { value: "5e4", profit: "$100k" },
    { value: "5e4", profit: "$150k" },
    { value: "5e4", profit: "$200k" },
  ];

  payroll = [
    { value: "5e4", salaries: "$50k" },
    { value: "7e4", salaries: "$75k" },
    { value: "1e5", salaries: "$100k" },
    { value: "15e4", salaries: "$150k" },
    { value: "2e5", salaries: "$200k" },
  ];

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <AppBar title="Enter Business Data" />
        <TextField
          name="numEmployees"
          hintText="Enter Number of Employees"
          floatingLabelText="Total Number of Employees"
          onChange={(e) => handleChange(e)}
          defaultValue={values.numEmployees}
        />
        <br />

        <SelectField
          name="grossAnnualSales"
          hintText="Enter Annual Gross Sales"
          floatingLabelText="AnnualGross Sales"
          onChange={(e) => handleChange(e)}
          defaultValue={values.grossAnnualSales}
          // {this.sales.map(({ value, profit }, i) => (
          //   // key={`${value}-${i} is required for arrays. (find the correct index)
          //   <option value={value} key={`${value}-${i}`}>
          //     {profit}
          //   </option>
          // ))}
        />
        <br />

        <SelectField
          name="annualPayroll"
          hintText="Enter Annual Payroll"
          floatingLabelText="Total Annual Payroll"
          onChange={(e) => handleChange(e)}
          defaultValue={values.annualPayroll}
          // {this.payroll.map(({ value, salaries }, i) => (
          //     <option value={value} key={`${value}-${i}`}>
          //       {salaries}
          //     </option>
          //   ))}
        />
        <br />
        <RaisedButton
          label="Back"
          primary={true}
          style={styles.button}
          onClick={this.back}
        />
        <RaisedButton
          label="Continue"
          primary={false}
          style={styles.button}
          onClick={this.continue}
        />
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeBusinessData: bindActionCreators(storeBusinessData, dispatch),
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(FormBusinessData);
