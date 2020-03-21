import { Component, Fragment } from "react";
import Button from "../../button";
import Input from "../../input";
import Textarea from "../../textarea";
import Alert from "../../alert";
import UserApi from "../../../services/user";

export default class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.model || {},
      error: null,
      success: null,
      loading: null,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
    let user = this.state.user;
  }
  componentWillReceiveProps(updatedProps) {
    if (updatedProps.model != this.state.model) {
      this.setState({ user: updatedProps.model });
    }
  }
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  async save(user) {
    try {
      await UserApi.update(user);
      this.setState({ success: true });
      setTimeout(() => {
        this.props.onFinish();
      });
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }
  updateUser(event) {
    event.preventDefault();
    if (this.state.loading) return;
    this.setState({ loading: true, success: null, error: null, errors: {} });
    this.save(this.state.user);
  }

  render() {
    return (
      <Fragment>
        <form className="update-user-formulario " onSubmit={this.updateUser}>
          {this.state.loading ? <Alert>Atualizando</Alert> : null}
          {this.state.success ? <Alert success>Atualizado!</Alert> : null}
          {this.state.error ? (
            <Alert danger>
              {this.state.errors.general || "Algo de errado não está certo."}
            </Alert>
          ) : null}
          <div style={{ width: "250px" }}>
            <Input
              label="Nome"
              type="text"
              id="name"
              required={true}
              value={this.state.user.name}
              invalid={this.state.errors.nome ? true : false}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ width: "150px" }}>
            <Input
              label="Username"
              type="text"
              id="username"
              required={true}
              value={this.state.user.username}
              invalid={this.state.errors.username ? true : false}
              onChange={this.handleChange}
            />
          </div>

          <div style={{ width: "250px" }}>
            <Input
              label="E-mail"
              type="email"
              id="email"
              required={true}
              value={this.state.user.email}
              invalid={this.state.errors.email ? true : false}
              onChange={this.handleChange}
            />
            {this.state.errors.email ? (
              <span className="validation">E-mail inválido</span>
            ) : null}
          </div>
          <div style={{ width: "250px" }}>
            <Input
              label="Home Page"
              type="url"
              id="homePage"
              required={true}
              value={this.state.user.homePage}
              invalid={this.state.errors.homePage ? true : false}
              onChange={this.handleChange}
            />
            {this.state.errors.homePage ? (
              <span className="validation">Home Page inválida</span>
            ) : null}
          </div>
          <br />
          <div style={{ width: "100%" }}>
            <Textarea
              label="Bio"
              id="bio"
              required={true}
              invalid={this.state.errors.bio ? true : false}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <Button type="submit" title="Atualizar"></Button>
        </form>

        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0px;
          }
          form {
            position: relative;
          }
          .update-user-formulario {
          }
          .update-user-formulario > * {
            margin: 2px 5px;
            display: inline-block;
          }
          .validation {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100%;
            padding: 0px 50px;
            font-weight: 700;
            font-size: 14px;
            color: var(--guildatech-color-red);
          }
        `}</style>
      </Fragment>
    );
  }
}
