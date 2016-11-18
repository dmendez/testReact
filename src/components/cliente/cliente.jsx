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
        <Form.Input id="CLIENTID" value={this.props.cliente.CliId || ''} size="mini" type='text' label="Id" placeholder='Id' />
        <Form.Input id="CLIENTNAME" value={this.props.cliente.CliNombre || ''} size="small" type='text' label="Nombre" placeholder='Nombre' />
        <Image size="mini" shape="circular" src={this.props.cliente.CliImage || ''} />
        No! you can't change the image right now
        <Form.Input labelPosition='right'>
          <Label basic>$</Label>
            <Input value={this.props.cliente.CliBalance || ''} id="CLIENTBALANCE" label="Saldo" type='small' placeholder='Saldo' />
            <Label>.00</Label>
        </Form.Input>
        <Grid>
          <Grid.Row centered>
            <Button.Group>
              <Button onClick={browserHistory.goBack} >Cancel</Button>
              <Button.Or />
              <Button positive>Guardar</Button>
            </Button.Group>
          </Grid.Row>
        </Grid>
        </Form>
    </div>
  );
};

export default template;
