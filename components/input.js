import { Component } from "react";
import "../static/style.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <input
            className="input"
            type={this.props.type}
            name={this.props.id}
            id={this.props.id}
            placeholder={this.props.label}
            onChange={this.props.onChange}
            required={this.props.required}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
          />
          <label className="label" htmlFor={this.props.id}>
            {" "}
            {this.props.label}
          </label>
        </div>

        <style jsx>{`
          .field,
          .field.control {
            position: relative;
            display: block;
          }

          input {
            padding: 10px;
            margin: 15px 5px 10px;
            border: 1px solid var(--color-primary);
            position: relative;
            display: block;
            width: 250px;
            outline-color: var(--color-primary) !important;
          }
          input + label {
            position: absolute;
            pointer-events: none;
            left: 15px;
            margin-top: -40px;
            z-index: 8;
            transition: all 300ms;
          }
          input::placeholder {
            color: white !important;
          }
          input:focus::placeholder {
            color: var(--color-primary) !important;
          }

          input:focus + label,
          input:not(:placeholder-shown) + label {
            font-size: 12px;
            margin-top: -55px;
            background: white;
            padding: 0px 5px;
          }
        `}</style>
      </div>
    );
  }
}
