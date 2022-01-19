import { Dispatch } from "react"
import { AuthAction, AuthActionTypes } from "../types";
import { IRegisterModel, IRegisterResponse } from "./types";
import http from "../../../http_common";


export const registerUser = (data: IRegisterModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.REGISTER_AUTH });
            const response = await http.post<IRegisterResponse>("api/auth/register", data);
            dispatch({ type: AuthActionTypes.REGISTER_AUTH_SUCCESS, payload: response.data.user });
            return Promise.resolve();
        } catch (error) {
        }
    }
}