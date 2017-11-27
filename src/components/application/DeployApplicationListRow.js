import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DeployApplicationListRow = ({application}) => {
  return (
    <tr>
      <td><input type="checkbox"/></td>
      <td><Link to={'/application/' + application.id}>{application.name}</Link> </td>
    </tr>
  );
};

DeployApplicationListRow.propTypes = {
  application: PropTypes.object.isRequired
};

export default DeployApplicationListRow;
