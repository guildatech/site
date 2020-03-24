import { Component, Fragment } from 'react';
import {
  Button,
  Input,
  Alert,
  Section,
} from '@guildatech/guildatech-components';
import Navigation from '../components/navigation';
import RegisterApi from '../services/register';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      error: null,
      success: null,
      loading: null,
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  async register(form) {
    try {
      await RegisterApi.register(form);
      this.setState({ success: true });
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }
  isInvalid() {
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({
        errors: {
          passwordConfirmation: true,
        },
      });
      return true;
    }
    return false;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isInvalid()) {
      return;
    }
    if (this.state.loading) return;
    this.setState({ loading: true, success: null, error: null, errors: {} });

    let newUser = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };

    this.register(newUser);
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <main>
          <Section>
            <h1> Cadastre sua conta </h1>
            <form className="login-formulario " onSubmit={this.handleSubmit}>
              {this.state.loading ? <Alert>Autenticando</Alert> : null}
              {this.state.success ? (
                <Alert success>Na Guilda você, aceito foi.</Alert>
              ) : null}
              {this.state.error ? (
                <Alert danger>
                  {this.state.errors.general ||
                    'Algo de errado não está certo.'}
                </Alert>
              ) : null}
              <br />
              <fieldset disabled={this.state.success}>
                <Input
                  label="Usuário"
                  type="text"
                  id="username"
                  minLength="4"
                  required={true}
                  onChange={this.handleChange}
                  invalid={this.state.errors.username}
                />
                {this.state.errors.username ? (
                  <span className="validation">Usuário já utilizado.</span>
                ) : null}
                <Input
                  label="Nome"
                  type="text"
                  required={true}
                  id="name"
                  minLength="4"
                  onChange={this.handleChange}
                  invalid={this.state.errors.name}
                />
                {this.state.errors.name ? (
                  <span className="validation">Nome inválido</span>
                ) : null}

                <Input
                  required={true}
                  label="E-mail"
                  type="email"
                  minLength="6"
                  id="email"
                  onChange={this.handleChange}
                  invalid={this.state.errors.email}
                />
                {this.state.errors.email ? (
                  <span className="validation">E-mail já utilizado</span>
                ) : null}
                <Input
                  required={true}
                  minLength="8"
                  label="Senha"
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  invalid={this.state.errors.password}
                />
                {this.state.errors.password ? (
                  <span className="validation">Essa senha não ta boa não.</span>
                ) : null}
                <Input
                  required={true}
                  minLength="8"
                  label="Confirmação de Senha"
                  type="password"
                  id="passwordConfirmation"
                  onChange={this.handleChange}
                  invalid={this.state.errors.passwordConfirmation}
                />
                {this.state.errors.passwordConfirmation ? (
                  <span className="validation">
                    Senha e confirmação devem ser idênticas
                  </span>
                ) : null}
              </fieldset>
              <Button
                type="submit"
                title="Cadastrar"
                disabled={this.state.success}
              ></Button>
            </form>
          </Section>

          <style jsx>{`
            :global(body) {
              margin: 0;
              padding: 0px;
            }
            h1 {
              color: black;
              text-align: center;
              font-size: 36px;
              font-weight: 900;
              padding: 5px 5px 15px;
              margin: 5px 5px 15px;
            }

            h1:first-letter {
              color: var(--guildatech-color-primary);
            }

            a.logo {
              margin: 15px 0px;
              padding: 0px;
              display: flex;
            }
            a.logo img {
              height: 100px;
              vertical-align: middle;
              margin: auto;
            }
            main {
              position: relative;
              width: 100%;
              height: calc(100% - 100px);
              display: flex;
              justify-content: center;
              align-items: center;
            }

            section {
              border: 1px solid var(--guildatech-color-primary);
              min-height: 450px;
              min-width: 350px;
              box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.45);
              transistion: all 300ms;
              padding: 5px 15px 10px;
              positin: relative;
            }

            form {
              position: relative;
            }

            .login-formulario,
            fieldset {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            fieldset {
              border: none;
            }
            @media (max-width: 768px) {
              main {
                height: auto;
              }
              section {
                position: relative;
                border: 0px;
                box-shadow: none;
              }
            }
            .recuperar-senha {
              font-size: 12px;
              padding: 5px;
              margin-bottom: 10px;
              align-self: normal;
              margin-left: 35px;
            }
            .recuperar-senha a {
              color: #616060;
            }

            .register {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 18px;
              text-align: center;
              padding: 10px 40px;
              font-weight: 700;
              margin: 25px 15px;
              border-bottom: 2px solid var(--guildatech-color-primary);
            }
            .register a {
              color: black;
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
        </main>
      </Fragment>
    );
  }
}
