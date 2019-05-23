import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head title="GuidaTech" />
    <Nav />

    <aside>
      <nav>
        <ol>
          <li>Início</li>
          <li>Posts</li>
          <li>Projetos</li>
          <li>Eventos</li>
          <li> Jobs </li>
        </ol>
      </nav>
    </aside>
    <main>
      <section>
        <div className="hero stretch">
          <h3 className="title">
            Boas Vindas a Guilda<strong>Tech</strong>
          </h3>
          <p className="description">
            Somos uma comunidade inclusiva em que assustos <br />
	   de todos os tipos são
            tratados,
            <br /> inclusive <strong>Programação</strong>
          </p>

        </div>
          <div className="badge stretch" >
<span className="braces left">  </span>
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M149.752 46.8546C147.562 22.7551 130.504 5.27046 109.157 5.27046C94.935 5.27046 81.9131 12.9238 74.5858 25.1899C67.3248 12.7651 54.8366 5.26758 40.8425 5.26758C19.498 5.26758 2.43739 22.7522 0.25072 46.8517C0.0776336 47.9162 -0.632023 53.5184 1.52579 62.6545C4.63559 75.8322 11.8187 87.8185 22.2933 97.3094L74.5512 144.732L127.706 97.3123C138.181 87.8185 145.364 75.8351 148.474 62.6545C150.632 53.5213 149.922 47.9191 149.752 46.8546Z"
              fill="#E9B625"
            />
          </svg>
<span className="braces right"> </span>
 </div>
      </section>
    </main>

    <style jsx>{`

.stretch {
	align-items: stretch;
align-items: center;
} 

.badge svg {
    margin: auto;
    height: 100%;
    }

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

      aside li {
        width: 100%;
        color: #000;
        font-weight: 700;
        background: white;
        padding: 15px 10px 15px 25px;
        margin: 5px 0px;
      }

      aside li:first-letter {
        color: #e9b625;
      }

      aside li:hover {
        color: white !important;
        background: #e9b625;
      }
      aside li:hover:first-letter {
        color: #fff;
      }

      main {
        padding-left: 220px;
      }

      @media (max-width: 768px) {
        .hero {
          width: 100%;
        }
        .badge {
          display: none;
        }
      }
      
      main >  section {
 		 display: flex;
		flex-direction: row;
      }
      .hero,
      .badge {
     flex-direction: row;
      }
      .hero {
flex-grow: 2;
        color: #333;
      }
      .badge {
flex-grow:1;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
      }
      .title,
      .description {
        font-size: 22px;
      }
    `}</style>
  </div>
);

export default Home;
