import {follow, unFollow, queryUsers} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Users from './Users';
import Loader from '../common/loader/Loader';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowingProgress, getPageSize, getTotalUsersCount, getIsFetching, getPortionSize } from '../../redux/users-selectors';
import UsersPaginator from './usersPaginator/UsersPaginator';
import {userType} from '../../types/types';
import { appStateType } from '../../redux/redux-store';

type mapStateToPropsType = {
  currentPage: number 
  pageSize: number
  isFetching: Boolean
  totalUsersCount: number
  users: Array<userType>
  portionSize: number 
  followingProgress: Array<number>
}
type mapDispatchToPropsType = { 
  queryUsers: (currentPage: number, pageSize: number) => void
  unFollow: (userId: number) => void
  follow: (userId: number) => void
}
type ownPropsType = {}

type props = mapStateToPropsType & mapDispatchToPropsType & ownPropsType

class UsersContainer extends Component<props> {
  componentDidMount() {
    const {queryUsers, currentPage, pageSize} = this.props;
    queryUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    const {queryUsers, pageSize} = this.props;
    queryUsers(pageNumber, pageSize);
  }
    
  render() {
    const {isFetching, currentPage, pageSize, users, totalUsersCount, followingProgress, unFollow, follow, portionSize} = this.props;
      return <>
        <UsersPaginator totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
        portionSize={portionSize} />
        { isFetching ? <Loader /> : null }
        <Users users={users}
        unFollow={unFollow}
        follow={follow}
        followingProgress={followingProgress} />
    </>
  }
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
    portionSize: getPortionSize(state)
  }
}

export default compose(
  connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, appStateType>(mapStateToProps, { follow, unFollow, queryUsers }))(UsersContainer);