import React from 'react'
import { Link } from 'react-router-dom'
import config from './../../constants/config'
// Routes codes
import routesCode from './../../constants/routes'

import { Avatar, Button } from 'antd';

export default [{
  title: 'User',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => (
    <div>
      <Avatar src={ record.imageUrl } size="large" icon="user" />
      <span style={{ marginLeft: 10 }}> { text }</span>
    </div>
  )
},
{
  title: 'Action',
  dataIndex: 'address',
  key: 'address',
  render: text => (
    <div>
      <Link to={ routesCode.AUTH.USERQUESTIONSButton + '/test' } style={{ background: config.primaryColor, borderColor: config.primaryColor }} type="primary">Fill out</Link>
    </div>
  )
}];
