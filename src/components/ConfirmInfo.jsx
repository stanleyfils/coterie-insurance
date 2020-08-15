import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 15,
  },
};

export class ConfirmInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    // send form info to state here
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        businessName,
        contactEmail,
        industryId,
        locations,
        numEmployees,
        grossAnnualSales,
        annualPayroll,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Business Information" />
          <List>
            <ListItem
              primaryText="Business Name"
              secondaryText={businessName}
            />
          </List>
          <List>
            <ListItem
              primaryText="Contact Email"
              secondaryText={contactEmail}
            />
          </List>
          <List>
            <ListItem primaryText="Industry" secondaryText={industryId} />
          </List>
          <List>
            <ListItem
              primaryText="Location Zip Code"
              secondaryText={locations}
            />
          </List>
          <List>
            <ListItem
              primaryText="Total Number of Employees"
              secondaryText={numEmployees}
            />
          </List>
          <List>
            <ListItem
              primaryText="Gross Annual Sales"
              secondaryText={grossAnnualSales}
            />
          </List>
          <List>
            <ListItem
              primaryText="Annual Payroll"
              secondaryText={annualPayroll}
            />
          </List>
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ConfirmInfo;
