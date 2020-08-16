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
  submit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        this.props.stateData,
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
    console.log(locations);
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
          <ListItem primaryText="Location Zip Code" secondaryText={locations} />
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
          label="Submit"
          primary={true}
          style={styles.button}
          onClick={this.submit}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    stateData: state.businessDetailsReducer.businessDetailsData,
  };
};

export default connect(mapStateToProps)(ConfirmInfo);
