import {combineReducers} from 'redux';
import applications from './applicationReducers';
import environments from './environmentReducers';

const rootReducer = combineReducers({
  applications,
  environments
});

export default rootReducer;
