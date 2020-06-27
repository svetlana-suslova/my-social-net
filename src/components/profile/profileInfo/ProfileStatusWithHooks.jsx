import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

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