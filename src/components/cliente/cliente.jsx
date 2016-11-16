import "./cliente.css";
import React from "react";
import { Grid, Form, Header, Icon, Button, Label, Input, Image} from 'semantic-ui-react';
import { browserHistory  } from 'react-router';

function template() {
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
        <Form.Input id="CLIENTID" defaultValue={this.props.cliente.id} size="mini" type='text' label="Id" placeholder='Id' />
        <Form.Input id="CLIENTNAME" defaultValue={this.props.cliente.nombre} size="small" type='text' label="Nombre" placeholder='Nombre' />
        <Image size="mini" shape="circular" src={this.props.cliente.imagen} />
        No! you can't change the image right now
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
