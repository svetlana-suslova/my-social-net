import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Hi there!', like: 5},
        {id: 2, text: 'How are you?', like: 12}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: action.newPostText, like: 0}]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}
export const addPost = (newPostText) => ({type: 'ADD-POST', newPostText});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setUserProfileStatus = (status) => ({type: 'SET_USER_PROFILE_STATUS', status});
  
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(response => { 
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
        .then(response => { 
            dispatch(setUserProfileStatus(response.data));
        });
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfileStatus(status));
            }
        });
    }
}
export default profileReducer;