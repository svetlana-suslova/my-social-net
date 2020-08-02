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
    <>
      { !editMode &&
      <i><span className={s.status} onClick={activateEditMode}>{status || 'STATUS'}</span></i>
      }
      { editMode &&
          <input className={s.statusEdit} autoFocus
          onBlur={deactivateEditMode}
          onChange={onStatusChange} 
          value={actualStatus}/>
      }
    </> 
  );
}

export default ProfileStatusWithHooks;