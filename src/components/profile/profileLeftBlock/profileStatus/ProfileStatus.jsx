import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.sass';

const ProfileStatus = ({status, updateUserStatus, isOwner}) => {

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
      { !isOwner &&
      <i><span className={s.disabled}>{status || 'STATUS'}</span></i>
      }
      { !editMode && isOwner &&
      <i><span className={s.status} title="Edit status" onClick={activateEditMode}>{status || 'STATUS'}</span></i>
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

export default ProfileStatus;