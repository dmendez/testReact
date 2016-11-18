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
      <Table.Cell textAlign='center'>{this.props.cliente.CliId}</Table.Cell>
      <Table.Cell>
        <Image alt="Foto del cliente" size="mini" shape="circular" centered src={this.props.cliente.CliImage}/>
      </Table.Cell>
      <Table.Cell textAlign='left'>{this.props.cliente.CliNombre}</Table.Cell>
      <Table.Cell textAlign='right'>$ {this.props.cliente.CliBalance}.00</Table.Cell>
    </Table.Row>
  );
};

export default template;
