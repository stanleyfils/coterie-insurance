import React, { Component } from "react";
import FormBusinessData from "./FormBusinessData";
import FormBusinessDetails from "./FormBusinessDetails";
import ConfirmInfo from "./ConfirmInfo";
import Success from "./Success";
import { connect } from "react-redux";

// Validate email if you're feeling fancy fancy
// function validateEmail(contactEmail) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(contactEmail);
// }

export class QuoteForm extends Component {
  state = {
    step: 1,
    businessName: "",
    contactEmail: "",
    grossAnnualSales: "",
    annualPayroll: "",
    numEmployees: "",
    industryId: "",
    locations: [
      {
        zip: "",
      },
    ],
  };

  //   Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //   Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle changed fields
  handleChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({ ...prev, [name]: value }));
  };

  handleLocationChange = (event) => {
    const { name, value } = event.target;
    // only one condition required because it's the only nested object in the state
    if (name === "locations") {
      return this.setState((prevState) => ({
        ...prevState,
        locations: [{ zip: value }],
      }));
    }
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;
    const {
      businessName,
      contactEmail,
      grossAnnualSales,
      annualPayroll,
      numEmployees,
      industryId,
      locations,
    } = this.state;

    const values = {
      businessName,
      contactEmail,
      grossAnnualSales,
      annualPayroll,
      numEmployees,
      industryId,
      locations,
    };

    switch (step) {
      case 1:
        return (
          <FormBusinessDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleLocationChange={this.handleLocationChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormBusinessData
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  }
}

export default connect()(QuoteForm);
