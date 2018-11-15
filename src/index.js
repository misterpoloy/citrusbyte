import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux'
import store from './store';

import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

// ant.design
import "antd/dist/antd.css";
import "./app.css";

ReactDOM.render(
  <Provider store={store()}>
   <Routes />
  </Provider>,
  document.getElementById('root')
 );
 registerServiceWorker();
