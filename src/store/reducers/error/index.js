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
    case t.ADD_COURSES_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to add course.',
        message: action.error || ''
      };
    case t.PATCH_COURSES_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to update course.',
        message: action.error || ''
      };
    case t.DELETE_COURSES_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to delete course.',
        message: action.error || ''
      };
    default:
      return state;
  }
}
