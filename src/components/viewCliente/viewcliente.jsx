import React from "react";
import { Card, Image, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

function template() {
	if (!this.props.cliente)
		return <h1>Shit happens! :(</h1>
	return (
		<Card>
			<Image src={this.props.cliente.CliImage} />
			<Card.Content>
				<Card.Header>
					{this.props.cliente.CliNombre}
				</Card.Header>
				<Card.Description>
					{this.props.cliente.CliNombre} has a balance of $ {this.props.cliente.CliBalance}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div className="ui three buttons">
					<Button basic color='green' onClick={(e) => this.editClient(e,this.props.cliente)} >Edit</Button>
					<Button basic color='red' onClick={(e) => this.deleteClient(e,this.props.cliente)}>Delete</Button>
				</div>
			</Card.Content>
			<Card.Content extra>
				<div className="ui one buttons">
					<Button basic color='blue' onClick={browserHistory.goBack}>Cancel</Button>
				</div>
			</Card.Content>
		</Card>
	);
};



export default template;
