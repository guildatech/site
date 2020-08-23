import { Component, Fragment } from 'react';
import {
  Button,
  Input,
  GTEditor,
  Alert,
} from '@guildatech/guildatech-components';
import PostApi from '../../services/posts';

export default class AuthPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adicao: false,
      error: null,
      success: null,
      loading: null,
      errors: {},
      post: this.props.editable
        ? this.props.editable
        : {
            post_title: '',
            post_body: '',
          },
      invalid: {
        post_title: false,
        post_body: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    console.log(   this.state.post)
    if (this.props.editable && this.props.editable.id) {
      this.setState({ post: this.props.editable });
    }
  }
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.state.post[nam] = val;
    this.setState({ post: this.state.post });
  }
  hasInvalid() {
    return this.state.invalid.post_body || this.state.invalid.post_title;
  }
  async save(post) {
    try {
      if (post.id) await PostApi.update(post);
      else await PostApi.save(post);

      this.setState({ success: true });
      setTimeout(() => {
        this.props.onFinish();
      });
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }
  async delete () {
    let post = this.state.post;
    try {
     await PostApi.delete(post);

      this.setState({ success: true });
      setTimeout(() => {
        this.props.onFinish();
      });
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.invalid = {
      post_title: false,
      post_body: false,
    };
    this.state.invalid.post_title = !this.state.post.post_title;
    this.state.invalid.post_body = !this.state.post.post_body;

    this.setState({ invalid: this.state.invalid });
    if (this.hasInvalid()) {
      return;
    }
    this.save(this.state.post);
  }
  render() {
    return (
      <Fragment>
        <article>
          {this.state.post == null ? null : (
            <form
              className="novo-post-formulario "
              onSubmit={this.handleSubmit}
            >
              {this.state.loading ? <Alert>Salvando</Alert> : null}
              {this.state.success ? (
                <Alert success>
                  Post bonito, post bem feito e salvo com sucesso.
                </Alert>
              ) : null}
              {this.state.error ? (
                <Alert danger>
                  {this.state.errors.general ||
                    'Algo de errado não está certo.'}
                </Alert>
              ) : null}
              <Input
                label="Titulo"
                type="text"
                required={true}
                id="post_title"
                minLength="4"
                onChange={this.handleChange}
                value={this.state.post.post_title}
                invalid={this.state.errors.post_title}
              />
              {this.state.errors.post_title ? (
                <span className="validation">Título inválido</span>
              ) : null}

              <GTEditor
                id="post_body"
                onChange={this.handleChange}
                value={this.state.post.post_body}
                invalid={this.state.invalid.post_body}
              />
              {this.state.errors.post_body ? (
                <span className="validation"></span>
              ) : null}
              <Button
                type="submit"
                title="Salvar"
                disabled={this.state.success}
              ></Button>
              
             <Button
                type="button"
                danger
                title="Deletar"
                onClick={this.delete}
              ></Button>
            </form>
          )}
        </article>
        <style jsx>{`
          div {
            display: flex;
            width: 100%;
            flex-direction: column;
          }
          thead *,
          tbody td {
            text-align: left;
          }
          tfoot {
            text-align: center;
          }
        `}</style>
      </Fragment>
    );
  }
}
