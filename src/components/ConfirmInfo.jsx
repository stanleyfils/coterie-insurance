import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import axios from "axios";

const styles = {
  button: {
    margin: 15,
  },
};

export class ConfirmInfo extends Component {
  state = {
    businessData: {},
    businessDetails: {},
  };

  submit = (event) => {
    event.preventDefault();
    console.log(this.props);
    // axios
    //   .post(
    //     "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
    //     this.props,
    //     {
    //       headers: {
    //         authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
    //       },
    //     }
    //   )
    //   .then((newBusiness) => {
    //     this.setState({
    //       ...newBusiness.data,
    //     });
    //     console.log(newBusiness.data.availablePolicyTypes);
    //     console.log(this.state);
    //   })
    //   .catch((err) => console.log({ err }));
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
        <AppBar title="Confirm Business Information" />
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
        <RaisedButton
          label="Back"
          primary={true}
          style={styles.button}
          onClick={this.back}
        />
        <RaisedButton
          label="Submit"
          primary={true}
          style={styles.button}
          onClick={this.submit}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    businessData: store.businessDataReducer.businessData,
    businessDetails: store.businessDetailsReducer.businessDetails,
  };
};

export default connect(mapStateToProps, null)(ConfirmInfo);
