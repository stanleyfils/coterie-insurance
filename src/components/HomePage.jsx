import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { white } from "material-ui/styles/colors";

const Title = styled.h1`
  color: midnightblue;
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <Title>Simplifying Insurance for Businesses</Title>
        </div>
        <Button variant="contained" color="primary">
          Get Your Quote Now
        </Button>
      </div>
    );
  }
}
