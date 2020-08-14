import React, { Component } from "react";
import axios from "axios";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import SelectField from "material-ui/SelectField";

// const policyTypes = [
//   "General Liability",
//   "Professional Liability",
//   "Business Owners Policy",
// ];

// Validate email if you're feeling fancy fancy
// function validateEmail(contactEmail) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(contactEmail);
// }

export class QuoteForm extends Component {
  state = {
    businessName: "",
    contactEmail: "",
    grossAnnualSales: "5e4",
    annualPayroll: "5e4",
    numEmployees: "",
    industryId: "10537",
    locations: [
      {
        zip: "",
      },
    ],
    // response: null,
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

  handleChange = (event) => {
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

  jobs = [
    { value: "10537", career: "Plumber" },
    { value: "10391", career: "Software Developer" },
    { value: "10415", career: "Lawyer" },
    { value: "10109", career: "Handyman" },
  ];

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>
            Business Name:
            <input
              type="text"
              name="businessName"
              value={this.state.businessName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Contact Email:
            <input
              type="text"
              name="contactEmail"
              value={this.state.contactEmail}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Annual Sales:
            <select onChange={this.handleChange} name="grossAnnualSales">
              {this.sales.map(({ value, profit }, i) => (
                // key={`${value}-${i} is required for arrays. (find the correct index)
                <option value={value} key={`${value}-${i}`}>
                  {profit}
                </option>
              ))}
            </select>
          </label>
          <br />

          <label>
            Annual Payroll:
            <select onChange={this.handleChange} name="annualPayroll">
              {this.payroll.map(({ value, salaries }, i) => (
                <option value={value} key={`${value}-${i}`}>
                  {salaries}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Number of Employees:
            <input
              type="text"
              name="numEmployees"
              defaultValue={this.state.numEmployees}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Industry:
            <select onChange={this.handleChange} name="industryId">
              {this.jobs.map(({ value, career }, i) => (
                <option value={value} key={`${value}-${i}`}>
                  {career}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Zip Code:
            <input
              type="text"
              name="locations"
              value={this.state.locations[0].zip}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default QuoteForm;
