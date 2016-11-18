import React    from "react";
import template from "./wwclientes.jsx";
import 'isomorphic-fetch';


class wwclientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: []
    }
  }

  render() {
    return template.call(this);
  }

  componentDidMount() {
    fetch('http://apps5.genexus.com/Idf4576a6f5b3608c3059b0da155c3dfe4/rest/workwithdevicescliente_cliente_list_grid1'
    ).then(response =>
        response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (response.status >= 400) {
        return Promise.reject(json);
      }
      this.setState( {...this.state, clientes:json});
    }
  ).catch( error => alert(error));
  }

}

export default wwclientes;
