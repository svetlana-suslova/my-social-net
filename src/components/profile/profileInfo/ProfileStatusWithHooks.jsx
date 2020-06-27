import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     });
  //   } 
  // }
    return (
      <div>
        { !editMode &&
          <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'STATUS'}</span>
          </div>
        }
        { editMode &&
          <div>
            <input autoFocus type="text"
            onBlur={deactivateEditMode}
            onChange={onStatusChange} 
            value={status}/>
          </div>
        }
      </div> 
    );
}

export default ProfileStatusWithHooks;