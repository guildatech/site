import { Component, Fragment } from "react";
import Navigation from "../components/navigation";
import Main from "../components/main";

export default class Eventos extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main path="Eventos"></Main>
      </Fragment>
    );
  }
}
