import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import merge from 'lodash/merge';
import { browserHistory } from 'react-router';
import * as actions from '../actions';

// Guarda una entidad obtenida de la api (response.entities) en el state (caso github),
// hay que ver como lo manda el back de banco delta
function entities(state = { user: {} }, action) {
  if (action.response && action.response.result) {
    return merge({}, state, action.response.result);
  }
  return state;
}

function userActions(state = {cliente: {}}, action) {
  switch (action.type) {
    case actions.EDIT_CLIENTE:
    debugger;
      return merge({...state}, {
        gxMode: 'EDT',
        cliente: {...action.cliente}
      });
    case actions.DELETE_CLIENTE:
        return merge({...state}, {
          gxMode: 'DLT',
          cliente: {...action.cliente}
        });
    case actions.NAVIGATE_CLIENTE:
        browserHistory.push('/cliente');
        return {...state};
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
