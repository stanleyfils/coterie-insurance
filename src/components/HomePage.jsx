import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={require("../images/Coterie-logo.nosync.jpg")}
            alt="Coterie logo"
          />
        </div>
        <div>
          <h1>Simplyfying Insurance for Businesses</h1>
        </div>
        <Button variant="contained" color="primary">
          Get Your Quote Now
        </Button>
      </div>
    );
  }
}
