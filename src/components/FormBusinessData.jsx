import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { storeBusinessData } from "../authStore/actions/businessDataActions";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
import { ListItem } from "material-ui";

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
    { value: "7e4", profit: "$75k" },
    { value: "1e5", profit: "$100k" },
    { value: "15e4", profit: "$150k" },
    { value: "2e5", profit: "$200k" },
  ];

  payrolls = [
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
        <AppBar title="Enter Business Data" showMenuIconButton={false} />
        <TextField
          name="numEmployees"
          hintText="Enter Number of Employees"
          floatingLabelText="Total Number of Employees"
          onChange={(e) => handleChange(e)}
          defaultValue={values.numEmployees}
        />
        <br />
        <Select
          name="grossAnnualSales"
          onChange={(e) => handleChange(e)}
          defaultValue={values.grossAnnualSales}
        >
          {this.sales.map((sale, i) => (
            <MenuItem key={i} value={sale.value || ""}>
              <ListItem>{sale.profit}</ListItem>
            </MenuItem>
          ))}
        </Select>
        <br />

        <Select
          name="annualPayroll"
          onChange={(e) => handleChange(e)}
          defaultValue={values.annualPayroll}
        >
          {this.payrolls.map((payroll, i) => (
            <MenuItem key={i} value={payroll.value || ""}>
              {payroll.salaries}
            </MenuItem>
          ))}
        </Select>
        <br />
        <Button variant="contained" color="primary" onClick={this.back}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.continue}
        >
          Continue
        </Button>
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
