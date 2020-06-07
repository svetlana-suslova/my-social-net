import {follow, unFollow, setCurrentPage, getUsers} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Users from './Users';
import Loader from '../loader/Loader';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class UsersContainer extends Component {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}

export default compose(
  connect(mapStateToProps, { setCurrentPage, getUsers, unFollow, follow}),
  withAuthRedirect
)(UsersContainer);