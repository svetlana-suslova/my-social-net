import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const GLOBAL_ERROR = 'app/GLOBAL_ERROR';

export type initialStateType = {
    initialized: boolean
    globalError: boolean
}

let initialState: initialStateType = {
    initialized: false,
    globalError: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        case GLOBAL_ERROR:
            return {
                ...state,
                globalError: true
            };
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type setGlobalErrorActionType = {
    type: typeof GLOBAL_ERROR
}

export const initializedSuccess = (): initializedSuccessActionType => ( {type: INITIALIZED_SUCCESS} );
export const setGlobalError = (): setGlobalErrorActionType => ( {type: GLOBAL_ERROR} );

export const initializeApp = () => (dispatch: any) => {
    let promiseResult = dispatch(getAuthUserData());
    Promise.all([promiseResult]).then(() => {
        dispatch(initializedSuccess());
    });
}

export const catchGlobalError = () => (dispatch: any) => { 
    dispatch(setGlobalError()); 
}
export default appReducer;