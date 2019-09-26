import studentsReducer from '../student';
import { ADD_STUDENT_SUCCESS } from '../../actions/actionTypes';

it('handles actions of type APPLY_DISCOUNT', () => {
  const DEFAULT_STATE = {
    students: [],
    loading: false
  };

  const action = {
    type: ADD_STUDENT_SUCCESS,
    student: {
      courseID: 222,
      first_name: 'Kevin',
      last_name: 'Qi',
      grade_level: 9
    }
  };

  const newState = studentsReducer(DEFAULT_STATE, action);

  expect(newState.students[0].first_name).toEqual('Kevin');
  expect(newState.students[0].last_name).toEqual('Qi');
  expect(newState.students[0].grade_level).toEqual(9);
});

it('handles action with unknown type', () => {
  const newState = studentsReducer([], { type: 'LKAFDSJLKAFD' });
  expect(newState).toEqual([]);
});
