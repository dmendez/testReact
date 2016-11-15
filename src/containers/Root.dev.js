import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import App from '../App';
import {ClientesMasterContainer, ClientDatailContainer} from '../containers';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}/>
    <Route path="cliente" component={ClientDatailContainer}/>
    <Route path="wwclientes" component={ClientesMasterContainer}/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
