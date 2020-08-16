import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const policyTypes = [
  "General Liability",
  "Professional Liability",
  "Business Owners Policy",
];

export class Success extends Component {
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
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Congratulations!" />
          <h1>You have successfully completed your application!</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
