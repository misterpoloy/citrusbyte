import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
// Redux-actions
import * as authActions from './../../redux/actions/auth'
// Ant design
import { Card, Button, Layout } from 'antd'
// Main config
import config from './../../constants/config' 
// Style
import './style.css'
// Images
import logo from './../../resources/images/icon.png'
import background from './../../resources/images/background.png'
// Components
import AppFooter from '../../components/Footer/Footer'

const { Content } = Layout;

class Login extends React.Component {

  componentDidMount() {
    const { history } = this.props
    const token = localStorage.getItem("user");
    if (token) {
      history.push('/')
    }
  }
  componentDidUpdate() {
    const { history } = this.props
    // Check if user logged
    if (this.props.user) {
      history.push('/')
    }
  }

  render() {
    const { googlelogin } = this.props.actions
      return(
        <Layout style={ styles.layout }>
          <Content className='flex-container'>
            <Card bordered={false} style={ styles.card }>
              <img src={logo} alt="logo"/>
              <h2>{ config.appName }</h2>
              <hr />
              <Button onClick={ googlelogin } style={ styles.button } type="primary">Login with Google</Button>
            </Card>
          </Content> 
          <AppFooter />
        </Layout>
      )
  }
}

const styles = {
  layout: { backgroundImage: `url(${background})` },
  button: { background: config.primaryColor, border: config.primaryColor, marginTop: 20 },
  card: { width: 350, textAlign: 'center', paddingTop: 50, paddingBottom: 50 },
}

Login.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return({
      user: state.auth.user,
  });
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({
          googlelogin: authActions.login,
      }, dispatch)
  };
}

const finalComponent = withRouter(Login)
export default connect(mapStateToProps, mapDispatchToProps)(finalComponent);
