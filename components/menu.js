import React, { Component } from "react";
import Link from "next/link";
import "../static/style.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    const menus = [
      { href: "/", label: "Início" },
      { href: "/artigos", label: "Artigos" },
      { href: "/projetos", label: "Projetos" },
      { href: "/eventos", label: "Eventos" },
      { href: "/jobs", label: "Jobs" }
    ].map(menu => {
      menu.key = `menu-${menu.href}-${menu.label}`;
      return menu;
    });

    this.state = { menus: menus };
  }

  render() {
    return (
      <aside className={this.props.menuAberto ? "aside-open" : "aside-close"}>
        <nav>
          <ol>
            {this.state.menus.map(({ key, href, label }) => (
              <Link key={key} href={href}>
                <li key={key}>
                  <a>{label} </a>
                </li>
              </Link>
            ))}
          </ol>
        </nav>

        <style jsx>{`
          aside {
            width: 150px;
            height: 100vh;
            padding: 20px 20px 20px 0px;
            background: #fff;
            position: fixed;
            overflow: auto;
            z-index: 10;
          }
          aside ol {
            list-style: none;
            font-size: 18px;
            width: 100%;
            padding-left: 0px;
            margin-left: 0px;
          }
          link {
            cursor: pointer;
          }
          aside li {
            width: 100%;
            color: #000;
            font-weight: 700;
            background: white;
            padding: 15px 10px 15px 25px;
            margin: 5px 0px;
            cursor: pointer;
          }
          aside li a {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
          aside li:first-letter {
            color: var(--cor-primaria);
          }

          aside li:hover {
            color: white !important;
            background: var(--cor-primaria);
          }
          aside li:hover a {
            color: white !important;
          }

          aside li:hover:first-letter {
            color: #000;
          }
          aside {
            transition: left 300ms;
          }

          @media (max-width: 768px) {
            aside {
              position: absolute;
              left: -150px;
            }
            .aside-open {
              left: -150px;
            }

            .aside-open {
              left: 0px;
              width: 250px;
            }
          }
        `}</style>
      </aside>
    );
  }
}
