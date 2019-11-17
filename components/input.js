import { Component } from "react";
import PropTypes from "prop-types";
import "../static/style.css";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { invalid: false };
  }

  componentWillReceiveProps(updatedProps) {
    if (updatedProps.invalid != this.state.invalid) {
      this.setState({ invalid: updatedProps.invalid });
    }
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
            invalid={
              this.state.invalid ? this.state.invalid.toString() : "false"
            }
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
          input[invalid="true"] {
            outline-color: var(--color-red) !important;
            border: 1px solid var(--color-red);
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
Input.propTypes = {
  invalid: PropTypes.bool,
  required: PropTypes.bool
};
