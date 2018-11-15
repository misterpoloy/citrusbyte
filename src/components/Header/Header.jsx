import React from 'react'
import PropTypes from 'prop-types';
// Main config
import config from './../../constants/config' 
// Ant design
import { Layout, Menu, Badge } from 'antd';
// App Components
import Avatar from './../Header/Avatar/Avatar'
import MenuCircle from './../Header/MenuCircle/MenuCircle'

const { Header } = Layout;

class AppFooter extends React.Component {

  changeMenu = path => {
    const { history } = this.props
    history.push(path)
  }

  selectedKey = () => {
    const { history } = this.props
    switch (history.location.pathname) {
      case '/':
      return '2'
      case '/feedback':
      return '3'
      case '/team':
      return '4'
      case '/teams':
      return '5'
      default:
        return '2'
    }
  }

  render() {
    const { user, logout } = this.props
    return(
        <Header style={ styles.header }>
        <div className="logo" />
        <Menu
          theme={ config.theme }
          mode="horizontal"
          defaultSelectedKeys={[ this.selectedKey() ]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1" onClick={ () => this.changeMenu('/') } ><h1 style={ styles.h1 }>{ config.appName }</h1></Menu.Item>
          <Menu.Item key="2" onClick={ () => this.changeMenu('/') } >
            <Badge count={5}>
              Share feedback
            </Badge>
          </Menu.Item>
          <Menu.Item  key="3" onClick={ () => this.changeMenu('/feedback') }>
            <Badge count={2}>
              My feedback
            </Badge>
          </Menu.Item>
          <Menu.Item key="4" onClick={ () => this.changeMenu('/team') } >Team feedback</Menu.Item>
          <Menu.Item key="5" onClick={ () => this.changeMenu('/teams') } >Teams</Menu.Item>
          <Menu.Item key="6" style={ styles.right } ><Avatar logout={ logout } user={ user } /></Menu.Item>
          <Menu.Item key="7" style={ styles.right } ><MenuCircle /></Menu.Item>
        </Menu>
      </Header>
    )
  }
}

AppFooter.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func,
  history: PropTypes.func,
}

const styles = {
  header: { position: 'fixed', zIndex: 1, width: '100%' },
  h1: { lineHeight: 'normal' },
  right: { float: 'right' },
}

export default AppFooter
