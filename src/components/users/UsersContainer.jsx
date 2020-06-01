import {followUser, unFollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Users from './Users';
import Loader from '../loader/Loader';
import { usersAPI } from '../../api/api';

class UsersContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { 
          this.props.toggleIsFetching(false); 
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {  
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
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

export default connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
  } )(UsersContainer);