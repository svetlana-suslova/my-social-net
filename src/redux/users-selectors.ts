import { appStateType } from './redux-store';
import { createSelector } from 'reselect';

const getUsersSelector = (state: appStateType) => {
    return state.usersPage.users.filter(u => true);
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);

});

export const getPageSize = (state: appStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: appStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: appStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: appStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingProgress = (state: appStateType) => {
    return state.usersPage.followingProgress;
}

export const getPortionSize = (state: appStateType) => {
    return state.usersPage.portionSize;
}