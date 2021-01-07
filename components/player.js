import { Component, Fragment } from 'react';


export default class Player extends Component {
  constructor() {
    super();
    this.state = {audio:null, label:'Play'};
    this.playAudio = this.playAudio.bind(this);

  }

  playAudio() {
    let audioEl;
    if (this.state.audio) {
      audioEl = this.state.audio;
    } else {

      audioEl = document.getElementsByClassName("audio-element")[0];
      this.setState({ audio: audioEl });
    }
    if (audioEl.paused) {
      this.setState({ label: 'Pause' });
      audioEl.play();
    } else {
      this.setState({ label: 'Play' });
      audioEl.pause();
    }
  }
  render() {
    return (
      <Fragment>
        <div className="podcast-label">

        <button className="button" onClick={this.playAudio}>
          <span>{ this.state.label }</span>
        </button>
        <p>Episódio <b>0001</b> <br/>
        Convidado <b>Will </b></p>
        </div>
        <audio className="audio-element">
          <source src="../static/quem_programa_0001_Will.mp3"></source>
         </audio>

        <style jsx>{`
          .overlay {
            position: absolute;
            width: 0vw;
            height: 0vh;
            background: #000;
            opacity: 0;
            transition: opacity 400ms;
            z-index: 1;
          }
          .overlay.show {
            opacity: 0.2;
            width: 100vw;
            height: 100vh;
          }

          @media (min-width: 768px) {
            .overlay {
              display: none;
            }
          }
          button {
            background: var(--guildatech-color-yellow-ligth);
            border: 2px solid var(--guildatech-color-primary);
            box-shadow: 2px 2px 6px rgba(0,0,0,0.6);
            width: 50px;
            height: 50px;
            border-radius:50px;
          }
          .podcast-label {
            display: flex;
          }
          .podcast-label > * {
            margin: 5px; 
            padding: 10px;
          }
        `}</style>
      </Fragment>
    );
  }
}
