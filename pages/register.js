import React, { Component, Fragment } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Navigation from "../components/navigation";
import UserApi from "../services/user";

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  sendRegistration(form) {
    UserApi.register(form);
  }
  handleSubmit(event) {
    event.preventDefault();
    let newUser = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }


    console.log(newUser);
    this.sendRegistration(newUser)
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <main>
          <section>
            <h1> Cadastre sua conta </h1>
            <form className="login-formulario " onSubmit={this.handleSubmit}>
              <Input
                label="Usuário"
                type="text"
                id="username"
                minLength="4"
                required={true}
                onChange={this.handleChange} /> <Input
                label="Nome"
                type="text"
                required={true}
                id="name"
                minLength="4"
                onChange={this.handleChange} />
              <Input
                required={true}
                label="E-mail"
                type="email"
                minLength="6"
                id="email"
                onChange={this.handleChange} />
              <Input
                required={true}
                minLength="8"
                label="Senha"
                type="password"
                id="password"
                onChange={this.handleChange} />


              <Button type="submit" title="Cadastrar"></Button>
            </form>



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
              padding: 5px 5px 15px;
              margin: 5px 5px 15px;
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
              padding: 5px 15px 10px ;
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
            .recuperar-senha {
              font-size: 12px;
              padding: 5px;
              margin-bottom:10px;              
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
