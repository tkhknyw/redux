import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const DeployForm = (applications, onChange, onDeploy, loading, errors) => {
  return (

      <form>
        <h1>Dpeloy</h1>

        <div>
          <div className="container form-group">
            <div className="row">
              <div className="col-md-4">
                <input type="checkbox"/> <label>chime-notification</label>
                <input type="checkbox"/> <label>echo</label>
                <input type="checkbox"/> <label>revenue-service</label>
              </div>
              <div className="col-md-4">
                action
              </div>
              <div className="col-md-4">
                select target enviornment
              </div>
            </div>
          </div>
        </div>

        <input
          type = "Deploy"
          disabled = {loading}
          value = {loading ? "Deploying ..." : "Deploy"}
          className = "btn btn-primary"
          onClick = {onDeploy} />
      </form>


  );
};

DeployForm.propTypes = {
  applications:PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default DeployForm;
