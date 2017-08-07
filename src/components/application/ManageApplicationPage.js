import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from '../../actions/applicationActions';
import * as environmentActions from '../../actions/environmentActions';
import ApplicationForm from './ApplicationForm';

class ManageApplicationPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      application: Object.assign({}, this.props.application),
      errors: {}
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const application = this.state.application;
    application.name = event.target.value;
    this.setState({application: application});
  }

  onClickSave(event) {
    this.props.actions.createApplication(this.state.application);
  }

  applicationRow(application, index) {
    return <div key={index}>{application.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Manage Application</h1>
        {this.props.applications.map(this.applicationRow)}

        <h2>Add Application</h2>
        <input type="text" onChange={this.onNameChange} value={this.state.application.name} />
        <input type="submit" value="Save" onClick={this.onClickSave} />

        <ApplicationForm
          application = {this.state.application}
          allEnvironments = {this.props.environments}
          errors = {this.state.errors}
          onChange = {this.onNameChange}
          onSave = {this.onClickSave}
        />
      </div>
    );
  }
}

ManageApplicationPage.propTypes = {
  actions: PropTypes.object.isRequired,
  applications: PropTypes.array.isRequired,
  application: PropTypes.object.isRequired,
  environments: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let application = {id: '', name: '', jenkinsUrl: ''};

  return {
    application: application,
    applications : state.applications,
    environments: state.environments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applicationActions, dispatch),
    environments: bindActionCreators(environmentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageApplicationPage);
