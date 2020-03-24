import { Component, Fragment } from 'react';
import Navigation from '../../components/inside/navigation';
import Auth from '../../services/auth';
import Router from 'next/router';

export default class AuthHome extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    if (!Auth.isAuthenticated()) {
      Router.push('/');
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    );
  }
}
