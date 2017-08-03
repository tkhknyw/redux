import EnvironmentApi from '../api/mockEnvironmentApi';
import * as types from '../constants/actionTypes';

export function loadEnvironmentsSuccess(environments) {
  return {type: types.LOAD_ENVIRONMENTS_SUCCESS, environments};
}

export function loadEnvironments() {
  return dispatch => {
    return EnvironmentApi.getAllEnvironments()
      .then(environments => {dispatch(loadEnvironmentsSuccess(environments));})
      .catch(error => {throw(error);});
  };
}
