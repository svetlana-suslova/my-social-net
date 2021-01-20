import { profileAPI } from '../api/api';
import { stopSubmit, reset } from 'redux-form';
import { postType,  profileType, photosType, contactsType} from './../types/types';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'profile/SET_USER_PROFILE_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        {id: 1, text: 'В ритме', like: 155},
        {id: 2, text: 'По жизни', like: 127}
    ] as Array<postType>,
    profile: null as profileType | null,
    status: ''
};
type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: action.newPostText, like: '+10'}] as Array<postType> //??
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
                profile: {...state.profile, photos: action.photos} as profileType //??
            };
        default:
            return state;
    }
}
type addPostTextActionType = {
    type: typeof ADD_POST
    newPostText: string
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}
type setUserProfileStatusActionType = {
    type: typeof SET_USER_PROFILE_STATUS
    status: string
}
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: photosType
}
export const addPostText = (newPostText: string): addPostTextActionType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: profileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export const setUserProfileStatus = (status: string): setUserProfileStatusActionType => ({type: SET_USER_PROFILE_STATUS, status});
export const savePhotoSuccess = (photos: photosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => {
    return async (dispatch: any) => {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
}
export const getUserStatus = (userId: number) => {
    return async (dispatch: any) => {
        const response = await profileAPI.getProfileStatus(userId);
        dispatch(setUserProfileStatus(response.data));
    }
}
export const updateUserStatus = (status: string) => {
    return async (dispatch: any) => {
        const response = await profileAPI.updateProfileStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserProfileStatus(status));
        }
    }
}

export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos));
        }
    }
}

export const addPost = (newPostText: string) => {
    return async (dispatch: any) => {
        dispatch(addPostText(newPostText));
        dispatch(reset('addPosts'));
    }
}

export const saveProfile = (aboutMe: string, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts: contactsType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile( aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;