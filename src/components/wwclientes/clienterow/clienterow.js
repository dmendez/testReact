import React from "react";
import template from "./clienterow.jsx";
import * as actions from '../../../actions';

class clienterow extends React.Component {
  render() {
    return template.call(this);
  }

  editClient(evt, cliente) {
    let store = this.context.store;
    let router = this.context.router;
    router.push(`/cliente/${cliente.CliId}`);
    store.dispatch(actions.editCliente( evt, cliente));
  }

  deleteClient(evt, cliente) {
    let store = this.context.store;
    let router = this.context.router;
    router.push('/cliente');
    store.dispatch(actions.deleteCliente( evt, cliente));
  }
}

clienterow.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
};

export default clienterow;
