import * as types from '../constants/actionTypes';
import applicationApi from '../api/mockApplicationApi';

export function createApplication(application) {
  return {type: types.CREATE_APPLICATION, application};
}

export function loadApplicationsSuccess(applications) {
  return {type: types.LOAD_APPLICATIONS_SUCCESS, applications};
}

//thunk
export function loadApplications() {
  return function(dispatch) {
    return applicationApi.getAllApplications().then(applications => {
      dispatch(loadApplicationsSuccess(applications));
    }).catch(error => {
      throw(error);
    });
  };
}
