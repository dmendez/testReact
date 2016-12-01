import React from "react";
import template from "./clienterow.jsx";
import * as actions from '../../../actions';

class clienterow extends React.Component {
  render() {
    return template.call(this);
  }


 viewClient(evt, cliente) {
    let store = this.context.store;
    let router = this.context.router;
    router.push(`/viewcliente/${cliente.CliId}`);
    store.dispatch(actions.viewClient( evt, cliente));
  }
}

clienterow.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
};

export default clienterow;
