import React from 'react';
import template from "./cliente.jsx";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import webExecute from '../../common/DataProvidersCalls'

class Cliente extends React.Component {

  componentDidMount() {
    let cliId = this.props.params.CliId;
    console.log('about to fetch data for client: ' + cliId);
    let store = this.context.store;
    webExecute('GET', 'Cliente/' + cliId)
      .then(data => store.dispatch(actions.fetchCliente(data)))
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return template.call(this);
  }

  clientChanged(evt, client) {
    let store = this.context.store;
    store.dispatch(actions.dataChanged(evt, client));
  }

  handleNameChange(evt) {
    console.log('Name changed to: ' + evt.target.value);
    this.clientChanged(evt, { CliId: this.props.cliente.CliId, CliNombre: evt.target.value });
  }

  handleBalanceChange(evt) {
    console.log('Balance changed to: ' + evt.target.value);
    this.clientChanged(evt, { CliId: this.props.cliente.CliId, CliBalance: evt.target.value });
  }

  handleSave(evt) {
    console.log('saving');
    this.saveBC();
  }

  saveBC() {
    let router = this.context.router;
    webExecute('PUT', 'Cliente/' + this.props.cliente.CliId, JSON.stringify(this.props.cliente))
      .then(() => router.goBack())
  }

}

Cliente.contextTypes = {
  router: React.PropTypes.object,
  store: React.PropTypes.object
};


const mapStateToProps = state => {
  if (state.userActions.cliente) {
    return {
      cliente: state.userActions.cliente
    };
  }
};

export default connect(mapStateToProps)(Cliente);
