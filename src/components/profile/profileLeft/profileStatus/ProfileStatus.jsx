import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Status = styled.span`
  display: block;
  margin: 0 auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
const Disabled = styled.span`
  pointer-events: none;
  display: block;
  margin: 0 auto;
  text-align: center;
`;
const StatusEdit = styled.input`
  margin: 0 auto;
  min-width: 180px;
  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 5px 3px 5px 6px rgba(237,241,245,0.8);
  &:focus {
    outline: 1px solid #edf1f5;
  }   
`;

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
      <i><Disabled>{status || 'STATUS'}</Disabled></i>
      }
      { !editMode && isOwner &&
      <i><Status title="Edit status" onClick={activateEditMode}>{status || 'STATUS'}</Status></i>
      }
      { editMode &&
          <StatusEdit autoFocus
          onBlur={deactivateEditMode}
          onChange={onStatusChange} 
          value={actualStatus}/>
      }
    </> 
  );
}

export default ProfileStatus;