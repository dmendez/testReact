import React from 'react';
import { Route } from 'react-router';
import App from './App';
import {
  ClientesMasterContainer,
  ClientDetailContainer
} from './containers';

export default (
  <Route path="/" component={ClientDetailContainer}/>
  <Route path="wwclientes" component={ClientesMasterContainer}/>
  <Route path="cliente" component={ClientDetailContainer}/>
  </Route>
);
