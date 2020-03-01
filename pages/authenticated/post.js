import { Component, Fragment } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import GTEditor from "../../components/editor";
import Alert from "../../components/alert";
import PostApi from "../../services/posts";

export default class AuthPost extends Component {
  constructor() {
    super();
    this.state = {
      adicao: false,
      error: null,
      success: null,
      loading: null,
      errors: {},
      post: {
        post_title: null,
        post_body: null
      },
      invalid: {
        post_title: false,
        post_body: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  editar = () => {
    this.setState({ adicao: true });
  };
  novo = () => {
    this.setState({ adicao: true });
  };
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
      await PostApi.save(post);
      this.setState({ success: true });
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.invalid = {
      post_title: false,
      post_body: false
    };
    console.log(this.state);
    this.state.invalid.post_title = !!!this.state.post.post_title;
    this.state.invalid.post_body = !!!this.state.post.post_body;

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
          <form className="novo-post-formulario " onSubmit={this.handleSubmit}>
            {this.state.loading ? <Alert>Salvando</Alert> : null}
            {this.state.success ? (
              <Alert success>
                Post bonito, post bem feito e salvo com sucesso.
              </Alert>
            ) : null}
            {this.state.error ? (
              <Alert danger>
                {this.state.errors.general || "Algo de errado não está certo."}
              </Alert>
            ) : null}
            <Input
              label="Titulo"
              type="text"
              required={true}
              id="post_title"
              minLength="4"
              onChange={this.handleChange}
              invalid={this.state.errors.post_title}
            />
            {this.state.errors.post_title ? (
              <span className="validation">Título inválido</span>
            ) : null}

            <GTEditor
              id="post_body"
              onChange={this.handleChange}
              invalid={this.state.invalid.post_body}
            />
            {this.state.errors.post_body ? (
              <span className="validation"></span>
            ) : null}
            <Button
              type="submit"
              title="Cadastrar"
              disabled={this.state.success}
            ></Button>
          </form>
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
