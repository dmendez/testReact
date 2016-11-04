import { Component } from 'react';
import template from "./cliente.jsx";

class Cliente extends Component {
  render() {
    return template.call(this);
  }
}

export default Cliente;
