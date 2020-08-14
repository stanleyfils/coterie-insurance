import React, { Component } from "react";
import axios from "axios";

export class BusinessInfo extends Component {
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
    response: null,
  };

  submit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        this.state,
        {
          headers: {
            Authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
          },
        }
      )
      .then((newBusiness) => {
        console.log({ newBusiness });
        this.setState({
          businessName: "",
          contactEmail: "",
          grossAnnualSales: "5e4",
          annualPayroll: "5e4",
          numEmployees: null,
          industryId: "10537",
          locations: [
            {
              zip: "",
            },
          ],
          response: newBusiness.data,
        });
      })
      .catch((err) => console.log({ err }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // only one condition required because it's the only nested objet in the state
    if (name === "locations") {
      return this.setState((prevState) => ({
        ...prevState,
        locations: [{ zip: value }],
      }));
    }
    this.setState({ [name]: value });
    console.log(this.state);
  };

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
              <option value={5e4}>50k</option>
              <option value={7e4}>75k</option>
              <option value={1e5}>100k</option>
              <option value={15e4}>150k</option>
              <option value={2e5}>200k</option>
            </select>
          </label>
          <br />

          <label>
            Annual Payroll:
            <select onChange={this.handleChange} name="annualPayroll">
              <option value={5e4}>50k</option>
              <option value={7e4}>75k</option>
              <option value={1e5}>100k</option>
              <option value={15e4}>150k</option>
              <option value={2e5}>200k</option>
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
              <option value="10537">Plumber</option>
              <option value="10391">Software Developer</option>
              <option value="10415">Lawyer</option>
              <option value="10109">Handyman</option>
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

export default BusinessInfo;
