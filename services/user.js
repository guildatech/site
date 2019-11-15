import api from "./api";
export default class UserApi {
  static async register(user) {
    try {
      const params = new URLSearchParams();
      for (let prop in user) {
        params.append(prop, user[prop]);
      }
      await api.post("/register", params);
      console.log('ok')
    } catch (err) {
      console.log(err);

    }

  }

}