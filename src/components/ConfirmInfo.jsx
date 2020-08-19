import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import { fetchBusinessData } from "../authStore/actions/businessDataActions";

const styles = {
  button: {
    margin: 15,
  },
};

export class ConfirmInfo extends Component {
  state = {
    businessData: {},
    businessDetails: {},
    availablePolicyTypes: "",
  };

  submit = (event) => {
    event.preventDefault();
    console.log(this.props);
    axios
      .post(
        "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        this.props.businessData,
        {
          headers: {
            authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
          },
        }
      )
      .then((newBusiness) => {
        const { businessData, businessDetails } = this.state;
        if (
          businessData.numEmployees > 0 &&
          businessDetails.industryId !== 10391 &&
          businessDetails.industryId !== 10415
        ) {
          this.setState({ availablePolicyTypes: "Business Owner Policy" });
        } else if (
          businessDetails.industryId === 10391 ||
          businessDetails.industryId === 10415
        ) {
          this.setState({ availablePolicyTypes: "Professional Liability" });
        } else {
          this.setState({ availablePolicyTypes: "General Liability" });
        }
        this.setState({
          // ...newBusiness.data,
          ...this.state,
          businessData: newBusiness.data,
        });
        console.log(this.state.availablePolicyTypes);
      })
      .catch((err) => console.log({ err }));
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentWillMount() {
    console.log(this.props);
  }

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
    console.log("locations");
    console.log(this.props);
    return (
      <React.Fragment>
        <AppBar
          title="Confirm Business Information"
          showMenuIconButton={false}
        />
        <List>
          <ListItem primaryText="Business Name" secondaryText={businessName} />
        </List>
        <List>
          <ListItem primaryText="Contact Email" secondaryText={contactEmail} />
        </List>
        <List>
          <ListItem primaryText="Industry" secondaryText={industryId} />
        </List>
        <List>
          <ListItem
            primaryText="Location Zip Code"
            secondaryText={locations[0].zip}
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
            secondaryText={this.props.businessData.grossAnnualSales}
          />
        </List>
        <List>
          <ListItem
            primaryText="Annual Payroll"
            secondaryText={this.props.businessData.annualPayroll}
          />
        </List>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.back}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={this.submit}>
          Submit
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    businessData: store.businessDataReducer.businessData,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchQuote: bindActionCreators(fetchBusinessData, dispatch),
//   };
// };

export default connect(mapStateToProps)(ConfirmInfo);
