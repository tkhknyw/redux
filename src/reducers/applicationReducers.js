import * as types from '../constants/actionTypes';

export default function applicationReducer(state = [], action) {
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
