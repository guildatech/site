import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import Main from "../../components/inside/main";
import { isAuthenticated } from "../../services/auth";
import "../../static/style.css";
import SessionApi from "../../services/session";
import User from "../../components/inside/profile/user";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: "#about"
    };
    if (!isAuthenticated()) {
      this.props.history.push("/");
    }
    this.showStep = this.showStep.bind(this);
  }
  componentDidMount() {
    if (isAuthenticated()) {
      this.getUser();
    }
  }
  getUser() {
    SessionApi.get().then(res => {
      this.setState({ user: res.data });
    });
  }
  showStep($event) {
    console.log($event.currentTarget.dataset.target);
    this.setState({ currentStep: $event.currentTarget.dataset.target });
  }

  render() {
    return (
      <Fragment>
        <Navigation />

        <Main>
          <div className="wizard">
            <ol>
              <li data-target="#about" onClick={this.showStep}>
                Sobre Mim
              </li>
              <li data-target="#socialMedial" onClick={this.showStep}>
                Midias Sociais
              </li>
              <li data-target="#privacy" onClick={this.showStep}>
                Privacidade
              </li>
            </ol>
            <ul>
              <li className={this.state.currentStep == "#about" ? "show" : ""}>
                <User model={this.state.user}></User>
              </li>
              <li
                className={
                  this.state.currentStep == "#socialMedial" ? "show" : ""
                }
              >
                mostrando Midias Sociais
              </li>
              <li
                className={this.state.currentStep == "#privacy" ? "show" : ""}
              >
                mostrando Privacidade
              </li>
            </ul>
          </div>
        </Main>

        <style jsx>{`
        ul {
          padding-left: 0px;
        }
          li {
            pointer-events: auto;
            cursor: pointer;
            margin: 5px;
            display: flex;
            padding: 6px 8px;
            flex-grow: 1;
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
            width:  100%
          }
        `}</style>
      </Fragment>
    );
  }
}
