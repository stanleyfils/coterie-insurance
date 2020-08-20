import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QuoteForm } from "./components/QuoteForm";
import FloatingSection from "./components/FloatingSection";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AppBar from "material-ui/AppBar";
import styled from "styled-components";
// import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import "./App.css";
import { FormBusinessDetails } from "./components/FormBusinessDetails";
import HomePage from "./components/HomePage";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#b2ff59",
    color: "midnightblue",
    borderRadius: "30px",
    "&:hover": {
      color: "white",
    },
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider>
      <nav>
        <Link to="/">
          <img
            src="https://coterieinsurance.com/static/rebrand_logo_dark-0f053ad962fde9064a4ed91fbd489f48.svg"
            alt="logo"
          />
        </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quoteform" component={FloatingSection} />
      </Switch>
    </MuiThemeProvider>
  );
};
export default App;
