import React from "react";
import { Grid, Form, Header, Icon, Button, Label, Input, Image} from 'semantic-ui-react';
import { browserHistory  } from 'react-router';

function template() {
  if (!this.props.cliente)
    return <h1>Shit happens! :(</h1>
  return (
  <div className="container">
    <Header as='h2' icon>
      <Icon name='user' />
      Cliente.
      <Header.Subheader>
        Datos.
      </Header.Subheader>
      </Header>
      <Form className="form-horizontal">
        <Label id="CLIENTID">CliId: {this.props.cliente.CliId}</Label>
        <Form.Input id="CLIENTNAME" value={this.props.cliente.CliNombre} onChange={this.handleNameChange.bind(this)} size="small" type='text' label="Nombre" placeholder='Nombre' />
        <Image size="mini" shape="circular" src={this.props.cliente.CliImage} />
        No! you can't change the image right now
        <Form.Input labelPosition='right'>
          <Label basic>$</Label>
            <Input id="CLIENTBALANCE" value={this.props.cliente.CliBalance} onChange={this.handleBalanceChange.bind(this)} label="Saldo" type='small' placeholder='Saldo' />
            <Label>.00</Label>
        </Form.Input>
        </Form>
        <Grid>
          <Grid.Row centered>
            <Button.Group>
              <Button onClick={browserHistory.goBack}>Cancelar</Button>
              <Button.Or />
              <Button positive onClick={this.handleSave.bind(this)} >Guardar</Button>
            </Button.Group>
          </Grid.Row>
        </Grid>
    </div>
  );
};



export default template;
