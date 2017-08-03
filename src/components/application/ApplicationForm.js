import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ApplicationForm = (application, allEnvironments, onChange, onSave, loading, errors) => {
  return (
    <form>
      <h1>Manage Application</h1>
      <TextInput
        name="name"
        label="Name"
        placeHolder="Enter application name"
        value={application.name}
        error={errors}
        onChange={onChange}
      />

      <SelectInput
        name="environment"
        label="Environment"
        options={allEnvironments}
        defaultOption="Select Envrionment"
        value={application.environment}
        error={errors}
        onChange={onChange}
      />

      <input
        type = "submit"
        disabled = {loading}
        value = {loading ? "Saving ..." : "Save"}
        className = "btn btn-primary"
        onClick = {onSave} />
    </form>
  );
};

ApplicationForm.propTypes = {
  application: PropTypes.object.isRequired,
  allEnvironments:PropTypes.arrayOf(PropTypes.object),
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default ApplicationForm;
