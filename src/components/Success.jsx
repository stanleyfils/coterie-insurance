import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const policyTypes = [
  "General Liability",
  "Professional Liability",
  "Business Owners Policy",
];

export class Success extends Component {
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
          <h2>`You qualify for ${policyTypes}`</h2>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
