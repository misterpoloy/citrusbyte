import React from 'react'
import config from './../../constants/config'

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
      <Button style={{ background: config.primaryColor, borderColor: config.primaryColor }} type="primary">Fill out</Button>
    </div>
  )
}];
