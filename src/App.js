import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { QuoteForm } from "./components/QuoteForm";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomePage from "../src/components/HomePage";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <QuoteForm />
        <HomePage />
      </MuiThemeProvider>
    );
  }
}

export default App;
