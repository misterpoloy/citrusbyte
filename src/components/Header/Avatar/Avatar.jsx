import React from 'react'
import { Avatar, Row, Col } from 'antd';
import './style.css'

const AvatarComponent = props => {
  return (
    <Row className="container">
      <Col span={8}>
        <Avatar size="large" src={ props.user ? props.user.photoURL : '' } />
      </Col>
      <Col offset={2} span={7}>
        <div className="profile-name">{ props.user ? props.user.displayName : '...' }</div>
        <a onClick={ props.logout } className="logout">Logout</a>
      </Col>
    </Row>
    )
}

export default AvatarComponent
