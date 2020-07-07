import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching 
            };
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getAuthUserData = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const response = await authAPI.getAuth();
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
        dispatch(toggleIsFetching(false));
        return response;
    }
}
export const logIn = (email, password, rememberMe) => {
    return async (dispatch) => {
        const response = await authAPI.logIn(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let errorMessage = response.data.messages.length > 0 ? response.data.messages : "Error";
            dispatch(stopSubmit('login', {_error: errorMessage}));
        }
    }
}
export const logOut = () => {
    return async (dispatch) => {
        const response = await authAPI.logOut();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;