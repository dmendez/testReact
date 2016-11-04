import React from 'react';
//import { editCliente, deleteCliente, navigateCliente } from '../actions/index.js';
import { connect } from 'react-redux';
import WWClientes from '../components/wwclientes/wwclientes';

class ClientesMasterContainer extends React.Component {

  /*
  componentWillReceiveProps(nextProps) {

    if (nextProps.id)
      this.context.router.push('/login-password');
      <WWClientes actions={{editCliente: this.props.editCliente, deleteCliente: this.props.deleteCliente}}/>
  }*/

  render() {
    return (
      <WWClientes/>
    );
  }
}


export default connect()(ClientesMasterContainer);
