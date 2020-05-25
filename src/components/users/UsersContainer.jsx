import {followCreator, unFollowCreator, setUsersCreator, setCurrentPageCreator, setTotalUsersCountCreator, toggleIsFetchingCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import * as axios from 'axios';
import Users from './Users';
import Loader from '../loader/Loader';

class UsersContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
          this.props.toggleIsFetching(false); 
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {  
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
        });
    }
    
    render() {
        return <>
          { this.props.isFetching ? <Loader /> : null }
          <Users users={this.props.users}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  unFollowUser={this.props.unFollowUser}
                  followUser={this.props.followUser}
                  onPageChanged={this.onPageChanged}/>
      </>
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followCreator(userId));
    },
    unFollowUser: (userId) => {
      dispatch(unFollowCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountCreator(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingCreator(isFetching));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);