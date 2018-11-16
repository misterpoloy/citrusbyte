import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// HOC - validate if user is logged
import withAuthorization from './components/HOC/RouteProtector/RouteProtector'
// Routes codes
import routesCode from './constants/routes'
// Containers
import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import Feedback from './containers/Feedback/Feedback'
import Team from './containers/Team/Team'
import Teams from './containers/Teams/Teams'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path={ routesCode.PUBLIC.LOGIN } component={Login} />
          <Route exact path={ routesCode.AUTH.SHAREFB } component={withAuthorization(Home)} />
          <Route path={ routesCode.AUTH.MYFB } component={withAuthorization(Feedback)} />
          <Route path={ routesCode.AUTH.TEAMFB } component={withAuthorization(Team)} />
          <Route path={ routesCode.AUTH.TEAMS } component={withAuthorization(Teams)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
