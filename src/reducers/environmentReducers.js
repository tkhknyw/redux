import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function environmentReducer(state = initialState.environments, action) {
  switch (action.type) {
    case types.LOAD_ENVIRONMENTS_SUCCESS:
      return action.environments;

    default:
      return state;
  }
}
