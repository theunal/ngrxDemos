
import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.action';
import { initialState } from './auth.state';


export function authReducer(state: any, action: any) {
    return _authReducer(state, action)
}

const _authReducer = createReducer(initialState,

    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })









)