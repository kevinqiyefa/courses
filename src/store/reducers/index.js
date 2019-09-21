import { combineReducers } from 'redux';
import course from './course';
import error from './error';

const rootReducer = combineReducers({
  //combine all the reducers here
  course,
  error
});

export default rootReducer;
