import React, { Component } from "react";
import { connect } from "react-redux";
import { QuoteForm } from "./components/QuoteForm";

class App extends Component {
  render() {
    return (
      <div>
        <QuoteForm />
      </div>
    );
  }
}

export default connect()(App);
