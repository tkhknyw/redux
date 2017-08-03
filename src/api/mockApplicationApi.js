import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const applications = [
  {
    id: "0fd1d35c-6f00-11e7-907b-a6006ad3dba0",
    name: "chime-notification",
    jenkinsUrl: "http://www.pluralsight.com/courses/react-flux-building-applications"
   },
  {
    id: "0fd1d960-6f00-11e7-907b-a6006ad3dba0",
    name: "echo",
    jenkinsUrl: "http://www.pluralsight.com/courses/react-flux-building-applications"
  },
  {
    id: "0fd1db4a-6f00-11e7-907b-a6006ad3dba0",
    name: "revenue-service",
    jenkinsUrl: "http://www.pluralsight.com/courses/react-flux-building-applications"
  }
];

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (application) => {
  return guid();
};

class ApplicationApi {
  static getAllApplications() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], applications));
      }, delay);
    });
  }

  static saveApplication(application) {
    application = Object.assign({}, application); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (application.name.length < minCourseTitleLength) {
          reject(`Name must be at least ${minCourseTitleLength} characters.`);
        }

        if (application.id) {
          const existingCourseIndex = applications.findIndex(a => a.id == application.id);
          applications.splice(existingCourseIndex, 1, application);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          application.id = generateId();
          application.jenkinsUrl = `http://www.pluralsight.com/courses/${application.id}`;
          applications.push(application);
        }

        resolve(application);
      }, delay);
    });
  }

  static deleteApplication(applicationId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = applications.findIndex(application => {
          application.id == applicationId;
        });
        applications.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ApplicationApi;
