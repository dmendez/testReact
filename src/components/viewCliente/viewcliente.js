import React from 'react';
import template from "./viewcliente.jsx";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import webExecute from '../../common/DataProvidersCalls'

class ViewCliente extends React.Component {

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

	editClient(evt, cliente) {
		let router = this.context.router;
		router.push(`/cliente/${cliente.CliId}`);
	}

	deleteClient(evt, cliente) {
		let router = this.context.router;
		alert('Estás seguro que quieres borrar a ' + cliente.CliNombre)
		webExecute('DELETE', 'Cliente/' + cliente.CliId)
			.then(data => router.goBack() )
			.catch(error => {
				console.log(error);
				alert(error);
			});
	}

}

ViewCliente.contextTypes = {
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

export default connect(mapStateToProps)(ViewCliente);
