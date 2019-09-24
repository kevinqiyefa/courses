import { combineReducers } from 'redux';
import course from './course';
import student from './student';
import error from './error';

const rootReducer = combineReducers({
  //combine all the reducers here
  course,
  student,
  error
});

export default rootReducer;
