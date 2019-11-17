import { Component, Fragment } from "react";

export default class LOader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <style jsx>{`
        
         div {
            border: 1px solid var(--color-primary);
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
            border-color: var(--color-green) !important;
            color: var(--color-green-darker) !important;
          }
            .danger {
                border-color: var(--color-red) !important;
                color: var(--color-red) !important;
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
