import React from "react";
import template from "./wwclientes.jsx";
import { connect } from 'react-redux';
import 'isomorphic-fetch';
import * as actions from '../../actions';
import webExecute from '../../common/DataProvidersCalls'

class wwclientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clientes: [] }
  }

  render() {
    return template.call(this);
  }

  componentDidMount() {
    webExecute('GET', 'workwithdevicescliente_cliente_list_grid1').then((data) => {
      this.clientsFetched(data);
    })
      .catch(error => {
        console.log(error);
        alert('FUCK!');
        alert(error);
      })
  }

  clientsFetched(clients) {
    let store = this.context.store;
    store.dispatch(actions.clientsFetched(clients));
  }

}

wwclientes.contextTypes = {
  router: React.PropTypes.object,
  store: React.PropTypes.object
};

const mapStateToProps = state => {
  if (state.userActions.clientes) {
    return {
      clientes: state.userActions.clientes
    };
  }
};


export default connect(
  mapStateToProps
)(wwclientes);
