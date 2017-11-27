import React, {PropTypes} from 'react';
import ApplicationListRow from './ApplicationListRow';

const DeployApplicationList = ({applications}) => {
  return (
    <table className = "table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Pipeline</th>
        </tr>
      </thead>
      <tbody>
      {applications.map(application =>
        <DeployApplicationListRow key={application.id} application = {application} />
      )}
      </tbody>
    </table>
  );
};

DeployApplicationList.propTypes = {
  applications: PropTypes.array.isRequired
};

export default DeployApplicationList;
