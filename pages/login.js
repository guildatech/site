import { Component, Fragment } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import Head from '../components/head';
import Nav from '../components/nav';
import Section from '../components/section';
import Alert from '../components/alert';
import Link from 'next/link';
import '../static/style.css';
import SessionApi from '../services/session';
import Auth from '../services/auth';
import Router from 'next/router';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null,
      success: null,
      loading: null,
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (Auth.isAuthenticated()) {
      Router.push('/authenticated/');
    }
  }
  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  async authenticate(form) {
    try {
      const response = await SessionApi.login(form);
      Auth.login(response.data.token);
      this.setState({ success: true });
      Router.push('/authenticated/posts');
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
    this.setState({ loading: false });
  }
  handleSubmit(event) {
    if (this.state.loading) return;
    this.setState({ loading: true, success: null, error: null, errors: {} });
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.authenticate(user);
  }

  render() {
    return (
      <Fragment>
        <Head title="GuildaTech" />
        <Nav />
        <main>
          <Section>
            <h1> Acesse sua conta</h1>
            <form className="login-formulario " onSubmit={this.handleSubmit}>
              {this.state.loading ? <Alert>Autenticando</Alert> : null}
              {this.state.success ? (
                <Alert success>Acertô miseravi</Alert>
              ) : null}
              {this.state.error ? (
                <Alert danger>
                  {this.state.errors.general ||
                    'Algo de errado não está certo.'}
                </Alert>
              ) : null}
              <br />
              <Input
                label="E-mail"
                type="email"
                id="email"
                required={true}
                invalid={this.state.errors.email ? true : false}
                onChange={this.handleChange}
              />
              {this.state.errors.email ? (
                <span className="validation">E-mail não encontrado</span>
              ) : null}
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
              <span className="forgot-password">
                <Link href="forgotPassword">
                  <a>Não lembra sua senha? </a>
                </Link>
              </span>

              <Button type="submit" title="Acessar"></Button>
            </form>

            <span className="register">
              <Link href="register">
                <a>É a sua primeira vez aqui? </a>
              </Link>
            </span>
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
              padding: 15px 5px;
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

            form {
              position: relative;
            }

            .login-formulario {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            @media (max-width: 768px) {
              main {
                height: auto;
              }
            }
            .forgot-password {
              font-size: 12px;
              padding: 5px;
              margin-bottom: 10px;
              align-self: normal;
              margin-left: 35px;
            }
            .forgot-password a {
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
