import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import QuoteForm from "./QuoteForm";
import "../App.css";
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
const FloatingSection = () => {
  const classes = useStyles();
  return (
    <div className="floating-main">
      <div>
        <Title>
          Simplifying
          <br /> Insurance for <br /> Businesses
        </Title>
      </div>
      <div className="floating-section">
        <QuoteForm />
      </div>
    </div>
  );
};
export default FloatingSection;
