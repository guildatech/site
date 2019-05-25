import React from "react";
import Link from "next/link";
import { string } from "prop-types";

const Breadcrumb = props => (
  <div>
    <small>
      Voce está em <b>{props.path}</b>
    </small>
    <style jsx>{`
      small: {
        color: #0b0b0b;
      }
    `}</style>
  </div>
);

Breadcrumb.propTypes = {
  path: string
};
export default Breadcrumb;
