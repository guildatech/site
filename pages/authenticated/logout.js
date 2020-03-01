import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import { logout } from "../../services/auth";
import Router from "next/router";

export default class AuthHome extends Component {
  constructor() {
    super();
    logout();

    Router.push("/login")
  }

  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}
