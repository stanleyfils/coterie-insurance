import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { QuoteForm } from "./components/QuoteForm";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AppBar from "material-ui/AppBar";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import "./App.css";

const Title = styled.h1`
  color: midnightblue;
  margin: 100px;
`;

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
        <img
          src="https://coterieinsurance.com/static/rebrand_logo_dark-0f053ad962fde9064a4ed91fbd489f48.svg"
          alt="logo"
        />
      </nav>
      <div className="main">
        <div>
          <Title>
            Simplifying
            <br /> Insurance for <br /> Businesses
          </Title>
        </div>

        <div className="button">
          <Button variant="contained" color="primary" className={classes.root}>
            Get Your Quote Now
          </Button>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
