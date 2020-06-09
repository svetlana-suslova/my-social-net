import React, { Component } from 'react';
// import s from './ProfileInfo.module.sass';

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  
  activateEditMode = () => {
    this.setState({
      editMode: true
    }); 
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    } 
  }

  render() {
    return (
      <div>
        { !this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'STATUS'}</span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input autoFocus type="text"
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange} 
            value={this.state.status}/>
          </div>
        }
      </div> 
    );
  }
}