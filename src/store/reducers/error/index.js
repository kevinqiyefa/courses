import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = { hasError: false, title: '', message: '' };

export default function errorReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // case t.SET_ERROR:
    //   return {
    //     ...state,
    //     hasError: true,
    //     title: 'Error',
    //     message: action.error.message || ''
    //   };
    // case t.CLEAR_ERROR:
    //   return DEFAULT_STATE;
    case t.FETCH_COURSES_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to fetch courses.',
        message: action.error || ''
      };
    case t.ADD_COURSE_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to add course.',
        message: action.error || ''
      };
    case t.PATCH_COURSE_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to update course.',
        message: action.error || ''
      };
    case t.DELETE_COURSE_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to delete course.',
        message: action.error || ''
      };
    case t.FETCH_STUDENTS_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to fetch students.',
        message: action.error || ''
      };
    case t.ADD_STUDENT_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to add student.',
        message: action.error || ''
      };
    case t.PATCH_STUDENT_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to update student.',
        message: action.error || ''
      };
    case t.DELETE_STUDENT_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to delete student.',
        message: action.error || ''
      };
    default:
      return state;
  }
}
