import React from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
// Routes codes
import routesCode from './../../constants/routes'
// Redux-actions
import * as sharedActions from './../../redux/actions/shared'
// HOC
import MainLayout from './../../components/MainLayout/MainLayout';
// Main config
import config from './../../constants/config' 
// Ant design
import { Button, Icon, Input, Row, Col, Progress } from 'antd';
// Style
import './style.css';

const ButtonGroup = Button.Group;
const { TextArea } = Input;

class Answer extends React.Component {
  componentDidMount() {
    const { getUserList } = this.props.actions
    getUserList()
  }
  render() {
    const { user, logout, history } = this.props
    return(
      <MainLayout user={ user  } logout={ logout } history={ history } >
        <div className="home-container">
          <div>
            <Button onClick={ () => history.push( routesCode.AUTH.SHAREFB ) }>
              <Icon type="left" />Backward
            </Button>
          </div>
          <h1>How well did I display courage?</h1>
          <p>Share your feedback for Christopher Jhonson</p>
          <TextArea rows={12} />
          <Row style={{ padding: 20 }}>
            <Col span={8}>
              <Button size="large">
                <Icon type="left" /> Previous
              </Button>
            </Col>
            <Col style={{ textAlign: 'center' }} span={8}>
              <Button size="large">Skip</Button>
            </Col>
            <Col style={{ textAlign: 'right' }} span={8}>
              <Button style={ styles.button } size="large">
                Next <Icon type="right" />
              </Button>
            </Col>
          </Row>
          <div>
            <Progress percent={50} showInfo={false} />
          </div>
          <Row style={{ padding: 20 }}>
            <Col span={12}>
              <div>Questions completed</div>
              <div>1/7</div>
            </Col>
            <Col style={{ textAlign: 'right' }} span={12}>
            <ButtonGroup>
              <Button icon="star" />
              <Button icon="star" />
              <Button icon="star" />
              <Button icon="star" />
              <Button icon="star" />
              <Button icon="flag" />
            </ButtonGroup>
            </Col>
          </Row>
        </div>
      </MainLayout>
    )
  }
}
const styles = {
  button: { background: config.primaryColor, color: 'white', border: config.primaryColor },
}
Answer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Answer);   