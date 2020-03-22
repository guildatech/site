import { Component } from 'react';

export default class RenderHTML extends Component {
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
      </div>
    );
  }
}
