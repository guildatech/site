import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Button from "../components/button";
import Menu from "../components/menu";
import Breadcrumb from "../components/breadcrumb";

const Artigos = () => (
  <div>
    <Head title="GuidaTech" />
    <Nav />
    <Menu />
    <main>
      <section>
        <Breadcrumb path="Artigos" />
      </section>
    </main>
    <style jsx>{`
      .esticar-largura {
        align-items: stretch;
        align-items: center;
      }
      main {
        padding-left: 220px;
      }

      @media (max-width: 768px) {
        .capa {
          width: 100%;
        }
      }

      main > section {
        display: flex;
        flex-direction: row;
      }
      .capa,
      .simbolo {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .capa {
        flex-grow: 2;
        color: #333;
      }
      .titulo {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
      }
      .titulo,
      .descricao {
        font-size: 22px;
      }
    `}</style>
  </div>
);

export default Artigos;
