import React from 'react';
import template from "./cliente.jsx";
import { connect } from 'react-redux';
import { fetchCliente, editClienteCMD, deleteClienteCMD } from '../../actions/index.js';

class Cliente extends React.Component {
  componentDidMount() {
    let cliId = this.props.params.CliId
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
}

Cliente.contextTypes ={
  router: React.PropTypes.object
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
