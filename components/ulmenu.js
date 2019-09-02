import React from "react";
import Link from "next/link";
import {Router,Route} from 'react-router';
import Artigos from "../pages/artigos";
import Eventos from "../pages/eventos";
import Inicio from "../pages/inicio";
import Jobs from "../pages/jobs";
import Projetos from "../pages/projetos";

const menus = [
  { href: "/", label: "Início" , component: Inicio},
  { href: "/artigos", label: "Artigos" , component:Artigos},
  { href: "/projetos", label: "Projetos" , component: Projetos},
  { href: "/eventos", label: "Eventos" , component: Eventos},
  { href: "/jobs", label: "Jobs" , component: Jobs}
].map(menu => {
  menu.key = `menu-${menu.href}-${menu.label}`;
  return menu;
});

const Menu = props => (
  <aside className="aside-menu">
    <nav>
      <ol>
        {menus.map(({ key, href, label }) => (
          <Link href={href}>
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
        color: #e9b625;
      }

      aside li:hover {
        color: white !important;
        background: #e9b625;
      }
      aside li:hover a {
        color: white !important;
      }

      aside li:hover:first-letter {
        color: #000;
      }
      
      @media (max-width: 768px) {
      aside {
      position:absolute;
      left:-150px}
      }
      
      .aside-menu {
        background : ${props.estadoMenu ? 'red' : 'blue'}
      }
      
    `}</style>
  </aside>
);

export default Menu;
