import {combineReducers} from 'redux';
import applications from './applicationReducers';

const rootReducer = combineReducers({
  applications
});

export default rootReducer;
