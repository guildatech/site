import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import Auth from "../../services/auth";
import Router from "next/router";

export default class AuthHome extends Component {
  constructor() {
    super();
    if (Auth.isAuthenticated()) {
      Router.push("/authenticated/");
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}
