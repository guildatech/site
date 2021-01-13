import { Component, Fragment } from 'react';
import Navigation from '../components/navigation';
import Main from '../components/main';

export default class Podcasts extends Component {
  constructor() {
    super();
    this.state = {
      pagination: { data: [] },
      loading: null,
    };
  }
  componentDidMount() {
    this.list();
  }
  async list() {

  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main path="Podcasts">
      
        </Main>
        <style jsx>
          {`
            ol {
              list-style: none;
              padding-left: 2px;
              width: 99%;
            }

            li {
              border: 1px solid var(--guildatech-color-light-grey);
              padding: 15px;
              width: 99%;
              margin: 10px;
              cursor: pointer;
            }
            h4 {
              margin: 0;
              margin-top: 10px;
              color: black;
            }
            h4:first-letter {
              color: var(--guildatech-color-primary);
            }
            .post-author {
              text-transform: capitalize;
            }
            .post-info {
              font-size: 10px !important;
            }
            .post-info .post-date {
              float: right;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
