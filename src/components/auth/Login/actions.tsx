import {
    ILoginResponse, ILoginModel,
} from './types';
import { Dispatch } from "react";
import http from '../../../http_common';
import { AuthActionTypes, AuthAction, IUser } from '../types';

export const loginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({ type: AuthActionTypes.LOGIN_AUTH });
            const response = await http.post<ILoginResponse>('api/auth/login', data);
            const { access_token } = response.data;
            authUser(access_token, dispatch);
            return Promise.resolve();
        }
        catch (error) {
        }
    }
}

export const authUser = (token: string, dispatch: Dispatch<AuthAction>) => {
}