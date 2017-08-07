import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function environmentReducer(state = initialState.environments, action) {
  switch (action.type) {
    case types.LOAD_ENVIRONMENTS_SUCCESS:
      return action.environments;

    default:
      return state;
  }
}
