import React    from "react";
import template from "./wwclientes.jsx";
import { connect } from 'react-redux';
import { clientsFetched } from '../../actions/index.js';
import 'isomorphic-fetch';
import * as actions from '../../actions';

class wwclientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clientes: []  }
  }

  render() {
    return template.call(this);
  }

  componentDidMount() {
    fetch('http://apps5.genexus.com/Idf4576a6f5b3608c3059b0da155c3dfe4/rest/workwithdevicescliente_cliente_list_grid1'
    ).then(response => {
        if (response.ok)
          return response.json();
        else{
          Promise.reject('response not ok');
        }
    }).then((data) => {
      console.log('about to setState')
      this.clientsFetched(data)
      //this.setState( {...this.state, clientes:data})
    })
  .catch( error => {
    console.log(error);
    alert('FUCK!');
    alert(error);
  });
  }

  clientsFetched(clients) {
    let store = this.context.store;
   // let router = this.context.router;
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
  mapStateToProps,
  { clientsFetched }
)(wwclientes);
