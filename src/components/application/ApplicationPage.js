import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from '../../actions/applicationActions';

class ApplicationPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      application: {name: ""}
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
        <h1>Applications</h1>
        {this.props.applications.map(this.applicationRow)}

        <h2>Add Application</h2>
        <input type="text" onChange={this.onNameChange} value={this.state.application.name} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}

ApplicationPage.propTypes = {
  actions: PropTypes.object.isRequired,
  applications: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    applications : state.applications
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applicationActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);
