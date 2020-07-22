import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.sass';

const ProfileStatusWithHooks = ({status, updateUserStatus}) => {

  let [editMode, setEditMode] = useState(false);
  let [actualStatus, setStatus] = useState(status);

  useEffect( () => {
    setStatus(status);
  }, [status] );

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(actualStatus);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    
  }
  
  return (
    <div>
      { !editMode &&
        <div className={s.status}>
          <span onDoubleClick={activateEditMode}>{status || 'STATUS'}</span>
        </div>
      }
      { editMode &&
        <div>
          <input autoFocus type="text"
          onBlur={deactivateEditMode}
          onChange={onStatusChange} 
          value={actualStatus}/>
        </div>
      }
    </div> 
  );
}

export default ProfileStatusWithHooks;