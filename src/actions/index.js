export const EDIT_CLIENTE = 'EDIT_CLIENTE'
export const VIEW_CLIENTE = 'VIEW_CLIENTE'
export const FETCH_CLIENTE = 'FETCH_CLIENTE'
export const DELETE_CLIENTE = 'DELETE_CLIENTE'
export const SAVE_CLIENTE_CMD = 'SAVE_CLIENTE_CMD'
export const UPDATE_CLIENTE = 'UPDATE_CLIENTE'
export const CLIENT_DATA_CHANGED = 'CLIENT_DATA_CHANGED'
export const CLIENTES_FETCHED = 'CLIENTES_FETCHED'

export const fetchCliente = (cliente) => ({
  type: FETCH_CLIENTE,
  cliente
})

export const editCliente = (evt, cliente) => ({
  type: EDIT_CLIENTE,
  cliente
})

export const viewCliente = (evt, cliente) => ({
  type: VIEW_CLIENTE,
  cliente
})

export const deleteCliente = (evt, cliente) => ({
  type: DELETE_CLIENTE,
  cliente
})

export const saveClienteCmd = (evt, cliente) => ({
  type: SAVE_CLIENTE_CMD,
  cliente
})

export const dataChanged = (evt, cliente) => ({
  type: CLIENT_DATA_CHANGED,
  cliente
})

export const clientsFetched = (clientes) => ({
  type: CLIENTES_FETCHED,
  clientes
})

export const updateClient = (cliente) => ({
  type: UPDATE_CLIENTE,
  cliente
})