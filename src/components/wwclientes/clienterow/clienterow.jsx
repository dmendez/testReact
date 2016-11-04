import "./clienterow.css";
import React from "react";
import { Image, Table, Button } from 'semantic-ui-react'

function template() {
  return (
    <Table.Row>
      <Table.Cell textAlign='center'>
        <Button onClick={(e) => this.editClient(e,this.props.cliente)} label='editar' circular icon='file'/>
        <Button onClick={(e) => this.deleteClient(e,this.props.cliente)} label='borrar' circular icon='remove'/>
      </Table.Cell>
      <Table.Cell textAlign='center'>{this.props.cliente.id}</Table.Cell>
      <Table.Cell><Image alt="Foto del cliente" size="mini" shape="circular" centered src={this.props.cliente.imagen}/></Table.Cell>
      <Table.Cell textAlign='left'>{this.props.cliente.nombre}</Table.Cell>
    </Table.Row>
  );
};

export default template;