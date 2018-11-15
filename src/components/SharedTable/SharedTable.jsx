import React from 'react'
// Ant design
import { Table } from 'antd';
// Table
import columns from './schema'

const SharedTable = (props) => {
  return(
    <Table dataSource={ props.dataSource } columns={ columns } />
  )
}

export default SharedTable
