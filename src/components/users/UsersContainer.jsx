import {followCreator, unFollowCreator, setUsersCreator, setCurrentPageCreator, setTotalUsersCountCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {  
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {  
            this.props.setUsers(response.data.items)
        });
    }
    
    render() {
        return <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unFollowUser={this.props.unFollowUser}
                followUser={this.props.followUser}
                onPageChanged={this.onPageChanged} />
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);