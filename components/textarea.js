import { Component } from 'react';
import PropTypes from 'prop-types';
import '../static/style.css';

export default class Textarea extends Component {
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
          <textarea
            className="textarea"
            name={this.props.id}
            id={this.props.id}
            placeholder={this.props.label}
            onChange={this.props.onChange}
            required={this.props.required}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            invalid={
              this.state.invalid ? this.state.invalid.toString() : 'false'
            }
            value={this.props.value}
          />
          <label className="label" htmlFor={this.props.id}>
            {this.props.label}
          </label>
        </div>

        <style jsx>{`
          .field,
          .field.control {
            position: relative;
            display: block;
          }

          textarea {
            padding: 10px;
            margin: 15px 0px 10px;
            border: 1px solid var(--guildatech-color-primary);
            position: relative;
            display: block;
            width: 99%;
            outline-color: var(--guildatech-color-primary) !important;
          }
          textarea[invalid='true'] {
            outline-color: var(--guildatech-color-red) !important;
            border: 1px solid var(--guildatech-color-red);
          }
          textarea + label {
            position: absolute;
            pointer-events: none;
            left: 15px;
            margin-top: -40px;
            z-index: 8;
            transition: all 300ms;
          }
          textarea::placeholder {
            color: white !important;
          }
          textarea:focus::placeholder {
            color: var(--guildatech-color-primary) !important;
          }

          textarea:focus + label,
          textarea:not(:placeholder-shown) + label {
            font-size: 12px;
            margin-top: -70px;
            background: white;
            padding: 0px 5px;
          }
        `}</style>
      </div>
    );
  }
}
Textarea.propTypes = {
  invalid: PropTypes.bool,
  required: PropTypes.bool,
};
