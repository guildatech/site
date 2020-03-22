import { Component, Fragment } from "react";
import Navigation from "../components/navigation";
import Main from "../components/main";

export default class RecuperarSenha extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main path="RecuperarSenha"></Main>
      </Fragment>
    );
  }
}
