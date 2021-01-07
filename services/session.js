import api from './api';
export default class SessionApi {
  static async login(user) {
    return api
      .post('/sessions', user)
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        let errors = {};
        if (exception && exception.response) {
          let err = exception.response.data;
          err.forEach(e => {
            errors[e.field] = true;
          });
        } else {
          console.log(exception);
          errors.general = 'Ocorreu um problema ao efetuar seu login';
        }
        throw errors;
      });
  }

  static async get(user) {
    return api
      .get('/session', user)
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        return exception;
      });
  }
  static async forgot(user) {
    return api
      .post('/forgot', user)
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        return exception;
      });
  }
}
