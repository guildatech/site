import React, { Component, Fragment } from "react";
import Navigation from "../components/navigation";
import Main from "../components/main";

export default class Jobs extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main path="Jobs"></Main>
      </Fragment>
    );
  }
}
