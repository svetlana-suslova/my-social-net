import { usersAPI, followAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
        return {
            ...state,
            users: action.users 
        };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage 
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount 
            };
        case TOGGLE_IS_FETCHING:
        return {
            ...state,
            isFetching: action.isFetching 
        };
        case TOGGLE_FOLLOWING_PROGRESS:
        return {
            ...state,
            followingProgress: action.followingProgress
            ? [...state.followingProgress, action.userId]
            : state.followingProgress.filter(id => id !== action.userId)
        };
        default:
            return state;
    }
}
export const followUserSuccess = (userId) => ({type: 'FOLLOW', userId});
export const unFollowUserSuccess = (userId) => ({type: 'UNFOLLOW', userId});
export const setUsers = (users) => ({type: 'SET_USERS', users});
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});
export const toggleFollowingProgress = (followingProgress, userId) => ({type: 'TOGGLE_FOLLOWING_PROGRESS', followingProgress, userId});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then(response => { 
    dispatch(toggleIsFetching(false)); 
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    });
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.unFollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowUserSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        }); 
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followUserSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        }); 
    }
}

export default usersReducer;