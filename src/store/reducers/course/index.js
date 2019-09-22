import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  courses: [],
  loading: false
};

export default function coursesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_COURSES_REQUEST:
      return { ...state, loading: true };
    case t.FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.courses,
        loading: false
      };
    case t.ADD_COURSES_SUCCESS:
      return {
        ...state,
        courses: [...state.courses, action.course]
      };
    default:
      return state;
  }
}
