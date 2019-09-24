import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  students: [],
  loading: false
};

export default function studentsReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_STUDENTS_REQUEST:
      return { ...state, loading: true };
    case t.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.students,
        loading: false
      };
    default:
      return state;
  }
}
