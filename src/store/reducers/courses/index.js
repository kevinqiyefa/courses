import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  courses: []
};

export default function coursesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_COURSES_SUCCESS:
      return {
        courses: action.courses
      };

    default:
      return state;
  }
}
