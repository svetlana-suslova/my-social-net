import axios from 'axios';
import {contactsType} from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2a11aa90-65a2-4566-adc6-10d5bc0cf795"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);         
    }
}

type meResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: resultCodesEnum
    messages: Array<string>
}
type loginResponseType = {
    data: {
        userId: number
    }
    resultCode: resultCodesEnum | resultCodeCapctha
    messages: Array<string>
}
type logoutResponseType = {
    data: {}
    resultCode: resultCodesEnum
    messages: Array<string>
}
export enum resultCodesEnum {
    Success = 0,
    Error = 1
}
export enum resultCodeCapctha {
    CaptchaIsRequired = 10
}
export const authAPI = {
    getAuth() {
        return instance.get<meResponseType>(`auth/me`).then(response => response.data);         
    },
    logIn(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<loginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
        .then(response => response.data);        
    },
    logOut() {
        return instance.delete<logoutResponseType>(`auth/login`).then(response => response.data);     
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`);         
    }
}

export const followAPI = {
    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`);         
    },
    getProfileStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);         
    },
    updateProfileStatus(status: string) {
        return instance.put(`profile/status`, { status: status });         
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(aboutMe: string, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts: contactsType) {
        return instance.put(`profile`, { aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts});
    }
}

