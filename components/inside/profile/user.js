import { Component, Fragment } from "react";
import Button from "../../button";
import Input from "../../input";
import Section from "../../section";
import Alert from "../../alert";
import { login } from "../../../services/auth";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.model || {},
      error: null,
      success: null,
      loading: null,
      errors: {}
    };
    console.log(this.props.user)
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
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

  async authenticate(form) {
    try {
      this.setState({ success: true });
      setTimeout(() => {
        Router.push("/authenticated/");
      }, 500);
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }
  updateUser(event) {
    if (this.state.loading) return;
    this.setState({ loading: true, success: null, error: null, errors: {} });
    event.preventDefault();

  }

  render() {
    return (
      <Fragment>
        <form className="update-user-formulario " onSubmit={this.updateUser}>
          {this.state.loading ? <Alert>Autenticando</Alert> : null}
          {this.state.success ? <Alert success>Acertô miseravi</Alert> : null}
          {this.state.error ? (
            <Alert danger>
              {this.state.errors.general || "Algo de errado não está certo."}
            </Alert>
          ) : null}
          <div style={{ width: "250px" }}>
            <Input
              label="Nome"
              type="text"
              id="nome"
              required={true}
              value={this.state.user.nome}
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
              invalid={this.state.errors.username ? true : false}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ width: "150px" }}>
            <Input
              label="Senha"
              required={true}
              type="password"
              id="password"
              invalid={this.state.errors.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password ? (
              <span className="validation">Senha inválida</span>
            ) : null}
          </div>

          <div style={{ width: "250px" }}>
            <Input
              label="E-mail"
              type="email"
              id="email"
              required={true}
              invalid={this.state.errors.email ? true : false}
              onChange={this.handleChange}
            />
            {this.state.errors.email ? (
              <span className="validation">E-mail inválido</span>
            ) : null}
          </div>
          <br/>

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
          .update-user-formulario  > * {
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
