import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from '../../actions/applicationActions';
import ApplicationList from './ApplicationList';

class ApplicationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Applications</h1>
        <ApplicationList applications = {this.props.applications}/>
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
