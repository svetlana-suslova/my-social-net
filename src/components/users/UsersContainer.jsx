import {follow, unFollow, queryUsers} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Users from './Users';
import Loader from '../common/loader/Loader';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getFollowingProgress, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';

class UsersContainer extends Component {
    componentDidMount() {
      this.props.queryUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
      this.props.queryUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <>
          { this.props.isFetching ? <Loader /> : null }
          <Users users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  unFollow={this.props.unFollow}
                  follow={this.props.follow}
                  onPageChanged={this.onPageChanged}
                  followingProgress={this.props.followingProgress}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}/>
      </>
    }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getCurrentPage(state),
    followingProgress: getFollowingProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { queryUsers, unFollow, follow}))(UsersContainer);