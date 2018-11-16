import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// Redux-actions
import * as authActions from './../../../redux/actions/auth'
// Ant design
import { Spin, Icon } from 'antd';

export default (WrappedComponent) => {
  class RouteProtector extends React.Component {
    componentDidMount() {
      const { actions } = this.props
      const token = localStorage.getItem("user");
      if (token) {
        actions.setUser(JSON.parse(token))
      }
    }
    render() {
      const {
        isLoading,
        user,
        history,
        actions,
      } = this.props
        
      if (isLoading) {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return <Spin indicator={antIcon} />
      }
      
      // If user, that's it
      if (user) {
        return <WrappedComponent user={ user } logout={ actions.signout } history={ history } />
      // If don't but token... check
      } else {
        history.push('/login')
        return <div>Redirecting...</div>
      }
    }
  }
      
  RouteProtector.propTypes = {
    user: PropTypes.object,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isLoading: PropTypes.bool
  };
      
  function mapStateToProps(state) {
    return({
      user: state.auth.user,
      isLoading: state.auth.loading,
    });
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({
        setUser: authActions.setCurrentUser,
        signout: authActions.logout,
      }, dispatch)
    };
  }

   const RProutes = withRouter(RouteProtector)
   return connect(mapStateToProps, mapDispatchToProps)(RProutes);   
  };