import {followCreator, unFollowCreator, setUsersCreator} from '../../redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
    }
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;