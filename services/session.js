import api from "./api";
export default class SessionApi {
    static async login(user) {
        return api.post("/sessions", user).then(function (response) {
            console.log(response);
            return response
        }).catch(function (exception) {
            let errors = {}
            if (exception && exception.response) {
                let err = exception.response.data;
                err.forEach(e => { errors[e.field] = true });

            } else {
                console.log(exception);
                errors.general = "Ocorreu um problema ao efetuar seu login";
            }
            return errors;
        });

        /* let response = await api.post("/sessions", user);
     
         if (response.status && response.status < 300) {
             return response.json();
         } else {
             throw response;
         }*/
    }

}