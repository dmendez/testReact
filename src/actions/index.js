export const EDIT_CLIENTE = 'EDIT_CLIENTE'
export const DELETE_CLIENTE = 'DELETE_CLIENTE'
export const NAVIGATE_CLIENTE = 'NAVIGATE_CLIENTE'

export const EDIT_CLIENTE_CMD = 'EDIT_CLIENTE_CMD'
export const DELETE_CLIENTE_CMD = 'DELETE_CLIENTE_CMD'

export const navigateCliente = (evt, cliente) => ({
  type: NAVIGATE_CLIENTE
})

export const editCliente = (evt, cliente) => ({
  type: EDIT_CLIENTE,
  cliente
})

export const deleteCliente = (evt, cliente) => ({
  type: DELETE_CLIENTE,
  cliente
})

export const editClienteCmd = (evt, cliente) => ({
  type: EDIT_CLIENTE_CMD,
  cliente
})

export const deleteClienteCmd = (evt, cliente) => ({
  type: DELETE_CLIENTE_CMD,
  cliente
})
