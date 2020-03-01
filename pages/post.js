import { Component, Fragment } from "react";
import Navigation from "../components/navigation";
import Main from "../components/main";
import Button from "../components/button";
import PostApi from "../services/posts";
import { withRouter } from "next/router";
import RenderHTML from "../components/renderHTML"
import Router from "next/router";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loading: null,
      postId: -1,
      post_user: ""
    };
   
  }
  componentDidMount() {
    if (this.props.router.query.id) {
       this.setState({ postId: this.props.router.query.id });
     this.get(this.props.router.query.id );
    }

  }
  async get(id) {
    this.setState({ loading: true });
    try {
      PostApi.get(id || this.state.postId).then(res => {
        this.setState({ post: res.data });
        this.setState({ post_user: res.data.user.name });
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
  voltar = () => {
   Router.push('/posts')
  };
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main>
          {this.state.loading ? 
            <div>
              Carregando
          </div> : 
           
            <Fragment >
              <section className="post-view">

              <Button style={{width:'80px'}}
                type="button"
                  title="Voltar"
                  onClick={this.voltar}
              ></Button>
              <h3 className="post-title">{this.state.post.post_title}</h3>

              <article>
                <RenderHTML data={this.state.post.post_body} />
                </article>

              
                  <div className="post-info">
                  <span className="post-author"><strong>{this.state.post_user}</strong> em <em>{this.toLocaleDateString(this.state.post.created_at)}</em></span>
                </div>
                </section>
              </Fragment>
          }
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
            width:99%
          }
          .post-title {
            display:block;
            margin:10px;
            color: black;
            width: 99%;
          }
          article {
            display:block;
            width:98%;
          }
          .post-title :first-letter {
            color: var(--guildatech-color-primary);
          }
          .post-author {
            text-transform: capitalize;
          }
          .post-info {
            font-size: 10px !important;
            margin-bottom: 20px;
            margin-top:10px;
          }
          .post-info .post-date {
            float:right
          }

          .post-view {
            display:flex;
            flex-direction: column;
            max-width: calc(100vw - 300px)
          }
          `}
        </style>
      </Fragment>
    );
  }
}

export default withRouter(Post);