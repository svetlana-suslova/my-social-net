import { resultCodesEnum, resultCodeCapctha } from './../api/api';
import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: false,
    captchaUrl: null as string | null
};
type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

type setAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: setAuthUserDataActionPayloadType
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        const response = await authAPI.getAuth();
        if (response.resultCode === resultCodesEnum.Success) {
            const {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
        dispatch(toggleIsFetching(false));
        return response;
    }
}
export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        const response = await authAPI.logIn(email, password, rememberMe, captcha);
        if (response.resultCode === resultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (response.resultCode === resultCodeCapctha.CaptchaIsRequired) {
                dispatch(getCaptcha());
                dispatch(toggleIsFetching(false));
            }
            dispatch(stopSubmit('login', {_error: response.messages[0]}));
            return Promise.reject(response.messages[0]);
        }
        dispatch(toggleIsFetching(false));
    }
}
export const logOut = () => {
    return async (dispatch: any) => {
        const response = await authAPI.logOut();
        if (response.resultCode === resultCodesEnum.Success) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptcha();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}

export default authReducer;