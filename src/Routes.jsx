import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// HOC - validate if user is logged
import withAuthorization from './components/HOC/RouteProtector/RouteProtector'
// Routes codes
import routesCode from './constants/routes'
// Containers
import Login from './containers/Login/Login'
import ShareFeedback from './containers/ShareFeedback/ShareFeedback'
import MyFeedback from './containers/MyFeedback/MyFeedback'
import TeamFeedback from './containers/TeamFeedback/TeamFeedback'
import Teams from './containers/Teams/Teams'
// Error pages
import Error404 from './containers/Error404/Error404'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={ routesCode.PUBLIC.LOGIN } component={Login} />
          <Route exact path={ routesCode.AUTH.SHAREFB } component={withAuthorization(ShareFeedback)} />
          <Route path={ routesCode.AUTH.MYFB } component={withAuthorization(MyFeedback)} />
          <Route path={ routesCode.AUTH.TEAMFB } component={withAuthorization(TeamFeedback)} />
          <Route path={ routesCode.AUTH.TEAMS } component={withAuthorization(Teams)} />
          <Route component={withAuthorization(Error404)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
