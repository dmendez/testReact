import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRedirect } from 'react-router';
import App from '../App';
import {ClientsMaster, ClientDatail} from '../containers';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}/>
    <Route path="cliente" component={ClientDatail}/>
    <Route path="wwclientes" component={ClientsMaster}/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
