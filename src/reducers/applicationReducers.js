import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function applicationReducer(state = initialState.applications, action) {
  switch (action.type) {
    case types.CREATE_APPLICATION:
      return [...state,
        Object.assign({}, action.application)
      ];

    case types.LOAD_APPLICATIONS_SUCCESS:
      return action.applications;

    default:
      return state;
  }
}
