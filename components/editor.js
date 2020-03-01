
/*
https://ckeditor.com/docs/ckeditor4/latest/examples/react.html#/
*/
import { Component, Fragment } from "react";

import CKEditor from 'ckeditor4-react';

export default class GTEditor extends Component {
  constructor(props) {
    super(props);

		this.state = {
			data: '',
			invalid: false
		};

		this.handleChange = this.handleChange.bind( this );
		this.onEditorChange = this.onEditorChange.bind( this );

  }
  componentWillReceiveProps(updatedProps) {
    if (updatedProps.invalid != this.state.invalid) {
      this.setState({ invalid: updatedProps.invalid });
    }
  }

	onEditorChange(evt) {
    this.props.onChange({
      target: {
        name: this.props.id,
        value: evt.editor.getData()
      }
	})
	/*this.props.onChange({
		target: {
		  name: this.props.id,
		  value: eevt.editor.window.$.document.body.innerText
		}
	  })*/
		this.setState( {
			data: evt.editor.getData()
		} );
	}

	handleChange( changeEvent ) {
		this.setState( {
			data: changeEvent.target.value
		} );
	}

//			<SourceEditor data={this.state.data} handler={this.handleChange} />
  //  <EditorPreview data={this.state.data} />
  render() {
    return (
      <Fragment>
      <div>

				<div style={{ overflow: 'auto' }} className={this.state.invalid? 'is-invalid':''}>
            <CKEditor
            name={this.props.id}
            id={this.props.id}
						data={this.state.data}
						onChange={this.onEditorChange}
						style={{
							float: 'left',
              width: '99%',
              marginLeft: '5px',
              marginBottom:'15px'
						}}
					/>
   
				</div>
			</div>
          </Fragment>
      );
    }
}
  

class EditorPreview extends Component {
	render() {
		return (
			<div className="editor-preview">
				<h2>Rendered content</h2>
				<div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
			</div>
		);
	}
}

class SourceEditor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			focused: false
		};
	}

	render() {
		var textareaValue = {};

		if ( !this.state.focused ) {
			textareaValue = {
				value: this.props.data
			};
		}

		return (
			<>
				<p>
					<label htmlFor="editor-editor">The editor content:</label>
				</p>
				<p>
					<textarea
						id="editor-editor"
						className="binding-editor"
						{...textareaValue}
						onChange={this.props.handler}
						onFocus={ () => { this.setState( {
								focused: true
							} );
						}}
						onBlur={ () => { this.setState( {
								focused: false
							} );
						}}
					/>
				</p>
			</>
		);
	}
}
