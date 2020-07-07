import React, { Component } from 'react';

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
    const {status} = this.state;
    const {updateUserStatus} = this.props;
    this.setState({
      editMode: false
    });
    updateUserStatus(status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }
  componentDidUpdate(prevProps) {
    const {defaultStatus} = this.props;
    if (prevProps.status !== defaultStatus) {
      this.setState({
        status: defaultStatus
      });
    } 
  }

  render() {
    const {defaultStatus} = this.props;
    const {editMode, status} = this.state;
    return (
      <div>
        { !editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{defaultStatus || 'STATUS'}</span>
          </div>
        }
        { editMode &&
          <div>
            <input autoFocus type="text"
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange} 
            value={status}/>
          </div>
        }
      </div> 
    );
  }
}