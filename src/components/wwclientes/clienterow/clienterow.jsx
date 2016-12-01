import React from "react";
import { Image, Table } from 'semantic-ui-react'

function template() {
  return (
    <Table.Row key={this.props.cliente.id} onClick={(e) => this.viewClient(e,this.props.cliente)} >
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
