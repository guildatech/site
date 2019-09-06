import React, { Component } from "react";
import ReactDOM from "react-dom";
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
                <img src="data:image/png;base64,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" />

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
                    <img aria-label={label} alt={label} title={label} tooltip={label} src={icon}  aria-label={label}
                    style={{width: '24px'}}/>
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
            width: 26px;
            flex-grow: 0;
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

          .hide  > *{
            display: none !important;
          }
        `}</style>
      </nav>
    );
  }
}
