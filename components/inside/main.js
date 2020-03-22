import { Component, Fragment } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <main>
          <section>{this.props.children}</section>
        </main>
        <style jsx>{`
          main {
            padding-left: 160px;
          }
          main > section {
            display: flex;
            width: calc(100% - 10px);
            flex-direction: row;
          }

          @media (max-width: 768px) {
            main {
              padding: 10px 20px !important;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}
