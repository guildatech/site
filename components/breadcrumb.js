import React, { Component, Fragment } from "react";
import Link from "next/link";
import { string } from "prop-types";

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.path ? (
      <div>
        <small>
          Voce está em <b>{this.props.path}</b>
        </small>
        <style jsx>{`
          small: {
            color: #0b0b0b;
          }
        `}</style>
      </div>
    ) : null;
  }
}
