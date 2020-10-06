import { userType } from './../types/types';
import { usersAPI, followAPI } from '../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/TOGGLE_FOLLOWING_PROGRESS';



let initialState = {
    users: [] as Array<userType>,
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [] as Array<number>,
    portionSize: 20
};
type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {
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
            followingProgress: action.isFetching
            ? [...state.followingProgress, action.userId]
            : state.followingProgress.filter(id => id !== action.userId)
        };
        default:
            return state;
    }
}
type followUserSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
type unFollowUserSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<userType>
}
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const followUserSuccess = (userId: number): followUserSuccessActionType => ({type: FOLLOW, userId});
export const unFollowUserSuccess = (userId: number): unFollowUserSuccessActionType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<userType>): setUsersActionType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const queryUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((response: any) => { 
    dispatch(toggleIsFetching(false)); 
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    });
}

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        const response = await followAPI.unFollow(userId);
        if (response.data.resultCode === 0) {
            dispatch(unFollowUserSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        const response = await followAPI.follow(userId);
        if (response.data.resultCode === 0) {
            dispatch(followUserSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId)); 
    }
}

export default usersReducer;