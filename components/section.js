import { Component, Fragment } from "react";

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <section>{this.props.children}</section>
        <style jsx>{`
          section {
            border: 1px solid var(--color-primary);
            min-height: 450px;
            min-width: 350px;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.45);
            transistion: all 300ms;
            padding: 10px 15px;
            positin: relative;
          }
          @media (max-width: 768px) {
            section {
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
