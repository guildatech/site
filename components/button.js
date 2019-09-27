import React from "react";
import Link from "next/link";
import { string, func } from "prop-types";

const Button = props => (
  <button type={props.type} className="botao-primario" onClick={props.onClick}>
    {props.title}

    <style jsx>{`
      button {
        color: black;
        background: #e9b625;
        border-radius: 80px;
        padding: 10px 20px;
        border: none;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
        border: 2px solid #e9b625;
        cursor: pointer;
        transition: all 300ms ease;
      }
      button:hover {
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
        border: 2px solid #d1a423;
      }
    `}</style>
  </button>
);
Button.propTypes = {
  title: string,
  onClick: func,
  type: string
};
export default Button;
