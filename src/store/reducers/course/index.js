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
    case t.ADD_COURSE_SUCCESS:
      return {
        ...state,
        courses: [...state.courses, action.course]
      };
    case t.PATCH_COURSE_SUCCESS:
      const updatedCourses = state.courses.map(course =>
        course.id === action.courseID ? action.updatedCourse : course
      );
      return {
        ...state,
        courses: updatedCourses
      };
    case t.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.courseID)
      };
    default:
      return state;
  }
}
