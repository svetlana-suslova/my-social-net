import {followCreator, unFollowCreator, setUsersCreator, setCurrentPageCreator, setTotalUsersCountCreator} from '../../redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';

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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;