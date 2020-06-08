import { authAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
                ...action.data,
                isAuth: true
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
export const setAuthUserData = (userId, email, login) => ({type: 'SET_AUTH_USER_DATA', data: {userId, email, login}});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.getAuth().then(response => {
        dispatch(toggleIsFetching(false)); 
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }    
        });
    }
}

export default authReducer;