import React from "react";
import template from "./clienterow.jsx";

import * as actions from '../../../actions';

import configureStore from '../../../store/configureStore';
const store = configureStore();

class clienterow extends React.Component {
  render() {
    return template.call(this);
  }

  editClient(evt, cliente) {
      store.dispatch(actions.editCliente( evt, cliente));
      store.dispatch(actions.navigateCliente( evt));
  }

  deleteClient(evt, cliente) {
      store.dispatch(actions.deleteCliente( evt, cliente));
      store.dispatch(actions.navigateCliente( evt));
  }
}

export default clienterow;
