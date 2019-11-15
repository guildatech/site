import { Component, Fragment } from "react";
import { isAuthenticated } from "../../services/auth";

export default class AuthHome extends Component {
    constructor() {
        super();
        if (!isAuthenticated) {
            this.props.history.push("/");

        }
    }


    render() {
        return (
            <Fragment>
                <main>
                    <h1> TÁ LÁ GAROTO</h1>
                </main>
            </Fragment>
        );
    }
}
