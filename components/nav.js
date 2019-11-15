import { Component } from "react";
import Link from "next/link";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    const links = [
      {
        href: "https://github.com/guildatech/",
        label: "Github",
        icon: "../static/icons8-github-24.png"
      },
      {
        href: "https://t.me/guildatech",
        label: "Telegram",
        icon: "../static/icons8-telegram-24.png"
      },
      {
        href: "login",
        label: "Login",
        icon: "../static/user.svg"
      }
    ].map(link => {
      link.key = `nav-link-${link.href}-${link.label}`;
      return link;
    });
    this.state = { links };
  }

  render() {
    return (
      <nav>
        <ul>
          <li id="menu" className={this.props.updateMenu ? "" : "hide"}>
            <input
              onClick={this.props.updateMenu}
              type="checkbox"
              id="checkboxmenu"
              name="checkboxmenu"
            />
            <label className="guilda-menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </li>
          <li id="gt-logo">
            <Link prefetch href="/">
              <a className="logo">
                <img src="static/logo.png" />

                <span>
                  Guilda<strong>Tech</strong>
                </span>
              </a>
            </Link>
          </li>
          <ul className="network-links">
            {this.state.links.map(({ key, href, label, icon }) => (
              <li key={key}>
                <Link href={href}>
                  <a>
                    <img
                      aria-label={label}
                      alt={label}
                      title={label}
                      tooltip={label}
                      src={icon}
                      aria-label={label}
                      style={{ width: "24px" }}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>

        <style jsx>{`
          #checkboxmenu {
            position: absolute;
            width: 26px;
            height: 26px;
            z-index: 999;
            opacity: 0;
            cursor: pointer;
          }
          .guilda-menu {
            cursor: pointer;
            z-index: 99;
            background: red;
            position: relative;
            heigh: 26px;
          }

          .guilda-menu span {
            display: block;
            width: 30px;
            height: 2px;
            position: absolute;
            background: black;
            transform-origin: center center;
            top: 5px;
          }
          .guilda-menu span:nth-child(1) {
            transform-origin: top left;
            transition: all 300ms ease;
          }

          .guilda-menu span:nth-child(2) {
            top: 50%;
            transition: all 0.1s ease, all 300ms ease;
          }

          .guilda-menu span:nth-child(3) {
            transition: all 300ms ease;
            transform-origin: bottom left;
            top: 80%;
          }
          #checkboxmenu:checked ~ .guilda-menu span:nth-child(1) {
            transform: rotate(40deg);
            width: 31px;
            height: 4px;
          }
          #checkboxmenu:checked ~ .guilda-menu span:nth-child(3) {
            transform: rotate(-40deg);
            width: 31px;
            height: 4px;
          }

          #checkboxmenu:checked ~ .guilda-menu span:nth-child(2) {
            opacity: 0;
            width: 3px;
          }

          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            z-index: 10;
            text-align: center;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
            flex-grow: 1;
          }
          a {
            color: #e9b625;
            text-decoration: none;
            font-size: 13px;
          }
          a.logo {
            color: #000;
            font-weight: 700;
          }
          a.logo strong {
            font-weight: 700;
            color: #e9b625;
            border-bottom: 2px solid black;
          }
          a.logo img {
            height: 30px;
            vertical-align: middle;
          }
          .network-links a::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: #000;
            transition: width 0.8s;
          }
          /*  @media (min-width:768px){
      #menu {
      display: none;
      }
      }*/
          #menu {
            width: 30px;
            flex-grow: 0;
            padding: 6px 0px;
          }
          .network-links a:hover::after {
            width: 100%;
          }

          #checkboxmenu:checked ~ * aside nav {
            background: red;
          }

          #menu,
          #gt-logo {
            transition: all 200ms;
          }
          @media (min-width: 768px) {
            #menu {
              transform: translateX(-150px);
            }
            #gt-logo {
              transform: translateX(-45px);
            }
          }

          .hide > * {
            display: none !important;
          }
        `}</style>
      </nav>
    );
  }
}
