import React from 'react'
import PropTypes from 'prop-types';
// Ant design
import { Layout } from 'antd';
// App Components
import Footer from './../Footer/Footer'
import Header from './../Header/Header'

const { Content } = Layout;

class MainLayout extends React.Component {
  render() {
    const { user, logout, history } = this.props
    return(
      <Layout style={ styles.layout }>
        <Header user={ user } logout={ logout } history={ history } />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: '80vh' }}>
            { this.props.children }
          </div>
        </Content>
        <Footer />
      </Layout>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func,
  history: PropTypes.object,
}

const styles = {
  layout: { height: '-webkit-fill-available' },
}

export default MainLayout
