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
        message: action.error.message
      };
    case t.ADD_COURSES_FAIL:
      return {
        ...state,
        hasError: true,
        title: 'Unable to Add courses.',
        message: action.error.message
      };
    default:
      return state;
  }
}
