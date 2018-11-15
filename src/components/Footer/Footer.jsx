import React from 'react'
// Main config
import config from './../../constants/config' 
// Ant design
import { Layout, Row, Col } from 'antd';
const { Footer } = Layout;

class AppFooter extends React.Component {
  render() {
    return(
      <Footer style={ styles.layout }>
        <Row>
          <Col span={8}>{ config.footerTitle }</Col>
          <Col span={8} offset={8}>{ config.footerCopyright }</Col>
        </Row>
      </Footer>
    )
  }
}

const styles = {
  layout: { background: 'black', height: '8vh', color: 'white' },
}

export default AppFooter
