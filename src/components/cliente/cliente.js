import React from 'react';
import template from "./cliente.jsx";
import { connect } from 'react-redux';
import { fetchCliente, editClienteCMD, deleteClienteCMD } from '../../actions/index.js';
import * as actions from '../../actions';

class Cliente extends React.Component {
  
  componentDidMount() {
    let cliId = this.props.params.CliId;
    console.log('about to fetch data for client: ' + cliId);
    fetch('http://apps5.genexus.com/Idf4576a6f5b3608c3059b0da155c3dfe4/rest/WorkWithDevicesCliente_Cliente_Section_General?CliId=' + cliId
    ).then(response =>
            response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (response.status >= 400) {
        return Promise.reject(json);
      }
      this.props.fetchCliente( json);
    }
    )
  }

  render() {
    return template.call(this);
  }

  clientChanged(evt, client) {
    let store = this.context.store;
    let router = this.context.router;
    store.dispatch(actions.dataChanged( evt, client));
  }

  handleNameChange(evt){
    console.log('Name changed to: ' + evt.target.value);
    this.clientChanged(evt, {CliId: this.props.cliente.CliId, CliNombre: evt.target.value });
  }

  handleBalanceChange(evt){
    console.log('Balance changed to: ' + evt.target.value);
    this.clientChanged(evt, {CliId: this.props.cliente.CliId, CliBalance: evt.target.value });
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

export default connect(
  mapStateToProps,
  { fetchCliente, editClienteCMD, deleteClienteCMD}
)(Cliente);
