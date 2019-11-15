import React, { Component, Fragment } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Head from "../components/head";
import Nav from "../components/nav";
import Link from "next/link";
import "../static/style.css";
import SessionApi from "../services/session";
import { login } from "../services/auth";

export default class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  login(form) {
    SessionApi.login(form);
  }
  handleSubmit(event) {
    event.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }

    this.login(user)
  }

  render() {
    return (
      <Fragment>
        <Head title="GuildaTech" />
        <Nav />
        <main>
          <section>
            <h1> Acesse sua conta</h1>
            <form className="login-formulario " onSubmit={this.handleSubmit}>
              <Input
                label="E-mail"
                type="email"
                id="email"
                onChange={this.handleChange} />
              <Input
                label="Senha"
                type="password"
                id="password"
                onChange={this.handleChange} />
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
          </section>

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
              color: var(--cor-primaria);
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
              border: 1px solid var(--cor-primaria);
              min-height: 450px;
              min-width: 350px;
              box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.45);
              transistion: all 300ms;
              padding: 10px 15px;
              positin: relative;
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
              section {
                position: relative;
                border: 0px;
                box-shadow: none;
              }
            }
            .forgot-password {
              font-size: 12px;
              padding: 5px;
              margin-bottom:10px;              
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
              font-size:18px; 
              text-align:center;
              padding: 10px 40px ;
              font-weight: 700;
              margin: 25px 15px;
              border-bottom: 2px solid var(--cor-primaria);
             
            }
            .register a {
               color: black;
            }
          `}</style>
        </main>
      </Fragment>
    );
  }
}
