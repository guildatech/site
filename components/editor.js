/*
https://ckeditor.com/docs/ckeditor4/latest/examples/react.html#/
*/
import { Component, Fragment } from 'react';

import CKEditor from 'ckeditor4-react';

export default class GTEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      invalid: false,
      id:
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9),
    };

    this.handleChange = this.handleChange.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
  }
  componentWillReceiveProps(updatedProps) {
    if (updatedProps.invalid != this.state.invalid) {
      this.setState({ invalid: updatedProps.invalid });
    }
    if (updatedProps.value != this.state.value) {
      this.setState({ data: updatedProps.value });
    }
  }
  uniqueId() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
  onEditorChange(evt) {
    this.props.onChange({
      target: {
        name: this.props.id,
        value: evt.editor.getData(),
      },
    });
    /*this.props.onChange({
		target: {
		  name: this.props.id,
		  value: eevt.editor.window.$.document.body.innerText
		}
	  })*/
    this.setState({
      data: evt.editor.getData(),
    });
  }

  handleChange(changeEvent) {
    this.setState({
      data: changeEvent.target.value,
    });
  }

  //			<SourceEditor data={this.state.data} handler={this.handleChange} />
  //  <EditorPreview data={this.state.data} />
  render() {
    return (
      <Fragment>
        <div>
          <div
            style={{ overflow: 'auto' }}
            className={this.state.invalid ? 'is-invalid' : ''}
          >
            <CKEditor
              onBeforeLoad={CKEDITOR => (CKEDITOR.disableAutoInline = true)}
              name={this.state.id}
              id={this.props.id}
              data={this.state.data}
              onChange={this.onEditorChange}
              style={{
                float: 'left',
                width: '99%',
                marginLeft: '5px',
                marginBottom: '15px',
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
