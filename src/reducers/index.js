import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import merge from 'lodash/merge';
import * as actions from '../actions';

// Guarda una entidad obtenida de la api (response.entities) en el state (caso github),
// hay que ver como lo manda el back de banco delta
function entities(state = { user: {} }, action) {
  if (action.response && action.response.result) {
    return merge({}, state, action.response.result);
  }
  return state;
}

function userActions(state = {cliente:{ CliId: 0, Clinombre:'', Cliimagen:'', Clibalance:0}}, action) {
  switch (action.type) {
    case actions.FETCH_CLIENTE:
        return {...state,
                cliente: {...action.cliente}
        };
    case actions.EDIT_CLIENTE:
        return {...state,
                gxMode: 'EDT',
                cliente: {...action.cliente}
        };
    case actions.DELETE_CLIENTE:
      return {...state,
            gxMode: 'DLT',
            cliente: {...action.cliente}
      };
    default:
      return state;
  }
}

// este reducer se encarga de manejar el estado de los request
function fetch(state = { isFetching: false, error: null }, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return merge({}, state, {
        isFetching: true,
        lastEndpoint: action.endpoint
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  entities,
  fetch,
  userActions
});

export default rootReducer;
