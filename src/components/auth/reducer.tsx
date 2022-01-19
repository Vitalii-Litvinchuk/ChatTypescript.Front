import { AuthActionTypes, AuthAction, AuthState } from "./types";

const initialState: AuthState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_AUTH: case AuthActionTypes.REGISTER_AUTH:
            return {
                ...state,
                loading: true,
            };
        case AuthActionTypes.LOGIN_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: action.payload,
            };
        case AuthActionTypes.REGISTER_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: action.payload,
            };
        case AuthActionTypes.LOGIN_AUTH_ERROR: case AuthActionTypes.REGISTER_AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default: return state;
    }
}
