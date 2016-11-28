import React from "react";
import { Table, Header, Icon} from 'semantic-ui-react'
import Clienterow from "./clienterow/clienterow";

function template() {
  return (
    <div className="container">
    <Header as='h2' icon>
        <Icon name='users' />
        Trabajar con Clientes.
        <Header.Subheader>
          Mantenimiento de datos del cliente.
        </Header.Subheader>
      </Header>
      <form className="form-horizontal">
      <Table celled structured>
      <Table.Header>
        <Table.Row  textAlign='center'>
         <Table.HeaderCell></Table.HeaderCell>
         <Table.HeaderCell>Codigo</Table.HeaderCell>
         <Table.HeaderCell>Foto</Table.HeaderCell>
         <Table.HeaderCell>Nombre</Table.HeaderCell>
         <Table.HeaderCell>Balance</Table.HeaderCell>
       </Table.Row>
     </Table.Header>

      <Table.Body>
      {
        this.props.clientes.map(function(i) {
          return <Clienterow key={i.CliId} cliente={i} />;
          })
      }
      </Table.Body>
      </Table>
      </form>
    </div>
  );
};

export default template;
