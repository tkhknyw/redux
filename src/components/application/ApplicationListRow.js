import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ApplicationListRow = ({application}) => {
  return (
    <tr>
      <td><Link to={'/application/' + application.id}>{application.name}</Link> </td>
      <td><a href={application.jenkinsUrl} target="_blank">Goto Pipeline</a></td>
    </tr>
  );
};

ApplicationListRow.propTypes = {
  application: PropTypes.object.isRequired
};

export default ApplicationListRow;
