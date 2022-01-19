/// import * as [Name]+-ActionCreators from "Actions location";
import *  as LoginActionCreators from "../../components/auth/Login/actions";
import *  as RegisterActionCreators from "../../components/auth/Register/actions";

export default {
    ///...[Name]+-ActionCreators
    ...LoginActionCreators,
    ...RegisterActionCreators,
}