import { Component, Fragment } from "react";
import Navigation from "../components/inside/navigation";
import { isAuthenticated } from "../services/auth";
import "../static/style.css";

export default class Authenticated extends Component {
  constructor() {
    super();
    if (!isAuthenticated()) {
      this.props.history.push("/");
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
