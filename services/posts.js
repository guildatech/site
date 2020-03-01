import api from "./api";
export default class PostApi {
  static async search() {
    return api
      .get("/blog_posts")
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        throw exception;
      });
  }
  static async pagination(params) {
    return api
      .get("/blog_posts/pagination", params)
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        throw exception;
      });
  }
  static async get(id) {
    return api
      .get(`/blog_posts/${id}`)
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        throw exception;
      });
  }
  static async save(model) {
    return api
      .post("/blog_posts", model)
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
