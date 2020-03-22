import { Component, Fragment } from 'react';
import Navigation from '../components/inside/navigation';
import Auth from '../services/auth';
import '../static/style.css';
import Router from 'next/router';

export default class Authenticated extends Component {
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
