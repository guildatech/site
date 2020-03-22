import api from "./api";
export default class RegisterApi {
  static async register(user) {
    return api
      .post("/register", user)
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
          errors.general = "Ocorreu um problema ao efetuar seu login";
        }
        throw errors;
      });
  }
}
