import { Component } from 'react';
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
