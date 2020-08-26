import { profileAPI } from '../api/api';
import { stopSubmit, reset } from 'redux-form';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'profile/SET_USER_PROFILE_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, text: 'В ритме', like: 155},
        {id: 2, text: 'По жизни', like: 127}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: action.newPostText, like: '+10'}]
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
}
export const addPostText = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfileStatus(userId);
        dispatch(setUserProfileStatus(response.data));
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfileStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserProfileStatus(status));
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos));
        }
    }
}

export const addPost = (newPostText) => {
    return async (dispatch) => {
        dispatch(addPostText(newPostText));
        dispatch(reset('addPosts'));
    }
}

export const saveProfile = (aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;