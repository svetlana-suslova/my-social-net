import {follow, unFollow, queryUsers} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Users from './Users';
import Loader from '../common/loader/Loader';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowingProgress, getPageSize, getTotalUsersCount, getIsFetching, getPortionSize } from '../../redux/users-selectors';

class UsersContainer extends Component {
  componentDidMount() {
    const {queryUsers, currentPage, pageSize} = this.props;
    queryUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const {queryUsers, pageSize} = this.props;
    queryUsers(pageNumber, pageSize);
  }
    
  render() {
    const {isFetching, currentPage, pageSize, users, totalUsersCount, followingProgress, toggleFollowingProgress, unFollow, follow, portionSize} = this.props;
      return <>
        { isFetching ? <Loader /> : null }
        <Users users={users}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        unFollow={unFollow}
        follow={follow}
        onPageChanged={this.onPageChanged}
        followingProgress={followingProgress}
        toggleFollowingProgress={toggleFollowingProgress}
        portionSize={portionSize}
        />
    </>
  }
}

const mapStateToProps = (state) => {
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
  connect(mapStateToProps, { queryUsers, unFollow, follow}))(UsersContainer);