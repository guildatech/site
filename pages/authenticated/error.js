import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import Auth from "../../services/auth";

export default class AuthHome extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}
