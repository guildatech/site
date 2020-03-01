import { Component, Fragment } from "react";
import Navigation from "../../components/inside/navigation";
import Main from "../../components/inside/main";
import Button from "../../components/button";
import Post from "../authenticated/post";
import { isAuthenticated } from "../../services/auth";
import PostApi from "../../services/posts";
import SessionApi from "../../services/session";

export default class AuthPosts extends Component {
  constructor() {
    super();
    this.state = {
      adicao: false,
      posts: [],
      errors: [],
      loading: null
    };
    if (!isAuthenticated()) {
      this.props.history.push("/");
    } else {
      SessionApi.get();
    }
    this.list = this.list.bind(this);
  }
  componentDidMount() {
    this.list();
  }

  async list() {
    this.setState({ loading: true });
    try {
      PostApi.pagination({
        size: 10,
        page: 1
      })
        .then(res => {
          this.setState({ posts: [...res.data] });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    } catch (errors) {
      throw errors;
    }
  }

  editar = () => {
    this.setState({ adicao: true });
  };
  novo = () => {
    this.setState({ adicao: true });
  };
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main>
          <div>
            {this.state.adicao ? (
              <section>
                <h3>Novo Post</h3>
                <br />
                <Post />
              </section>
            ) : (
              <section>
                <Button
                  onClick={this.novo}
                  type="button"
                  title="Novo"
                  style={{ padding: "5px", margin: "0px 10px 0px 5px" }}
                ></Button>
                <h3 style={{ display: "inline-block" }}>Posts</h3>

                <table>
                  <thead>
                    <tr>
                      <th width="60"></th>
                      <th>Titulo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.posts.map((row, i) => (
                      <tr key={i}>
                        <td></td>
                        <td>{row.post_title}</td>
                      </tr>
                    ))}
                  </tbody>
                  {!this.state.posts.length ? (
                    <tfoot>
                      <tr>
                        <td></td>
                        <td>Você ainda não escreveu nenhum post.</td>
                      </tr>
                    </tfoot>
                  ) : null}
                </table>
              </section>
            )}
          </div>
        </Main>
        <style jsx>{`
          div {
            display: flex;
            width: 100%;
            flex-direction: column;
          }
          thead *,
          tbody td {
            text-align: left;
          }
          tfoot {
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            background-color: #fff;
          }
          th {
            text-align: left;
          }
          th,
          td {
            border: 1px solid #dfdfdf;
            padding: 1rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
