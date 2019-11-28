import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import Home from './app/screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('container')
);
