import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as actions from '../actions';
import { reducer as formReducer } from 'redux-form'

function userActions(state = {cliente:{ CliId: 0, CliNombre:'', CliImage:'', CliBalance:0}}, action) {
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

const rootReducer = combineReducers({
  routing: routerReducer,
  userActions,
  form: formReducer
});

export default rootReducer;
