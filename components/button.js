import { string, func } from "prop-types";
import { Component } from "react";
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
    this.callOnClick = this.callOnClick.bind(this);
  }
  componentWillReceiveProps(updatedProps) {
    if (updatedProps.disabled != this.state.disabled) {
      this.setState({ disabled: updatedProps.disabled });
    }
  }
  callOnClick() {
    if(this.props.onClick)
    this.props.onClick(this.props.data);
  }

  render() {
    return (
      <button
        type={this.props.type}
        className="botao-primario"
        onClick={this.callOnClick}
        disabled={this.state.disabled}
        style={this.props.style}
       data={this.props.data}
      >
        {this.props.title}

        <style jsx>{`
          button {
            color: black;
            background: var(--guildatech-color-primary);
            border-radius: 80px;
            padding: 10px 20px;
            border: none;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
            border: 2px solid var(--guildatech-color-primary);
            cursor: pointer;
            transition: all 300ms ease;
          }
          button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
          }
          button:hover {
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
            border: 2px solid #d1a423;
          }
        `}</style>
      </button>
    );
  }
}