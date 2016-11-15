import React from "react";
import template from "./clienterow.jsx";
import * as actions from '../../../actions';
import { browserHistory } from 'react-router';

class clienterow extends React.Component {
  render() {
    return template.call(this);
  }

  editClient(evt, cliente) {
    let store = this.context.store;
    browserHistory.push('/cliente');
    store.dispatch(actions.editCliente( evt, cliente));
  }

  deleteClient(evt, cliente) {
      browserHistory.push('/cliente');
      this.props.store.dispatch(actions.deleteCliente( evt, cliente));
  }
}

clienterow.contextTypes = {
  store: React.PropTypes.object
};

export default clienterow;
