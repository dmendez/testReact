import React from 'react';
import { editClienteCMD, deleteClienteCMD } from '../actions/index.js';
import { connect } from 'react-redux';
import Cliente from '../components/cliente/cliente';

class ClientDatailContainer extends React.Component{

  render() {
    return (<Cliente />);
  }
}


ClientDatailContainer.contextTypes ={
  router: React.PropTypes.object
};

const mapStateToProps = state => {
  return {
    cliente: state.userActions.cliente,
    id: state.userActions.cliente.id,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    editCliente: (cliente) => {dispatch(editClienteCMD(cliente))},
    deleteCliente: (cliente) => {dispatch(deleteClienteCMD(cliente))}
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDatailContainer);
