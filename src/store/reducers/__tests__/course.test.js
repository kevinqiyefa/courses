import coursesReducer from '../course';
import { ADD_COURSE_SUCCESS } from '../../actions/actionTypes';

it('handles actions of type APPLY_DISCOUNT', () => {
  const DEFAULT_STATE = {
    courses: [],
    loading: false
  };

  const action = {
    type: ADD_COURSE_SUCCESS,
    course: {
      subject: 'Math',
      length: 60,
      course_name: 'Algebra I',
      course_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      studentIDs: [2, 5]
    }
  };

  const newState = coursesReducer(DEFAULT_STATE, action);

  expect(newState.courses[0].subject).toEqual('Math');
  expect(newState.courses[0].course_name).toEqual('Algebra I');
  expect(newState.courses[0].length).toEqual(60);
});

it('handles action with unknown type', () => {
  const newState = coursesReducer([], { type: 'LKAFDSJLKAFD' });
  expect(newState).toEqual([]);
});
