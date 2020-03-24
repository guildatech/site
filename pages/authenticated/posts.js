import { Component, Fragment } from 'react';
import Navigation from '../../components/inside/navigation';
import Main from '../../components/inside/main';
import { Button } from '@guildatech/guildatech-components';
import Post from '../authenticated/post';
import Auth from '../../services/auth';
import PostApi from '../../services/posts';
import SessionApi from '../../services/session';
import Router from 'next/router';

export default class AuthPosts extends Component {
  constructor() {
    super();
    this.state = {
      newOrEdit: false,
      posts: [],
      errors: [],
      loading: null,
      editable: null,
      pagination: { data: [] },
    };
    this.list = this.list.bind(this);
    this.updateView = this.updateView.bind(this);
    this.edit = this.edit.bind(this);
  }
  componentDidMount() {
    if (Auth.isAuthenticated()) {
      this.getUser();
    } else {
      Router.push('/');
    }
  }
  updateView() {
    this.setState({ newOrEdit: !this.state.newOrEdit });
  }
  getUser() {
    SessionApi.get().then(res => {
      this.setState({ user: res.data });
      console.log(res);
      if (res) this.list(res.data);
    });
  }
  async list(user) {
    this.setState({ loading: true });
    try {
      let params = {
        size: 10,
        page: 1,
        user_id: user.id,
      };
      PostApi.pagination(params)
        .then(res => {
          this.setState({ pagination: res.data });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    } catch (errors) {
      console.log(errors);
    }
  }
  edit(data) {
    let toEdit = this.state.pagination.data.find(d => d.id == data.id);
    this.setState({ editable: toEdit });
    this.updateView();
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main>
          <div>
            {this.state.newOrEdit ? (
              <section>
                <h3>Novo Post</h3>
                <br />
                <Post
                  editable={this.state.editable}
                  onFinish={this.updateView}
                />
              </section>
            ) : (
              <section>
                <Button
                  onClick={this.updateView}
                  type="button"
                  title="Novo"
                  style={{ padding: '5px', margin: '0px 10px 0px 5px' }}
                ></Button>
                <h3 style={{ display: 'inline-block' }}>Posts</h3>

                <table>
                  <thead>
                    <tr>
                      <th width="60"></th>
                      <th>Titulo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.pagination.data.map((row, i) => (
                      <tr key={i}>
                        <td>
                          <Button
                            data={{ id: row.id }}
                            onClick={this.edit}
                            type="button"
                            title="Editar"
                            style={{
                              padding: '5px',
                              margin: '0px 10px 0px 5px',
                            }}
                          ></Button>
                        </td>
                        <td>{row.post_title}</td>
                      </tr>
                    ))}
                  </tbody>
                  {!this.state.pagination.data.length ? (
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
