import { Component, Fragment } from "react";

export default class Alert extends Component {
  constructor(props) {
    super(props);
    const reservedKey = ["closable", "children", "collpasible"];
    let classes = [];
    Object.keys(props).forEach(key => {
      if (!reservedKey.includes(key)) {
        classes.push(key);
      }
    });

    this.state = { props, classNames: classes.join(" ") };
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.classNames}>
          {this.props.closable ? <span>-</span> : null}
          {this.props.collapsible ? <span>x</span> : null}
          <span> {this.props.children}</span>
        </div>
        <style jsx>{`
        
         div {
            border: 1px solid var(--guildatech-color-primary);
            min-height: 50px;
            min-width: 100%;
            box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
            transistion: all 300ms;
            padding: 5px;
            font-weight:700;
            display: flex;
            align-items: center;
            justify-content: center;
            }
          }
          .success {
            border-color: var(--guildatech-color-green) !important;
            color: var(--guildatech-color-green-darker) !important;
          }
            .danger {
                border-color: var(--guildatech-color-red) !important;
                color: var(--guildatech-color-red) !important;
          }
          @media (max-width: 768px) {
           
            div {
              position: relative;
              border: 0px;
              box-shadow: none;
            }
          }

        `}</style>
      </Fragment>
    );
  }
}
