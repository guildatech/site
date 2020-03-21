import { Component, Fragment } from "react";
import Navigation from "../components/navigation";
import Main from "../components/main";
import Router from "next/router";
import PostApi from "../services/posts";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      pagination: { data: [] },
      loading: null
    };
    this.open = this.open.bind(this);
  }
  componentDidMount() {
    this.list();
  }
  async list() {
    this.setState({ loading: true });
    try {
      let params = {
        size: 10,
        page: 1,
        user_id: user.id
      };
      PostApi.pagination(params).then(res => {
      this.setState({ pagination: res.data });
      }).finally(() => {

        this.setState({ loading: false });
       });
    } catch (errors) {
      this.setState({ error: true, errors: errors });
    }
  }
  toLocaleDateString(date) {
    return new Date(date).toLocaleDateString()
  }
  open($event) {
    let clickedElement = $event.target;
    let li = clickedElement.tagName.toLowerCase() === 'li' ? clickedElement : clickedElement.closest('li');
    let index = li.dataset && li.dataset.post || -1;
    if (index == -1) return;
    Router.push("/post?id="+index);
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main path="Posts">
        <ol>
        {this.state.pagination.data.map((row, i) =>
          <li key={i} onClick={this.open} data-post={row.id}>
          
            <div className="post-info">
              <span className="post-author">{row.user.name.toLowerCase()}</span>
              <span className="post-date">{this.toLocaleDateString(row.created_at)}</span>
            </div>
          <h4>
          {row.post_title}
            </h4>
        </li>
                )}
          </ol>
        </Main>
        <style jsx>
          {`
          ol {
            list-style: none;
            padding-left:2px;
            width:99%
          }

          li {
            border:1px solid var(--guildatech-color-light-grey);
            padding:15px;
            width:99%;
            margin:10px;
            cursor: pointer;
          }
          h4 {
            margin:0;
            margin-top:10px;
            color: black;
          }
          h4:first-letter {
            color: var(--guildatech-color-primary);
          }
          .post-author {
            text-transform: capitalize;
          }
          .post-info {
            font-size: 10px !important
          }
          .post-info .post-date {
            float:right
          }

          `}
        </style>
      </Fragment>
    );
  }
}
