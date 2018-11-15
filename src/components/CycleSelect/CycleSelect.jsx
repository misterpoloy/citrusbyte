import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
const { Item } = Menu

const menu = (
    <Menu>
      <Item>
        <a>November</a>
      </Item>
      <Item>
        <a>October</a>
      </Item>
      <Item>
        <a>September</a>
      </Item>
    </Menu>
  );

const CycleSelect = props => {
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link">
        Feedback period... <Icon type="down" />
      </a>
    </Dropdown>
  )
}

export default CycleSelect
