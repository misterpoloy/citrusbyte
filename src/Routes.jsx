import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// HOC
import withAuthorization from './components/HOC/RouteProtector/RouteProtector'
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
          <Route path="/login" component={Login} />
          <Route exact path="/" component={withAuthorization(Home)} />
          <Route path="/feedback" component={withAuthorization(Feedback)} />
          <Route path="/team" component={withAuthorization(Team)} />
          <Route path="/teams" component={withAuthorization(Teams)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
