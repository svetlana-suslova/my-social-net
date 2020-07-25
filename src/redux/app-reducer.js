import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const GLOBAL_ERROR = 'app/GLOBAL_ERROR';

let initialState = {
    initialized: false,
    globalError: false
};

const appReducer = (state = initialState, action) => {
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
export const initializedSuccess = () => ( {type: INITIALIZED_SUCCESS} );
export const setGlobalError = () => ( {type: GLOBAL_ERROR} );

export const initializeApp = () => (dispatch) => {
    let promiseResult = dispatch(getAuthUserData());
    Promise.all([promiseResult]).then(() => {
        dispatch(initializedSuccess());
    });
}

export const catchGlobalError = () => (dispatch) => { 
    dispatch(setGlobalError()); 
}
export default appReducer;