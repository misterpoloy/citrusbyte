import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
// Redux-actions
import * as sharedActions from './../../redux/actions/shared'
// HOC
import MainLayout from './../../components/MainLayout/MainLayout';
// Style
import './style.css';

class Error404 extends React.Component {
  componentDidMount() {
    const { getUserList } = this.props.actions
    getUserList()
  }
  render() {
    const { user, logout, history } = this.props
    return(
      <MainLayout user={ user  } logout={ logout } history={ history } >
        <div className="home-container">
          <h2>Error 404</h2>
        </div>
      </MainLayout>
    )
  }
}

Error404.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  history: PropTypes.object,
};

function mapStateToProps(state) {
  return({
    usersList: state.shared.users,
  });
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getUserList: sharedActions.getUsers,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Error404);   