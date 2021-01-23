import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "eb71d1dc-c252-48cc-96a1-947da5cdc190"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);         
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`);         
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });         
    },
    logOut() {
        return instance.delete(`auth/login`);         
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`);         
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);         
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`);         
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status: status });         
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts) {
        return instance.put(`profile`, { aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts});
    }
}

