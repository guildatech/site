import api from './api';
import { handle } from '../components/utils/handler/errorHandler';
export default class PostApi {
  static async search() {
    return api
      .get('/blog_posts')
      .then(function(response) {
        return response;
      })
      .catch(function(exception) {
        throw exception;
      });
  }
  static async pagination(params) {
    return api
      .get('/blog_posts/pagination', { params: params })
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
      .post('/blog_posts', model)
      .then(function(response) {
        return response;
      })
      .catch(handle);
  }
  static async update(model) {
    return api
      .put(`/blog_posts/${model.id}`, model)
      .then(function(response) {
        return response;
      })
      .catch(handle);
  }
}
