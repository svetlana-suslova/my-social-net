import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Hi there!', like: 5},
        {id: 2, text: 'How are you?', like: 12}
    ],
    newPostText: 'Kamasutra',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: state.newPostText, like: 0}],
                newPostText: '' 
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
export const addPostCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setUserProfileStatus = (status) => ({type: 'SET_USER_PROFILE_STATUS', status});
  
export const getUserProfile = (userId) => {
    return (dispatch) => {
        if(!userId) { userId = 2 }
        profileAPI.getProfile(userId)
        .then(response => { 
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        if(!userId) { userId = 2 }
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