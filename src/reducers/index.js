import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as actions from '../actions';
import { reducer as formReducer } from 'redux-form'

function userActions(state = { cliente: { CliId: 0, CliNombre: '', CliImage: '', CliBalance: 0 }, clientes: [] }, action) {
  switch (action.type) {
    case actions.FETCH_CLIENTE:
      return {...state,
        cliente: {...action.cliente }
      };
    case actions.EDIT_CLIENTE:
      return {...state,
        gxMode: 'EDT',
        cliente: {...action.cliente }
      };
    case actions.DELETE_CLIENTE:
      return {...state,
        gxMode: 'DLT',
        cliente: {...action.cliente }
      };
    case actions.CLIENT_DATA_CHANGED:
      return {...state,
        cliente: Object.assign({...state.cliente}, action.cliente)
      };
    case actions.CLIENTES_FETCHED:
      let aux = action.clientes; // OJO con el paginado, no siempre son todos los que vinieron, a veces hay que agregar y tal vez eliminar
      return {...state, clientes: aux };
    // case actions.UPDATE_CLIENTE:
    //   return webExecute('PUT', 'Cliente/' + state.cliente.CliId , JSON.stringify(state.cliente))
    //   .then(cliente => {
    //     debugger;
    //     return {...state, cliente};
    //   })
    //   .catch( (err) => {return state});
    default:
      console.log('ATENTI!: ' + action.type)
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  userActions,
  form: formReducer
});

export default rootReducer;
