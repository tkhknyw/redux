import React, {PropTypes} from 'react';
const SelectInput = ({name, label, options, defaultOption, value, error, onChange}) => {
  return (
    <div className = "form-group">
      <label htmlFor = {name}>{label}</label>
      <div className = "field">


        {
          <select
            name={name}
            value={value}
            className="form-control"
            onChange={onChange}>
            <option value="">{defaultOption}</option>

          </select>
        }



        {error && <div className="alert alert-danger">{error}</div>}

      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
