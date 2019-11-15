import api from "./api";
export default class SessionApi {
    static async login(user) {
        try {
            // const params = new URLSearchParams();
            // for (let prop in user) {
            //     params.append(prop, user[prop]);
            // }
            await api.post("/sessions", user);
            console.log('ok')
        } catch (err) {
            console.log(err);

        }

    }

}