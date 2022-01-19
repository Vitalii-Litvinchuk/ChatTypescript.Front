import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/reducer";
/// import { [name]+-Reducer } from "reducer location"


export const rootReducer = combineReducers({
    /// [name]: [name]+-Reducer
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;