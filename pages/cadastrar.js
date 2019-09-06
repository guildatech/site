import React, { Component, Fragment } from "react";
import Navigation from "../components/navigation";
import Main from "../components/main";

export default class Cadastrar extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main path="Cadastrar"></Main>
      </Fragment>
    );
  }
}
