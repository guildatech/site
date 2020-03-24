import '../../static/style.css';

import Head from '../../components/head';

const HackathonCovid = () => (
  <div>
    <Head title="GuildaTech" />
    <section>
      <header>
        <h4>Hackathon GuildaTech</h4>
        <h2>COVID-19</h2>
      </header>
      <main>
        <div className="overlay"></div>
        <article>
          <h3> Olá!</h3>

          <p>
            Tendo em vista o atual momento mundial, muitas pessoas estão ficando
            em casa 100% do tempo ou a maior parte dele.
          </p>

          <p>
            Sendo assim, para podermos colaborar da maneira que podemos e
            amenizar o tédio, a #GuildaTech está promovendo uma hackathona!
          </p>

          <p>
            O tema é o seguinte: <strong>Covid-19 e saúde pública.</strong>
          </p>

          <p>
            Haverá uma premiação simbólica em duas categorias:
            <ul>
              <li>Projeto mais inovador</li>
              <li>Projeto com maior impacto social</li>
            </ul>
          </p>
          <p>
            Esses projetos serão julgados por todas as pessoas membras da{' '}
            <strong>
              <em>#GuildaTech</em>
            </strong>
            , mas qualquer pessoa pode participar.
          </p>

          <p>
            O prazo de submissão de projetos até <strong>25/03/2020 </strong> e
            os projetos serão avaliados até <strong>28/03/2020.</strong>
          </p>

          <p>
            O resultado sairá no dia <strong>29/03/2020.</strong>
          </p>

          <p>
            Premiação para cada categoria será dois vale-presentes da Casa do
            Código, que dá ao direito de trocar por um ebook da plataforma.
          </p>

          <p>
            Qualquer dúvida, entre na Guilda Tech pelo Telegram ou Twitter{' '}
            <small>(links no rodapé).</small>
          </p>

          <p>
            Caso queira, procure uma pessoa para seu grupo na GuildaTech ou na
            hashtag{' '}
            <strong>
              <em>#HackathonGuildaTech</em>
            </strong>
          </p>
        </article>
        <hr></hr>
        <article>
          <h3>Regras</h3>
          <div>
            {' '}
            <ol>
              <li>
                Os projetos poderão ser desenvolvidos usando qualquer
                tecnologia, seja linguagem de programação ou ferramenta nocode.
              </li>
              <li>
                O código fonte do projeto ou instruções para criação em uma
                plataforma nocode deverão ser <strong>públicos</strong>, não
                necessariamente open source.
              </li>
              <li>
                O projeto poderá ser desenvolvido individualmente ou em equipes
                de até <strong>4 pessoas</strong>.
              </li>
              <li>
                A premiação é única para cada projeto. A divisão fica a par do
                grupo.
              </li>
              <li>
                Os projetos deverão ser submetidos enviando um e-mail para{' '}
                <a href="mailto:guildatech@juliocampos.com.br">
                  <strong>
                    <em>guildatech@juliocampos.com.br</em>
                  </strong>
                </a>
              </li>
            </ol>
          </div>
        </article>
      </main>
      <footer>
        <div>
          <h4>Mais informações</h4>
          <ol>
            <li>
              <a href="https://twitter.com/GuildaTech" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/Hackathon-Covid-19-c000e6dca15f43e085ca35b7c8a973b0"
                target="_blank"
              >
                Notion
              </a>
            </li>
            <li>
              <a href="https://t.me/guildatech" target="_blank">
                Telegram
              </a>
            </li>
          </ol>
        </div>
      </footer>
    </section>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Bungee+Shade|Orbitron&display=swap');
      .esticar-largura {
        align-items: stretch;
        align-items: center;
      }
      section {
        min-width: 95vw;
        min-height: 95vh;
      }
      section * {
        font-family: 'Orbitron', sans-serif;
      }
      header {
        min-height: 200px;
        padding-top: 25px;
        background: var(--guildatech-color-primary);
      }
      main {
        display: block;
        position: relative;
        min-height: calc(100vh - 350px);
        padding: 20px 50px;
      }
      .overlay {
        display: block;
        position: absolute;
        width: 100vw;
        height: 100%;
        opacity: 0.021;
        margin: -22px;
        background: url(../static/logo.png);
        background-size: 100%;
        background-position: 0;
        background-repeat: no-repeat;
        background-attachment: local;
      }
      main li {
        padding: 15px;
      }
      footer {
        min-height: 100px;
        padding: 25px;
        color: white;
        background: var(--guildatech-color-dark);
      }
      footer a,
      footer a:visited,
      footer a:active {
        color: white;
        transition: all 300ms ease;
        text-decoration: none;
      }
      footer a:hover {
        color: var(--guildatech-color-primary);
        font-family: 'Bungee Shade', cursive;
        font-size: 28px;
      }
      footer lil {
        position: relative;
      }
      footer a::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 2px;
        background: #fff;
        transition: width 0.3s, background 0.8s;
      }
      footer a:hover::after {
        width: 100%;
        background: var(--guildatech-color-primary);
      }
      footer ol {
        list-style: none;
        padding-left: 5px;
      }
      h4,
      h2 {
        margin: 2px !important;
        padding: 2px !important;
      }
      h4 {
        font-family: 'Orbitron', sans-serif;
      }
      h2 {
        font-family: 'Bungee Shade', cursive !important;
        font-size: 78px;
      }
      strong,
      em {
        position: relative;
      }
      strong::after,
      em::after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        left: 0;
        top: 0;
        opacity: 0;
        height: 100%;
        background: #fff;
        -webkit-transition: width 0.3s, background 0.8s;
        transition: width 0.3s, background 0.8s;
        z-index: 9;
      }
      strong:hover::after,
      em:hover::after {
        width: 110%;
        background: var(--guildatech-color-primary);
        opacity: 1;
        left: -5%;
        z-index: -1;
      }
    `}</style>
  </div>
);

export default HackathonCovid;
