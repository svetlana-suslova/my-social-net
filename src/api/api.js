import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2a11aa90-65a2-4566-adc6-10d5bc0cf795"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);         
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`);         
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
    }
}

