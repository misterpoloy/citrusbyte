import React from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
// Redux-actions
import * as sharedActions from './../../redux/actions/shared'
// ant design
import { Row, Col } from 'antd'
// HOC
import MainLayout from './../../components/MainLayout/MainLayout'
// Components
import SharedTable from './../../components/SharedTable/SharedTable'
import CycleSelect from './../../components/CycleSelect/CycleSelect'
// Style
import './style.css';

class ShareFeedback extends React.Component {
  componentDidMount() {
    const { getUserList } = this.props.actions
    getUserList()
  }
  render() {
    const { user, logout, usersList, history } = this.props
    return(
      <MainLayout user={ user  } logout={ logout } history={ history } >
        <div className="home-container">
          <Row>
            <Col span={12}>
              <h2>Share feedback</h2>
            </Col>
            <Col span={12}>
              <CycleSelect />
            </Col>
          </Row>
          <SharedTable dataSource={ usersList } />
        </div>
      </MainLayout>
    )
  }
}

ShareFeedback.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShareFeedback);   