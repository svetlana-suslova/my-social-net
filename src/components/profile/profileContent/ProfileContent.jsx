import React, { useState } from 'react';
import s from './ProfileInfo.module.sass';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from '../myPosts/MyPostsContainer';
import MessagesContainer from '../messages/MessagesContainer';


const ProfileContent = ({profile, isOwner, saveProfile}) => {
  const [activeTab, setActiveTab] = useState('2');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <Nav tabs className={s.nav}>
        <NavItem>
          <NavLink
            className={classnames({ [s.active] : activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Last posts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ [s.active] : activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ [s.disabled]: true })}
            onClick={() => { toggle('3'); }}>
            Chat
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <MyPostsContainer isOwner={isOwner} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
            <ProfileInfo profile={profile} 
            isOwner={isOwner}
            saveProfile={saveProfile} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            <MessagesContainer />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
}

export default ProfileContent;