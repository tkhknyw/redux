import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const environments = [{value:"SIT", text:"SIT"},{name:"UAT", text:"UAT"}];

class EnvironmentApi {
  static getAllEnvironments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], environments));
      }, delay);
    });
  }
}

export default EnvironmentApi;
