import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { QuoteForm } from "./components/QuoteForm";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomePage from "../src/components/HomePage";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AppBar from "material-ui/AppBar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <AppBar
          title={
            <img src="https://coterieinsurance.com/static/rebrand_logo_dark-0f053ad962fde9064a4ed91fbd489f48.svg" />
          }
          showMenuIconButton={false}
        />
        <Card className="card">
          <Button>Get your Quote</Button>
        </Card>
        <HomePage />
      </MuiThemeProvider>
    );
  }
}

export default App;
