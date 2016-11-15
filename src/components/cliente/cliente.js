import { Component } from 'react';
import template from "./cliente.jsx";
import { connect } from 'react-redux';

class Cliente extends Component {
  render() {
    return template.call(this);
  }
}

const mapStateToProps = state => {
  return {
    cliente: state.userActions.cliente,
  };
};


export default connect(
  mapStateToProps
)(Cliente);
