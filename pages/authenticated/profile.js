import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import Main from "../../components/inside/main";
import Auth from "../../services/auth";
import "../../static/style.css";
import SessionApi from "../../services/session";
import User from "../../components/inside/profile/user";
import Router from "next/router";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: "#about",
      user: null
    };
    this.showStep = this.showStep.bind(this);
  }
  componentDidMount() {
    if (Auth.isAuthenticated()) {
      this.getUser();
    } else {
      Router.push("/");
    }
  }
  getUser() {
    SessionApi.get().then(res => {
      this.setState({ user: res.data });
    });
  }
  showStep($event) {
    this.setState({ currentStep: $event.currentTarget.dataset.target });
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Main>
          {this.state.user == null ? null : (
            <div className="wizard">
              <ol>
                <li
                  data-target="#about"
                  onClick={this.showStep}
                  className={this.state.currentStep == "#about" ? "active" : ""}
                >
                  <span>Sobre Mim</span>
                </li>
                <li
                  data-target="#socialMedial"
                  onClick={this.showStep}
                  className={
                    this.state.currentStep == "#socialMedial" ? "active" : ""
                  }
                >
                  <span>Midias Sociais</span>
                </li>
                <li
                  data-target="#privacy"
                  onClick={this.showStep}
                  className={
                    this.state.currentStep == "#privacy" ? "active" : ""
                  }
                >
                  <span>Privacidade e Segurança</span>
                </li>
              </ol>
              <ul>
                <li
                  className={this.state.currentStep == "#about" ? "show" : ""}
                >
                  <User model={this.state.user}></User>
                </li>
                <li
                  className={
                    this.state.currentStep == "#socialMedial" ? "show" : ""
                  }
                >
                  Em desenvolvimento
                </li>
                <li
                  className={this.state.currentStep == "#privacy" ? "show" : ""}
                >
                  Em desenvolvimento
                </li>
              </ul>
            </div>
          )}
        </Main>

        <style jsx>{`
          ul {
            padding-left: 0px;
          }
          li {
            transition: all 300ms ease;
            pointer-events: auto;
            cursor: pointer;
            margin: 5px;
            display: flex;
            padding: 6px 8px;
            flex-grow: 1;
          }
          li span {
            transition: all 300ms ease;
          }
          ol {
            display: flex;
            justify-content: space-between;
          }

          ul li {
            display: none;
          }
          ul li.show {
            display: block;
          }
          .wizard {
            width: 100%;
          }
          li.active {
            border-bottom: 2px solid var(--guildatech-color-primary);
          }
          li.active span:first-letter {
            color: var(--guildatech-color-primary);
          }
        `}</style>
      </Fragment>
    );
  }
}
