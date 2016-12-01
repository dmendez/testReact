import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import App from '../App';
import ClientDatailContainer from '../components/cliente';
import ClientViewContainer from '../components/viewCliente';
import ClientesMasterContainer from '../components/wwclientes/wwclientes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}/>
    <Route path="viewcliente/:CliId" component={ClientViewContainer}/>
    <Route path="cliente/:CliId" component={ClientDatailContainer}/>
    <Route path="wwclientes" component={ClientesMasterContainer}/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
