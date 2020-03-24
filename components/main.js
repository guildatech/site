import { Component, Fragment } from 'react';
import {Breadcrumb} from '@guildatech/guildatech-components';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <main>
          <Breadcrumb path={this.props.path} />
          <section>{this.props.children}</section>
        </main>
        <style jsx>{`
          main {
            padding-left: 220px;
          }
          main > section {
            display: flex;
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
