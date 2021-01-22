import { Component, Fragment } from 'react';


export default class Player extends Component {
   constructor(props) {
    super(props);
    this.state = {play: false, audio : this.audio, time: 0.00, duration:0.00};
       
  }
    
  componentDidMount() {
    this.audio = document.getElementsByClassName("audio-element")[0];
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
    this.audio.addEventListener('timeupdate', () => this.setState({ time: this.convertDuration(this.audio.currentTime) }));
  }

  componentWillUnmount() { 
    this.audio = document.getElementsByClassName("audio-element")[0]; 
      this.audio.addEventListener('ended', () => this.setState({ play: false }));
    this.audio.addEventListener('timeupdate', () => {
     this.setState({ time: this.convertDuration(this.audio.currentTime) });
     if(!isNaN(this.audio.duration) && this.state.audio == 0) {   
    this.setState( {duration: this.convertDuration(this.audio.duration)});
     }
    });

  }
   convertDuration =(seconds) =>{
   let sec = Math.floor( seconds );    
   let min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;    
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;    
    return min + '.' + sec;
}
 togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  if(!isNaN(this.audio.duration)) {
    this.setState( {duration: this.convertDuration(this.audio.duration)});
  }
  
  
  }
 handleChange = (event) => {
     this.audio.currentTime = event.target.value;
     this.setState({ time: this.convertDuration(this.audio.currentTime) });
  
  }
  render() {
    return (
      <Fragment>
        <div className="podcast-label">

         <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      <ul>
      <li> {this.state.time } -> {this.state.duration } </li>
      </ul>
       
       <audio className="audio-element">	
          <source src={this.props.url}></source>	
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
