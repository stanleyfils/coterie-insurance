import React, { Component } from "react";
import axios from "axios";
import FormBusinessData from "./FormBusinessData";
import FormBusinessDetails from "./FormBusinessDetails";
import ConfirmInfo from "./ConfirmInfo";
import Success from "./Success";
// import { businessDetailsActions } from "../authStore/actions/businessDetailsActions";
// import { businessDataActions } from "../authStore/actions/businessDataActions";
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
    // console.log(this.state);
  };

  submit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        this.state,
        {
          headers: {
            authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
          },
        }
      )
      .then((newBusiness) => {
        this.setState({
          ...newBusiness.data,
        });
        console.log(newBusiness.data.availablePolicyTypes);
        console.log(this.state);
      })
      .catch((err) => console.log({ err }));
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
