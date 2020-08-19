import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { QuoteForm } from "./components/QuoteForm";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AppBar from "material-ui/AppBar";
import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Title = styled.h1`
  color: midnightblue;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          title={
            <img src="https://coterieinsurance.com/static/rebrand_logo_dark-0f053ad962fde9064a4ed91fbd489f48.svg" />
          }
          showMenuIconButton={false}
        />

        <div>
          <Title>
            Simplifying
            <br /> Insurance for <br /> Businesses
          </Title>
        </div>

        <div>
          <Card className="card">
            <Button variant="contained" color="primary">
              Get Your Quote Now
            </Button>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
