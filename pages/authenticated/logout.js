import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import Auth from "../../services/auth";
import Router from "next/router";

export default class AuthHome extends Component {
  constructor() {
    super();
    Auth.logout();
  }
  componentDidMount() {
    Router.push("/login");
  }
  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}
